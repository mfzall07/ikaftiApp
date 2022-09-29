import React, { useEffect, useState, useCallback } from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView, TouchableOpacity, Image, TextInput, Button } from "react-native";
import { launchImageLibrary } from 'react-native-image-picker';
import SelectDropdown from "react-native-select-dropdown";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { profile } from "../../assets";
import { Gap } from "../../component/atoms";
import { colors } from "../../utils"
import moment from 'moment';
import axios from "axios";
import Api from "../../Api";
import { err } from "react-native-svg/lib/typescript/xml"
import FlashMessage, { showMessage } from "react-native-flash-message"
import ToastManager, { Toast } from "toastify-react-native";

const RegistrationAlumni = ({navigation}) => {

    const studyProgram = ["Teknik Industri", "Teknik Kimia", "Teknik Pertambangan", "Pll"];
    const [borderColor, setBorderColor] = useState('#A1AEB7') ;
    const [photo, setPhoto] = useState('');
    const [photoDB, setPhotoDB] = useState('');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [fullname, setFullName] = useState('')
    const [address, setAddress] = useState('')
    const [programStudi, setProgramStudi] = useState('')
    const [birthPlace, setBirthPlace] = useState('')
    const [dateBirth, setDateBirth] = useState('')
    const [generation, setGeneration] = useState('')
    const [domicile, setDomicile] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [company, setCompany] = useState('')
    const [success, setSuccess] = useState(false)
    const [notMatch, setNotMatch] = useState(false)

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        const dateFilter = moment(date).format('YYYY-MM-DD')
        setDateBirth(dateFilter)
        hideDatePicker();
    };

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

    const sendData = async() => {
        const dataRegister = {
            name : fullname,
            company : company,
            address : address,
            domicile : domicile,
            email : email,
            phone : phoneNumber,
            birth_place : birthPlace,
            birth_date : dateBirth,
            generation: generation,
            program_studi : programStudi,
            image : photoDB
        }
        const dataRegisters = {
            name : fullname,
            company : company,
            address : address,
            domicile : domicile,
            email : email,
            phone : phoneNumber,
            birth_place : birthPlace,
            birth_date : dateBirth,
            generation: generation,
            program_studi : programStudi,
        }
        try {
            if(photoDB === ''){
                const postDataRegister = await Api.registerAlumni(dataRegisters)
                console.log(postDataRegister)
                if(postDataRegister.data.message === 'Validation Error'){
                    Toast.error('Please input a valid data')
                }
                else {
                    Toast.success('Success Registration')
                }
            }else {
                const postDataRegister = await Api.registerAlumni(dataRegister)
                console.log(postDataRegister)
                if(postDataRegister.data.message === 'Validation Error'){
                    Toast.error('Please input a valid data')
                }
                else {
                    Toast.success('Success Registration')
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
    

    return (
        <View style={styles.container}>
            <StatusBar barStyle = "default" hidden = {false} backgroundColor = {colors.Red} translucent = {false}/>
            <ToastManager/>
            <ScrollView showsVerticalScrollIndicator={false} ref={(c) => {scroll = c}}>
                <View>
                    <View style={styles.imageMain}>
                        <TouchableOpacity onPress={getImageFromGalery}>
                            <Image source={photo === '' ? profile : { uri: photo }} style={styles.imageStyle} />
                        </TouchableOpacity>
                        <Text style={styles.imageText}>Upload Image</Text>
                    </View>
                    <Gap height={20}/>
                    <View>
                        <Text style={styles.title}>Full Name</Text>
                        <TextInput style={styles.input(borderColor)} placeholder='Full Name' placeholderTextColor={colors.Gray} onFocus={onFocus} onBlur={onBlur} value={fullname} onChangeText={(value) => setFullName(value)}/>
                    </View>
                    <Gap height={20} />
                    <View>
                        <Text style={styles.title}>Address</Text>
                        <TextInput style={styles.input(borderColor)} placeholder='Address' placeholderTextColor={colors.Gray} onFocus={onFocus} onBlur={onBlur} value={address} onChangeText={(value) => setAddress(value)}/>
                    </View>
                    <Gap height={20} />
                    <View>
                        <Text style={styles.title}>Program Studi</Text>
                        <SelectDropdown
                            defaultButtonText={'Choose Program Study'}
                            data={studyProgram}
                            onSelect={(selectedItem) => setProgramStudi(selectedItem)}
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
                    <Gap height={20} />
                    <View>
                        <Text style={styles.title}>Birth Place</Text>
                        <TextInput style={styles.input(borderColor)} placeholder='Birth Place' placeholderTextColor={colors.Gray} onFocus={onFocus} onBlur={onBlur} value={birthPlace} onChangeText={(value) => setBirthPlace(value)}/>
                    </View>
                    <Gap height={20} />
                    <View>
                        <Text style={styles.title}>Date of Birth</Text>
                        <View>
                            <TouchableOpacity style={styles.dateButton} onPress={showDatePicker}>
                                <Text style={{ color: colors.TextGray, paddingLeft: 9 }}>{dateBirth === '' ? 'DD MM YYYY' : dateBirth}</Text>
                            </TouchableOpacity>
                            <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode="date"
                                onConfirm={handleConfirm}
                                onCancel={hideDatePicker}
                            />
                        </View>
                    </View>
                    <Gap height={20} />
                    <View>
                        <Text style={styles.title}>Generation</Text>
                        <TextInput style={styles.input(borderColor)} placeholder='Generation' placeholderTextColor={colors.Gray} onFocus={onFocus} onBlur={onBlur} value={generation} onChangeText={(value) => setGeneration(value)}/>
                    </View>
                    <Gap height={20} />
                    <View>
                        <Text style={styles.title}>Domicile</Text>
                        <TextInput style={styles.input(borderColor)} placeholder='Domicile' placeholderTextColor={colors.Gray} onFocus={onFocus} onBlur={onBlur} value={domicile} onChangeText={(value) => setDomicile(value)}/>
                    </View>
                    <Gap height={20} />
                    <View>
                        <Text style={styles.title}>Email</Text>
                        <TextInput style={styles.input(borderColor)} placeholder='Email' placeholderTextColor={colors.Gray} onFocus={onFocus} onBlur={onBlur} value={email} onChangeText={(value) => setEmail(value)}/>
                    </View>
                    <Gap height={20} />
                    <View>
                        <Text style={styles.title}>Phone Number</Text>
                        <TextInput style={styles.input(borderColor)} placeholder='Phone Number' placeholderTextColor={colors.Gray} onFocus={onFocus} onBlur={onBlur} value={phoneNumber} onChangeText={(value) => setPhoneNumber(value)}/>
                    </View>
                    <Gap height={20} />
                    <View>
                        <Text style={styles.title}>Company</Text>
                        <TextInput style={styles.input(borderColor)} placeholder='Company' placeholderTextColor={colors.Gray} onFocus={onFocus} onBlur={onBlur} value={company} onChangeText={(value) => setCompany(value)}/>
                    </View>
                    <Gap height={25} />
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity style={styles.Button} >
                            <Text style={styles.titleButton}>Back To Home</Text>
                        </TouchableOpacity>
                        <Gap width={10}/>
                        <TouchableOpacity style={styles.Button}onPress={sendData}>
                            <Text style={styles.titleButton}>Submit</Text>
                        </TouchableOpacity>
                    </View> 
                    <Gap height={20} />
                </View>
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.White,
        padding: 16,
    },
    header: {
        fontWeight: '700',
        fontSize: 18,
        textAlign: 'center',
        color: colors.Black,
        
    },
    line: {
        width: '100%',
        height: 2,
        backgroundColor: colors.Red,
        marginTop: 5
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
    dateButton: {
        borderWidth: 1, 
        paddingVertical: 15, 
        paddingHorizontal: 9, 
        alignItems: 'center', 
        borderColor: '#A1AEB7', 
        borderRadius: 10, 
        flexDirection: 'row', 
        color:colors.Black
    },
    buttonUploadDoc: {
        backgroundColor: colors.Red,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    titleButtonUploadDoc: {
        color: colors.White,
        fontFamily: 'Poppins'
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

export default RegistrationAlumni;