import moment from 'moment'
import React, {useState} from 'react'
import { Modal, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { CardWaitingList, Gap } from '../../component'
import { colors, removeUserDetail } from '../../utils'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const WaitingList = ({navigation}) => {

  const [modalVisible, setmodalVisible] = useState(false);
    const gotoRewards = () => {
        setmodalVisible(!modalVisible)
    }

    const logout = () => {
        removeUserDetail('user')
        navigation.replace('Navigation') 
    }

  return (
    <View style={styles.container}>
      <StatusBar barStyle = "default" hidden = {false} backgroundColor = {colors.Red} translucent = {false}/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.main}>
          <Gap height={10}/>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View>
              <Text style={styles.headerTitle}>Home</Text>
            </View>
            <TouchableOpacity onPress={()=>setmodalVisible(!modalVisible)}>
              <MaterialCommunityIcons name="logout" color={colors.Red} size={23} />
            </TouchableOpacity>
          </View>
          <View style={styles.line}></View>
          <Gap height={30}/>
          <View>
            <Text>asdasd</Text>
          </View>
          <Gap height={30}/>
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
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setmodalVisible(!modalVisible);
            }}
        >
            <View style={styles.mainModal}>
                <View style={styles.subModal}>
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ width: 48, height: 4, backgroundColor: '#E6E9ED' }}/>
                    </View>
                    <View>
                        <Text style={{ color: colors.Black, fontFamily: 'Poppins-Bold', fontSize: 18 }}>Sign out ?</Text>
                        <Text style={{ color: colors.Gray, fontFamily:'Poppins' }}>You need to sign in again if you want manage all component. Are you sure you want to sign out?</Text>
                    </View>
                    <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity style={{ width: '45%', paddingVertical: 6, backgroundColor: '#F4F5F6', borderRadius: 8, alignItems: 'center' }} onPress = {gotoRewards}>
                            <Text style={{ color: colors.Black, fontSize: 18, fontFamily:'Poppins'}}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: '45%', paddingVertical: 6, backgroundColor: colors.Red, borderRadius: 8, alignItems: 'center' }} onPress = { logout }>
                            <Text style={{ color:'#fff', fontSize: 18, fontFamily:'Poppins' }}>Sign Out</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
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
  },
  mainModal: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: "flex-end",
    flex: 1,
  },
  subModal: {
      backgroundColor: '#fff',
      height: 260,
      paddingHorizontal: 16,
      paddingVertical: 16,
      borderTopRightRadius: 24,
      borderTopLeftRadius: 24,
      justifyContent: 'space-around'
  },

})

export default WaitingList