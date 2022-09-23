import React, {useState} from 'react'
import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Gap } from '../../component'
import { colors, getData } from '../../utils'
import { profile } from '../../assets'
import SelectDropdown from "react-native-select-dropdown";
import Api from '../../Api'
import { launchImageLibrary } from 'react-native-image-picker'
import ToastManager, { Toast } from 'toastify-react-native'

const AddJob = ({navigation}) => {

    const [borderColor, setBorderColor] = useState('#A1AEB7') ;
    const [token, setToken] = useState('');
    const [photo, setPhoto] = useState('');
    const [photoDB, setPhotoDB] = useState('');
    const [company, setCompany] = useState('');
    const [phone, setPhone] = useState('');
    const [jobPosition, setJobPosition] = useState('');
    const [jobTypes, setJobTypes] = useState('');
    const [placement, setPlacement] = useState('');
    const [salary, setSalary] = useState('');
    const [description, setDescription] = useState('');

    const jobType = ["Part Time", "Full Time"];

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

    const sendDataJob = () => {
        getData('user').then(res => {
            setToken(res.token)
            const sendData = async() => {
              const dataJob = {
                    company_name : company,
                    description : description,
                    title : jobPosition,
                    phone : phone,
                    job_type : jobTypes,
                    placement : placement,
                    salary : salary,
                    image : photoDB
              }
              try {
                    const postDataJob = await Api.AddJob(token, dataJob)
                    console.log(postDataJob)
                    if ( postDataJob.data.message === 'Validation Error') {
                        Toast.error('Failed to add job')
                    } else {
                        Toast.success('Job has been added')
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
      <StatusBar barStyle = "default" hidden = {false} backgroundColor = {colors.Red} translucent = {false}/>
      <ToastManager />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.main}>
          <Gap height={10}/>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View>
              <Text style={styles.headerTitle}>Add Job</Text>
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
              <Text style={styles.imageText}>Upload Company Logo</Text>
            </View>
            <Gap height={10}/>
            <View>
                <Text style={styles.title}>Company Name</Text>
                <TextInput style={styles.input(borderColor)} placeholder='Company Name' placeholderTextColor={colors.Gray} onFocus={onFocus} onBlur={onBlur} value={company} onChangeText={ (value) => setCompany(value) }/>
            </View>
            <Gap height={10} />
            <View>
                <Text style={styles.title}>Phone Number</Text>
                <TextInput style={styles.input(borderColor)} placeholder='Phone Number' placeholderTextColor={colors.Gray} onFocus={onFocus} onBlur={onBlur} value={phone} onChangeText={ (value) => setPhone(value) }/>
            </View>
            <Gap height={10} />
            <View>
                <Text style={styles.title}>Job Position</Text>
                <TextInput style={styles.input(borderColor)} placeholder='Job Position' placeholderTextColor={colors.Gray} onFocus={onFocus} onBlur={onBlur} value={jobPosition} onChangeText={ (value) => setJobPosition(value) }/>
            </View>
            <Gap height={10} />
            <View>
                <Text style={styles.title}>Job Type</Text>
                <SelectDropdown
                    defaultButtonText={'Choose Job Type'}
                    data={jobType}
                    onSelect={(selectedItem) => setJobTypes(selectedItem)}
                    buttonTextAfterSelection={(selectedItem) => {
                        return selectedItem
                    }}
                    rowTextForSelection={(item) => {
                        return item
                    }}
                    buttonStyle={styles.dropdown1BtnStyle}
                    buttonTextStyle={styles.dropdown1BtnTxtStyle}
                    dropdownIconPosition={"right"}
                    dropdownStyle={styles.dropdown1DropdownStyle}
                    rowTextStyle={styles.dropdown1RowTxtStyle}
                />
            </View>
            <Gap height={10} />
            <View>
                <Text style={styles.title}>Placement</Text>
                <TextInput style={styles.input(borderColor)} placeholder='Placement' placeholderTextColor={colors.Gray} onFocus={onFocus} onBlur={onBlur} value={placement} onChangeText={ (value) => setPlacement(value) }/>
            </View>
            <Gap height={10} />
            <View>
                <Text style={styles.title}>Salary</Text>
                <TextInput style={styles.input(borderColor)} placeholder='Salary' placeholderTextColor={colors.Gray} onFocus={onFocus} onBlur={onBlur} value={salary} onChangeText={ (value) => setSalary(value) }/>
            </View>
            <Gap height={10} />
            <View>
                <Text style={styles.title}>Description</Text>
                <TextInput style={styles.input(borderColor)} placeholder='Description' placeholderTextColor={colors.Gray} onFocus={onFocus} onBlur={onBlur} value={description} onChangeText={ (value) => setDescription(value) }/>
            </View>
            <Gap height={20} />
            <TouchableOpacity style={styles.Button} onPress={sendDataJob}>
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
    },
    dropdown1BtnStyle: {
        width: "100%",
        height: 50,
        backgroundColor: "#FFF",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#A1AEB7",
        color: colors.Gray
    },
    dropdown1BtnTxtStyle: { 
        color: colors.Black,
        fontWeight: "400",
        fontSize: 14,
        textAlign: "left",
    },
    dropdown1DropdownStyle: { 
        backgroundColor: colors.White,
    },
    dropdown1RowTxtStyle: { 
        color: colors.Black,
        textAlign: "left",
    },

})

export default AddJob