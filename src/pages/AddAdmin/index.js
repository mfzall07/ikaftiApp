import moment from 'moment'
import React, {useEffect, useState} from 'react'
import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Gap } from '../../component'
import { colors, getData } from '../../utils'
import { profile } from '../../assets'
import Api from '../../Api'
import { launchImageLibrary } from 'react-native-image-picker'
import axios from 'axios'
import FlashMessage, {showMessage} from "react-native-flash-message"
import ToastManager, { Toast } from 'toastify-react-native'

const AddAdmin = ({navigation}) => {

  const [borderColor, setBorderColor] = useState('#A1AEB7') ;
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState('');
  const [photoDB, setPhotoDB] = useState('');

  const getImageFromGalery = () => {
    launchImageLibrary({ quality: 0.5, maxWidth: 200, maxHeight: 200, includeBase64: true }, (response) => {
        setPhoto(response.assets[0].uri);
        setPhotoDB(`data:${response.assets[0].type};base64,${response.assets[0].base64}`);
    });
  }

  const onBlur = () => {
      setBorderColor('#A1AEB7')
  }

  const onFocus = () => {
      setBorderColor(colors.Red)
  }

  const [token, setToken] = useState('')

  const sendDataAdmin = () => {
    getData('user').then(res => {
        setToken(res.token)
        const sendData = async() => {
          const dataAdmin = {
              name : fullname,
              phone : phone,
              email : email,
              username : username,
              password : password,
              image : photoDB
          }
          const dataAdmins = {
              name : fullname,
              phone : phone,
              email : email,
              username : username,
              password : password,
          }
          try {
            if(photoDB === '') {
              // console.log(dataAdmin)
              const postDataAdmin = await Api.AddAdmin(token, dataAdmins)
              console.log(postDataAdmin)
              if (postDataAdmin.data.message === 'Validation Error') {
                Toast.error('Change username/email.')
              }
              else {
                Toast.success('Admin has been added')
                navigation.navigate('AddAdminList')
              }
              console.log(postDataAdmin.data.message)
            }else {
              // console.log(dataAdmin)
              const postDataAdmin = await Api.AddAdmin(token, dataAdmin)
              console.log(postDataAdmin)
              if (postDataAdmin.data.message === 'Validation Error') {
                Toast.error('Change username/email.')
              }
              else {
                Toast.success('Admin has been added')
                navigation.navigate('AddAdminList')
              }
              console.log(postDataAdmin.data.message)
            }
          } catch (error) {
              console.log(error)
          }
        }
        sendData()
    })
  }

  useEffect(() => {
    sendDataAdmin()
  }, [])
  

  return (
    <View style={styles.container}>
      <StatusBar barStyle = "default" hidden = {false} backgroundColor = {colors.Gray} translucent = {false}/>
      <ToastManager/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.main}>
          <Gap height={10}/>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View>
              <Text style={styles.headerTitle}>Add Admin</Text>
            </View>
            <TouchableOpacity onPress={ () => navigation.navigate('AddAdminList', token)}>
              <Text style={styles.see}>See List</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.line}></View>
          <Gap height={30}/>
          <View>
            <View style={styles.imageMain}>
              <TouchableOpacity onPress={getImageFromGalery}>
                  <Image source={photo === '' ? profile : { uri: photo }} style={styles.imageStyle} />
              </TouchableOpacity>
              <Text style={styles.imageText}>Upload Image</Text>
            </View>
            <Gap height={10}/>
            <View>
                <Text style={styles.title}>Full Name</Text>
                <TextInput style={styles.input(borderColor)} placeholder='Full Name' placeholderTextColor={colors.Gray} onFocus={onFocus} onBlur={onBlur} value={fullname} onChangeText={ (value) => setFullname(value)}/>
            </View>
            <Gap height={10} />
            <View>
                <Text style={styles.title}>Phone Number</Text>
                <TextInput style={styles.input(borderColor)} placeholder='Phone Number' placeholderTextColor={colors.Gray} onFocus={onFocus} onBlur={onBlur} value={phone} onChangeText={ (value) => setPhone(value)}/>
            </View>
            <Gap height={10} />
            <View>
                <Text style={styles.title}>Email</Text>
                <TextInput style={styles.input(borderColor)} placeholder='Email' placeholderTextColor={colors.Gray} onFocus={onFocus} onBlur={onBlur} value={email} onChangeText={ (value) => setEmail(value)}/>
            </View>
            <Gap height={10} />
            <View>
                <Text style={styles.title}>Username</Text>
                <TextInput style={styles.input(borderColor)} placeholder='Username' placeholderTextColor={colors.Gray} onFocus={onFocus} onBlur={onBlur} value={username} onChangeText={ (value) => setUsername(value)}/>
            </View>
            <Gap height={10} />
            <View>
                <Text style={styles.title}>Password</Text>
                <TextInput style={styles.input(borderColor)} placeholder='Password' secureTextEntry={true} placeholderTextColor={colors.Gray} onFocus={onFocus} onBlur={onBlur} value={password} onChangeText={ (value) => setPassword(value)}/>
            </View>
            <Gap height={20} />
            <TouchableOpacity style={styles.Button} onPress={sendDataAdmin}>
              <Text style={styles.titleButton}>Submit</Text>
            </TouchableOpacity>
            <Gap height={20} />
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

export default AddAdmin