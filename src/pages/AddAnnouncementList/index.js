import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { colors, getData } from '../../utils'
import { CardList, Gap } from '../../component'
import axios from 'axios'
import Api from '../../Api'
import { useIsFocused } from '@react-navigation/native'
import Icons from 'react-native-vector-icons/FontAwesome5'
import moment from 'moment'

const AddAnnouncementList = ({navigation}) => {
    const isFocused = useIsFocused()
    const [announcement, setAnnouncement] = useState('')

    const fetcData = async () => {
        try {
            const responseAnnouncement = await Api.indexAnnouncement()
            setAnnouncement(responseAnnouncement.data.data)
            console.log(responseAnnouncement.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        isFocused && fetcData()
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
                        <Text style={styles.headerTitle}>Announcement</Text>
                    </View>
                </View>
                <View style={styles.line}></View>
                <Gap height={20}/>
                {Object.values(announcement).map((data) => {
                    return (
                        <View>
                            <CardList key={data.id}
                                image={data.image}
                                name={data.title}
                                desc={moment(data.created_at).format('DD MMM YYYY')}
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

export default AddAnnouncementList