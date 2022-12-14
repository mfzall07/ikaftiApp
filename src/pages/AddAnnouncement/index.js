import React, {useState} from 'react'
import moment from 'moment'
import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Gap } from '../../component'
import { colors, getData } from '../../utils'
import { profile } from '../../assets'
import Api from '../../Api'
import { launchImageLibrary } from 'react-native-image-picker'
import ToastManager, { Toast } from 'toastify-react-native'

const AddAnnouncement = ({navigation}) => {

  const [borderColor, setBorderColor] = useState('#A1AEB7') ;
  const [photo, setPhoto] = useState('');
  const [photoDB, setPhotoDB] = useState('');
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [token, setToken] = useState('')

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

  const sendDataAnnouncement = () => {
    
    getData('user').then(res => {
        setToken(res.token)
        const sendData = async() => {
          const dataAnnouncement = {
              title : title,
              description: description,
          }
          const dataAnnouncements = {
              title : title,
              description: description,
              image : photoDB
          }
          try {
            if(photoDB === '') {
              const postDataAnnouncement = await Api.AddAnnouncement(token, dataAnnouncement)
              console.log(postDataAnnouncement.data.message)
              if(postDataAnnouncement.data.message === 'Validation Error'){
                Toast.error('Failed add announcement')
              } else {
                Toast.success('Success add announcement')
                navigation.navigate('AddAnnouncementList')
              }
            }else {
              const postDataAnnouncement = await Api.AddAnnouncement(token, dataAnnouncements)
              console.log(postDataAnnouncement.data.message)
              if(postDataAnnouncement.data.message === 'Validation Error'){
                Toast.error('Failed add announcement')
              } else {
                Toast.success('Success add announcement')
                navigation.navigate('AddAnnouncementList')

              }
            }
          } catch (error) {
              console.log(error)
          }
        }
        sendData()
    })
  }  

  return (
    <View style={styles.container}>
      <StatusBar barStyle = "default" hidden = {false} backgroundColor = {colors.Gray} translucent = {false}/>
      <ToastManager/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.main}>
          <Gap height={10}/>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View>
              <Text style={styles.headerTitle}>Add Announcement</Text>
            </View>
            <TouchableOpacity onPress={ () => navigation.navigate('AddAnnouncementList')}>
              <Text style={styles.see}>See List</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.line}></View>
          <Gap height={30}/>
          <View>
            <View style={styles.imageMain}>
              <TouchableOpacity onPress={getImageFromGalery}>
                  <Image source={photo === '' ? profile : { uri: photo }} resizeMode='cover' style={styles.imageStyle} />
              </TouchableOpacity>
              <Text style={styles.imageText}>Upload Banner</Text>
            </View>
            <Gap height={10}/>
            <View>
                <Text style={styles.title}>Title</Text>
                <TextInput style={styles.input(borderColor)} placeholder='Title' placeholderTextColor={colors.Gray} onFocus={onFocus} onBlur={onBlur} value={title} onChangeText={ (value) => setTitle(value) }/>
            </View>
            <Gap height={10} />
            <View>
                <Text style={styles.title}>Description</Text>
                <TextInput style={styles.input(borderColor)} placeholder='Description' placeholderTextColor={colors.Gray} onFocus={onFocus} onBlur={onBlur} value={description} onChangeText={ (value) => setDescription(value) }/>
            </View>
            <Gap height={20} />
            <TouchableOpacity style={styles.Button} onPress={sendDataAnnouncement}>
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
      minWidth: 330,
      maxWidth: 330, 
      height: 100, 
      borderRadius: 10, 
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

export default AddAnnouncement