import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Gap } from '../../component'
import { colors } from '../../utils'
import Icons from 'react-native-vector-icons/FontAwesome5'
import Api from '../../Api'
import axios from 'axios'

const CareerDetail = ({navigation, route}) => {

  const { id } = route.params
  const [showJob, setShowJob] = useState('')
  
  const fetcData = async () => {
    try {
        const responseJob = await Api.showJob(id)
        setShowJob(responseJob.data.data)
        console.log(responseJob.data.data)
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
              <Text style={styles.headerTitle}>{showJob.company_name}</Text>
              <View style={styles.line}></View>
              <Gap height={5}/>
              <View style={styles.subHeader}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                  <Icons name="briefcase" size={14} color={ colors.Black }/>
                  <Gap width={5}/>
                  <Text style={styles.headersTitle} numberOfLines={1}>Staff</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                  <Icons name="clock" size={14} color={ colors.Black }/>
                  <Gap width={5}/>
                  <Text style={styles.headersTitle} numberOfLines={1}>{showJob.job_type}</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                  <Text style={{fontFamily: 'Poppins-Bold', color: colors.Black, fontSize: 12, top: 2}} numberOfLines={1}>Rp</Text>
                  <Gap width={5}/>
                  <Text style={styles.headersTitle} numberOfLines={1}>{showJob.salary}</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                  <Icons name="map-marker-alt" size={14} color={ colors.Black }/>
                  <Gap width={5}/>
                  <Text style={styles.headersTitle} numberOfLines={1}>{showJob.placement}</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                  <Icons name="phone-square" size={14} color={ colors.Black }/>
                  <Gap width={5}/>
                  <Text style={styles.headersTitle} numberOfLines={1}>{showJob.phone}</Text>
                </View>
              </View>
              <Gap height={30}/>
          </View>
          <Gap height={10}/>
          <Text style={styles.headerTitles}>{showJob.title}</Text>
          <Gap height={10}/>
          <View>
            <Image source={{ uri: showJob.image }} resizeMode='cover' style={{ width: '100%', height: 150, borderRadius: 20 }}/>
          </View>
          <Gap height={20}/>
          <View>
            <Text style={styles.content}>
              {showJob.description}
            </Text>
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
  headerTitles: {
      fontFamily: 'Poppins-Bold', 
      color: colors.Black, 
      fontSize: 18
  },
  subHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  headersTitle: {
      fontFamily: 'Poppins', 
      color: colors.Black, 
      fontSize: 10,
      top: 2
  },
  headerSubTitle: {
      fontFamily: 'Poppins', 
      color: colors.Gray, 
      fontSize: 10, 
  },
  line: {
    width: '65%',
    height: 2,
    backgroundColor: colors.Red
  },
  content: {
    textAlign: 'justify',
    color: colors.Black,
    fontFamily: 'Poppins'
  }
})

export default CareerDetail