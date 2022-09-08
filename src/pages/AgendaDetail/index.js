import moment from 'moment'
import React from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Gap } from '../../component'
import { colors } from '../../utils'
import Icons from 'react-native-vector-icons/FontAwesome5';

const AgendaDetail = ({navigation}) => {
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
              <Text style={styles.headerTitle}>Lorem Ipsum is simply dummy text</Text>
              <View style={styles.line}></View>
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
  content: {
    textAlign: 'justify',
    color: colors.Black,
    fontFamily: 'Poppins'
  }
})

export default AgendaDetail