import moment from 'moment'
import React, {useState} from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { CardWaitingList, Gap } from '../../component'
import { colors } from '../../utils'

const WaitingList = ({navigation}) => {

  return (
    <View style={styles.container}>
      <StatusBar barStyle = "default" hidden = {false} backgroundColor = {colors.Red} translucent = {false}/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.main}>
          <Gap height={10}/>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View>
              <Text style={styles.headerTitle}>Waiting List</Text>
            </View>
          </View>
          <View style={styles.line}></View>
          <Gap height={30}/>
          <View>
            <CardWaitingList
                name={'Muh Faizal'}
                onPress={ () => navigation.navigate('WaitingListDetail') }
            />
            <Gap height={10}/>
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
  headersTitle: {
      fontFamily: 'Poppins-Bold', 
      color: colors.Black, 
      fontSize: 10
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
  imageMain: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },  
  imageStyle: {
      width: 100, 
      height: 100, 
      borderRadius: 50, 
      alignSelf: 'center'
  },
  imageText: {
      fontWeight: '700', 
      fontSize: 16, 
      color: colors.ButtonEdit, 
      marginTop: 10 
  },
  title: { 
      fontSize: 13, 
      color: colors.Black, 
      paddingVertical: 5,
  },
  input: borderColor => ( {
      borderWidth: 1,
      borderRadius: 10,
      borderColor: borderColor,
      fontWeight: "400",
      fontSize: 14,
      paddingLeft: 17,
      position: "relative",
  }),
  Button: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: colors.Red,
  },
  titleButton: {
    color: colors.Black,
    fontFamily: 'Poppins',
    textAlign: 'center',
  },
  see: {
    fontSize: 12,
    color: colors.Red,
    fontFamily: 'Poppins-Bold'
  }

})

export default WaitingList