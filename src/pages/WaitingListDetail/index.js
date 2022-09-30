import moment from 'moment'
import React, {useEffect, useState} from 'react'
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { exampleContent } from '../../assets'
import { CardWaitingList, Gap } from '../../component'
import { colors } from '../../utils'
import Icons from 'react-native-vector-icons/FontAwesome5';
import Api from '../../Api'

const WaitingListDetail = ({navigation, route}) => {

    const { id, token } = route.params

    const [waitingListDetail, setWaitingListDetail] = useState('')
    const [success, setSuccess] = useState(false)
    const [decline, setDecline] = useState(false)
  
    const fetcData = async () => {
        try {
            const response = await Api.WaitingListDetail(id)
            setWaitingListDetail(response.data.data)
            console.log(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleApprove = async () => {
        try {
            const postData = await Api.WaitingListApprove(id, token)
            setInterval(() => {
                setSuccess(true)
            }, 5000);
            navigation.replace('WaitingList')
        } catch (error) {
            console.log(error)
        }
    }
    
    const handleDecline = async () => {
        try {
            const rmvData = await Api.WaitingListDecline(id, token)
            setInterval(() => {
                setDecline(true)
            }, 5000);
            navigation.replace('WaitingList')
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetcData()
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar barStyle = "default" hidden = {false} backgroundColor = {colors.Gray} translucent = {false}/>
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
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={styles.headerTitle}>{waitingListDetail.name}</Text>
                        </View>
                    </View>
                    <View style={styles.line}></View>
                    <Gap height={30}/>
                    <View>
                        <Image source={{uri: waitingListDetail.image}} resizeMode="cover" style={styles.image}/>
                        <Gap height={10}/>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <View style={{ width: 136 }}>
                                <Text style={styles.fieldName}>Address</Text>
                            </View>
                            <Gap width={10}/>
                            <Text style={styles.valueField}>{waitingListDetail.address}</Text>
                        </View>
                        <Gap height={10}/>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <View style={{ width: 136 }}>
                                <Text style={styles.fieldName}>Email</Text>
                            </View>
                            <Gap width={10}/>
                            <Text style={styles.valueField}>{waitingListDetail.email}</Text>
                        </View>
                        <Gap height={10}/>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <View style={{ width: 136 }}>
                                <Text style={styles.fieldName}>Program Studi</Text>
                            </View>
                            <Gap width={10}/>
                            <Text style={styles.valueField}>{waitingListDetail.program_studi}</Text>
                        </View>
                        <Gap height={10}/>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <View style={{ width: 136 }}>
                                <Text style={styles.fieldName}>Birth Place</Text>
                            </View>
                            <Gap width={10}/>
                            <Text style={styles.valueField}>{waitingListDetail.birth_place}</Text>
                        </View>
                        <Gap height={10}/>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <View style={{ width: 136 }}>
                                <Text style={styles.fieldName}>Birth Date</Text>
                            </View>
                            <Gap width={10}/>
                            <Text style={styles.valueField}>{moment(waitingListDetail.birth_date).format('DD MMM YYYY')}</Text>
                        </View>
                        <Gap height={10}/>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <View style={{ width: 136 }}>
                                <Text style={styles.fieldName}>Generation</Text>
                            </View>
                            <Gap width={10}/>
                            <Text style={styles.valueField}>{waitingListDetail.generation}</Text>
                        </View>
                        <Gap height={10}/>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <View style={{ width: 136 }}>
                                <Text style={styles.fieldName}>Domicile Dist/City</Text>
                            </View>
                            <Gap width={10}/>
                            <Text style={styles.valueField}>{waitingListDetail.domicile}</Text>
                        </View>
                        <Gap height={10}/>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <View style={{ width: 136 }}>
                                <Text style={styles.fieldName}>Phone Number</Text>
                            </View>
                            <Gap width={10}/>
                            <Text style={styles.valueField}>{waitingListDetail.phone}</Text>
                        </View>
                        <Gap height={10}/>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <View style={{ width: 136 }}>
                                <Text style={styles.fieldName}>Current Company</Text>
                            </View>
                            <Gap width={10}/>
                            <Text style={styles.valueField}>{waitingListDetail.company}</Text>
                        </View>
                    </View>
                    { success == true && 
                        <View>
                            <Text style={{ color: '#22c55e', textAlign: 'center', fontFamily: 'Poppins' }}>Success Add Data</Text>
                            <Gap height={20}/>
                        </View>
                    }
                    { decline == true && 
                        <View>
                            <Text style={{ color: colors.Red, textAlign: 'center', fontFamily: 'Poppins' }}>Success Add Data</Text>
                            <Gap height={20}/>
                        </View>
                    }
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <TouchableOpacity style={styles.Button} onPress={handleDecline}>
                            <Text style={styles.titleButton}>Decline</Text>
                        </TouchableOpacity>
                        <Gap width={10}/>
                        <TouchableOpacity style={styles.Button} onPress={handleApprove}>
                            <Text style={styles.titleButton}>Accept</Text>
                        </TouchableOpacity>
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
        padding: 16,
        height: 700
    },
    headerTitle: {
        fontFamily: 'Poppins-Bold', 
        color: colors.Black, 
        fontSize: 18,
        textTransform: 'capitalize'
    },
    line: {
        width: '65%',
        height: 2,
        backgroundColor: colors.Red
    },
    image: {
        width: '100%',
        height: '30%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.Red,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    fieldName: {
        fontFamily: 'Poppins-Bold',
        color: colors.Black,
        fontSize: 12,
        alignSelf: 'baseline'
    },
    valueField: {
        color: colors.Black,
        fontFamily: 'Poppins',
        fontSize: 12,
        maxWidth: 195,
    },
    Button: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderColor: colors.Red
    },
    titleButton: {
        color: colors.Black,
        fontFamily: 'Poppins'
    }

})

export default WaitingListDetail