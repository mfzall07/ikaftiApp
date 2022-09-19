import React, {useState, useEffect} from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { CardAgenda, Gap } from '../../component'
import { colors } from '../../utils'
import moment from 'moment'
import Icons from 'react-native-vector-icons/FontAwesome5';
import Api from '../../Api'
import axios from 'axios'

const AgendaList = ({navigation}) => {

    const [agenda, setAgenda] = useState ('')

    const fetcData = async () => {
        try {
            const responseAgenda = await Api.indexAgenda()
            setAgenda(responseAgenda.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetcData()
    }, [])

  return (
    <View style={styles.container}>
        <StatusBar barStyle = "default" hidden = {false} backgroundColor = {colors.Red} translucent = {false}/>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.main}>
                <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} onPress={ () => navigation.goBack()}>
                    <Icons name="arrow-circle-left" size={20} color={ colors.Black }/>
                    <Gap width={10}/>
                    <Text style={{ fontFamily: 'Poppins-Bold', color: colors.Black, top: 2}}>
                        Back
                    </Text>
                </TouchableOpacity>
                <Gap height={10}/>
                <View>
                    <Text style={styles.headerTitle}>Agenda List</Text>
                    <Text style={styles.headerSubTitle}>{moment().format('MMMM Do YYYY, h:mm:ss a')}</Text>
                    <Gap height={10}/>
                </View>
                <View style={styles.section}>
                    {Object.values(agenda).map((data) => {
                        const params = {
                            id : data.id
                        }
                        return (
                            <CardAgenda key={data.id}
                                title={data.title}
                                author={data.author}
                                image={data.thumbnail}
                                date={moment(data.created_at).format('DD MMM YYYY')}
                                onPress={ () => navigation.navigate('AgendaDetail', params)}
                            />
                        )
                    })}
                </View>
            </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.White,
    },
    main: {
        padding: 16
    },
    headerTitle: {
        fontFamily: 'Poppins-Bold', 
        color: colors.Black, 
        fontSize: 24
    },
    headerSubTitle: {
        fontFamily: 'Poppins', 
        color: colors.Gray, 
        fontSize: 10, 
        bottom: 5
    },
    section: {
        width: '100%',
        
    }
})


export default AgendaList