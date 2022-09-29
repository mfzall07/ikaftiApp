import React, { useEffect, useState, useCallback } from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView, TouchableOpacity, Image, TextInput, Button } from "react-native";
import { launchImageLibrary } from 'react-native-image-picker';
import SelectDropdown from "react-native-select-dropdown";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DocumentPicker from 'react-native-document-picker';
import { profile } from "../../assets";
import { Gap } from "../../component/atoms";
import { colors, getData } from "../../utils"
import moment from 'moment';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Api from "../../Api";
import axios from "axios";
import { useIsFocused } from "@react-navigation/native";
import ToastManager, { Toast } from 'toastify-react-native'

const ViewListAlumniEdit = ({navigation, route}) => {
    const {id} = route.params

    const params = {
        id : id,
        token: token,
    }
    const isFocused = useIsFocused();
    const studyProgram = ["Teknik Industri", "Teknik Kimia", "Teknik Pertambangan", "Pll"];
    const [token, setToken] = useState('')
    const [borderColor, setBorderColor] = useState('#A1AEB7') ;
    const [photo, setPhoto] = useState('');
    const [photoDB, setPhotoDB] = useState("");
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

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        moment.locale('en');
        setDateBirth(date);
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

    const dataAlumni = () => {
        getData('user').then(res => {
            setToken(res.token)
            const getDataProfile = async() => {
                try {
                    const getDataAlumni = await Api.AlumniDetail(id, token)
                    setFullName(getDataAlumni.data.data.name)
                    setAddress(getDataAlumni.data.data.address)
                    setProgramStudi(getDataAlumni.data.data.program_studi)
                    setBirthPlace(getDataAlumni.data.data.birth_place)
                    setDateBirth(getDataAlumni.data.data.birth_date)
                    setGeneration(getDataAlumni.data.data.generation)
                    setDomicile(getDataAlumni.data.data.domicile)
                    setEmail(getDataAlumni.data.data.email)
                    setPhoneNumber(getDataAlumni.data.data.phone)
                    setCompany(getDataAlumni.data.data.company)
                    setPhoto(getDataAlumni.data.data.image)
                } catch (error) {
                    console.log(error)
                }
            }
            getDataProfile()
        })
    }

    useEffect(() => {
        isFocused && dataAlumni()
    }, [isFocused])
    

    const postData = async () => {
        try {
            const updateData = {
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
            const updateDatas = {
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
            if(photoDB === ''){
                const response = await Api.EditAlumniDetail(id, token, updateDatas)
                console.log(response)
            } else {
                const response = await Api.EditAlumniDetail(id, token, updateData)
                console.log(response)
            }
            navigation.navigate('ViewListAlumniDetail', params)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle = "default" hidden = {false} backgroundColor = {colors.Red} translucent = {false}/>
            <ToastManager/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} onPress={ () => navigation.goBack()}>
                        <Icons name="arrow-circle-left" size={20} color={ colors.Black }/>
                        <Gap width={10}/>
                        <Text style={{ fontFamily: 'Poppins-Bold', color: colors.Black, top: 2}}>
                            Back
                        </Text>
                    </TouchableOpacity>
                    <Gap height={10}/>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={styles.headerTitle}>{fullname}</Text>
                        </View>
                    </View>
                    <View style={styles.line}></View>
                    <Gap height={30}/>
                    <View style={styles.imageMain}>
                        <TouchableOpacity onPress={getImageFromGalery}>
                            <Image source={photo === '' ? profile : { uri: photo }} style={styles.imageStyle} />
                        </TouchableOpacity>
                        <Text style={styles.imageText}>Upload Image</Text>
                    </View>
                    <Gap height={20}/>
                    <View>
                        <Text style={styles.title}>Full Name</Text>
                        <TextInput style={styles.input(borderColor)} onFocus={onFocus} onBlur={onBlur} value={fullname} onChangeText={(value) => setFullName(value)}/>
                    </View>
                    <Gap height={20} />
                    <View>
                        <Text style={styles.title}>Address</Text>
                        <TextInput style={styles.input(borderColor)} onFocus={onFocus} onBlur={onBlur} value={address} onChangeText={(value) => setAddress(value)}/>
                    </View>
                    <Gap height={20} />
                    <View>
                        <Text style={styles.title}>Study Program</Text>
                        <SelectDropdown
                            defaultButtonText={'Test'}
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
                        <TextInput style={styles.input(borderColor)} onFocus={onFocus} onBlur={onBlur} value={birthPlace} onChangeText={(value) => setBirthPlace(value)}/>
                    </View>
                    <Gap height={20} />
                    <View>
                        <Text style={styles.title}>Date of Birth</Text>
                        <View>
                            <TouchableOpacity style={styles.dateButton} onPress={showDatePicker}>
                                <Text style={{ color: colors.TextGray, paddingLeft: 9 }}>{dateBirth === '' ? 'DD MM YYYY' : moment(dateBirth).format('DD MMM YYYY')}</Text>
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
                        <TextInput style={styles.input(borderColor)} onFocus={onFocus} onBlur={onBlur} value={generation} onChangeText={(value) => setGeneration(value)}/>
                    </View>
                    <Gap height={20} />
                    <View>
                        <Text style={styles.title}>Domicile</Text>
                        <TextInput style={styles.input(borderColor)} onFocus={onFocus} onBlur={onBlur} value={domicile} onChangeText={(value) => setDomicile(value)}/>
                    </View>
                    <Gap height={20} />
                    <View>
                        <Text style={styles.title}>Email</Text>
                        <TextInput style={styles.input(borderColor)} onFocus={onFocus} onBlur={onBlur} value={email} onChangeText={(value) => setEmail(value)}/>
                    </View>
                    <Gap height={20} />
                    <View>
                        <Text style={styles.title}>Phone Number</Text>
                        <TextInput style={styles.input(borderColor)} onFocus={onFocus} onBlur={onBlur} value={phoneNumber} onChangeText={(value) => setPhoneNumber(value)}/>
                    </View>
                    <Gap height={20} />
                    <View>
                        <Text style={styles.title}>Company</Text>
                        <TextInput style={styles.input(borderColor)} onFocus={onFocus} onBlur={onBlur} value={company} onChangeText={(value) => setCompany(value)}/>
                    </View>
                    <Gap height={20} />
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity style={styles.Button} onPress={postData}>
                            <Text style={styles.titleButton}>Edit</Text>
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
    headerTitle: {
        fontFamily: 'Poppins-Bold', 
        color: colors.Black, 
        fontSize: 18
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

export default ViewListAlumniEdit;