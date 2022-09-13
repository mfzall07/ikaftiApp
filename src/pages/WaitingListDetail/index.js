import moment from 'moment'
import React, {useState} from 'react'
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { exampleContent } from '../../assets'
import { CardWaitingList, Gap } from '../../component'
import { colors } from '../../utils'
import Icons from 'react-native-vector-icons/FontAwesome5';

const WaitingListDetail = ({navigation}) => {

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
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View>
                    <Text style={styles.headerTitle}>Muh Faizal</Text>
                </View>
            </View>
            <View style={styles.line}></View>
            <Gap height={30}/>
            <View>
                <Image source={exampleContent} resizeMode="cover" style={styles.image}/>
                <Gap height={10}/>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 136 }}>
                        <Text style={styles.fieldName}>Address</Text>
                    </View>
                    <Gap width={10}/>
                    <Text style={styles.valueField}>Beringin</Text>
                </View>
                <Gap height={10}/>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 136 }}>
                        <Text style={styles.fieldName}>Email</Text>
                    </View>
                    <Gap width={10}/>
                    <Text style={styles.valueField}>mfzall037@gmail.com</Text>
                </View>
                <Gap height={10}/>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 136 }}>
                        <Text style={styles.fieldName}>Program Studi</Text>
                    </View>
                    <Gap width={10}/>
                    <Text style={styles.valueField}>Informatika</Text>
                </View>
                <Gap height={10}/>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 136 }}>
                        <Text style={styles.fieldName}>Birth Place</Text>
                    </View>
                    <Gap width={10}/>
                    <Text style={styles.valueField}>Makassar</Text>
                </View>
                <Gap height={10}/>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 136 }}>
                        <Text style={styles.fieldName}>Birth Date</Text>
                    </View>
                    <Gap width={10}/>
                    <Text style={styles.valueField}>{moment().format('DD MMM YYYY')}</Text>
                </View>
                <Gap height={10}/>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 136 }}>
                        <Text style={styles.fieldName}>Generation</Text>
                    </View>
                    <Gap width={10}/>
                    <Text style={styles.valueField}>2017</Text>
                </View>
                <Gap height={10}/>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 136 }}>
                        <Text style={styles.fieldName}>Domicile Dist/City</Text>
                    </View>
                    <Gap width={10}/>
                    <Text style={styles.valueField}>Makassar</Text>
                </View>
                <Gap height={10}/>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 136 }}>
                        <Text style={styles.fieldName}>Phone Number</Text>
                    </View>
                    <Gap width={10}/>
                    <Text style={styles.valueField}>812455274645</Text>
                </View>
                <Gap height={10}/>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 136 }}>
                        <Text style={styles.fieldName}>Current Company</Text>
                    </View>
                    <Gap width={10}/>
                    <Text style={styles.valueField}>Vinpolls</Text>
                </View>
            </View>
            <Gap height={20}/>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity style={styles.Button} >
                    <Text style={styles.titleButton}>Decline</Text>
                </TouchableOpacity>
                <Gap width={10}/>
                <TouchableOpacity style={styles.Button} >
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
        borderWidth: 1, 
        height: 700
    },
    headerTitle: {
        fontFamily: 'Poppins-Bold', 
        color: colors.Black, 
        fontSize: 18
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
        fontSize: 12
    },
    valueField: {
        color: colors.Black,
        fontFamily: 'Poppins',
        fontSize: 12
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