import moment from 'moment'
import React, {useState} from 'react'
import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Gap } from '../../component'
import { colors } from '../../utils'
import { profile } from '../../assets'

const AddAdmin = ({navigation}) => {

  const [borderColor, setBorderColor] = useState('#A1AEB7') ;
    const [photo, setPhoto] = useState('');
    const [photoDB, setPhotoDB] = useState("");

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

  return (
    <View style={styles.container}>
      <StatusBar barStyle = "default" hidden = {false} backgroundColor = {colors.Red} translucent = {false}/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.main}>
          <Gap height={10}/>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View>
              <Text style={styles.headerTitle}>Add Admin</Text>
            </View>
            <TouchableOpacity>
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
                <TextInput style={styles.input(borderColor)} placeholder='Full Name' placeholderTextColor={colors.Gray} onFocus={onFocus} onBlur={onBlur}/>
            </View>
            <Gap height={10} />
            <View>
                <Text style={styles.title}>Phone Number</Text>
                <TextInput style={styles.input(borderColor)} placeholder='Phone Number' placeholderTextColor={colors.Gray} onFocus={onFocus} onBlur={onBlur}/>
            </View>
            <Gap height={10} />
            <View>
                <Text style={styles.title}>Email</Text>
                <TextInput style={styles.input(borderColor)} placeholder='Email' placeholderTextColor={colors.Gray} onFocus={onFocus} onBlur={onBlur}/>
            </View>
            <Gap height={10} />
            <View>
                <Text style={styles.title}>Username</Text>
                <TextInput style={styles.input(borderColor)} placeholder='Username' placeholderTextColor={colors.Gray} onFocus={onFocus} onBlur={onBlur}/>
            </View>
            <Gap height={10} />
            <View>
                <Text style={styles.title}>Password</Text>
                <TextInput style={styles.input(borderColor)} placeholder='Password' secureTextEntry={true} placeholderTextColor={colors.Gray} onFocus={onFocus} onBlur={onBlur}/>
            </View>
            <Gap height={20} />
            <TouchableOpacity style={styles.Button} >
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