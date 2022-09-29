import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { colors, getData } from '../../utils'
import { CardList, Gap } from '../../component'
import axios from 'axios'
import Api from '../../Api'
import { useIsFocused } from '@react-navigation/native'
import Icons from 'react-native-vector-icons/FontAwesome5'

const AddAdminList = ({navigation}) => {
    const isFocused = useIsFocused()
    const [admin, setAdmin] = useState('')
    const [token, setToken] = useState('')

    const getListAdmin = () => {
        getData('user').then( res => {
            setToken(res.token)
            const fetcData = async () => {
                try {
                    const response = await Api.indexAdmin(res.token)
                    setAdmin(response.data.data)
                } catch (error) {
                    console.log(error)
                }
            }
            fetcData()
        })
    }

    const delAdmin = async (id) => {
        try {
            const response = await Api.DeleteAdmin(id, token)
            navigation.goBack()
        } catch (error) {
            
        }
    }

    useEffect(() => {
      isFocused && getListAdmin()
    }, [isFocused])
    

    return (
        <View style={styles.container}>
            <StatusBar barStyle = "default" hidden = {false} backgroundColor = {colors.Red} translucent = {false}/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} onPress={ () => navigation.goBack()}>
                    <Icons name="arrow-circle-left" size={20} color={ colors.Black }/>
                    <Gap width={10}/>
                    <Text style={{ fontFamily: 'Poppins-Bold', color: colors.Black, top: 2}}>
                        Back
                    </Text>
                </TouchableOpacity>
                <Gap height={10}/>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={styles.headerTitle}>Admin</Text>
                    </View>
                </View>
                <View style={styles.line}></View>
                <Gap height={20}/>
                {Object.values(admin).map((data, index) => {
                    return (
                        <View>
                            <CardList key={data.id}
                                id={data.id}
                                image={data.image}
                                name={data.name}
                                desc={data.email}
                                type={'addAdmin'}
                                onPressDel={ () => delAdmin(data.id)}
                            />
                            <Gap height={10}/>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: colors.White,
        padding: 16,
    },
    headerTitle: {
        fontFamily: 'Poppins-Bold', 
        color: colors.Black, 
        fontSize: 24
    },
    line: {
      width: '65%',
      height: 2,
      backgroundColor: colors.Red
    },
})

export default AddAdminList