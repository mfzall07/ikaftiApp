import moment from 'moment'
import React from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Gap } from '../../component'
import { colors } from '../../utils'
import Icons from 'react-native-vector-icons/FontAwesome5';

const CareerDetail = ({navigation}) => {
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
              <Text style={styles.headerTitle}>VINPOLLS</Text>
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
                  <Text style={styles.headersTitle} numberOfLines={1}>Full Time</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                  <Text style={{fontFamily: 'Poppins-Bold', color: colors.Black, fontSize: 12, top: 2}} numberOfLines={1}>Rp</Text>
                  <Gap width={5}/>
                  <Text style={styles.headersTitle} numberOfLines={1}>5.000.000</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                  <Icons name="map-marker-alt" size={14} color={ colors.Black }/>
                  <Gap width={5}/>
                  <Text style={styles.headersTitle} numberOfLines={1}>Jakarta</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                  <Icons name="phone-square" size={14} color={ colors.Black }/>
                  <Gap width={5}/>
                  <Text style={styles.headersTitle} numberOfLines={1}>081242736712</Text>
                </View>
              </View>
              <Gap height={30}/>
          </View>
          <View>
            <Text style={styles.content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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