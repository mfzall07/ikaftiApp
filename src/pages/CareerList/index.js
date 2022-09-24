import React,{useState, useEffect} from 'react'
import { Dimensions, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { CardAgenda, CardCareer, Gap } from '../../component'
import { colors } from '../../utils'
import moment from 'moment'
import Icons from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios'
import Api from '../../Api'

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

const CareerList = ({navigation}) => {

    const [job, setJob] = useState ('')
    
    const fetcData = async () => {
        try {

            const responseJob = await Api.indexJob()
            setJob(responseJob.data.data)

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
                    <Text style={styles.headerTitle}>Career List</Text>
                    <Text style={styles.headerSubTitle}>{moment().format('MMMM Do YYYY, h:mm:ss a')}</Text>
                    <Gap height={10}/>
                </View>
                <View style={styles.section}>
                    { Object.values(job).map((data) => {
                        const params = {
                            id : data.id
                        }
                        return (
                            <CardCareer key={data.id}
                                image={data.image}
                                title={data.title}
                                description={data.description}
                                salary={data.salary}
                                typeJob={data.job_type}
                                onPress={ () => navigation.navigate('CareerDetail', params) }
                            />
                        )
                    }) }
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
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    }
})


export default CareerList