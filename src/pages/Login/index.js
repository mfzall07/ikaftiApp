import React, {useEffect, useState} from "react"
import {View, Text, StyleSheet, StatusBar, Image, TextInput, TouchableOpacity} from "react-native"
import Api from "../../Api";
import { IkaftiBlack } from "../../assets";
import { Gap } from "../../component/atoms";
import { colors, storeData } from "../../utils"
import axios from "axios"
import ToastManager, { Toast } from "toastify-react-native";

const Login = ({navigation}) => {

    const [borderColor, setBorderColor] = useState('#A1AEB7') ;
    const [notMatch, setNotMatch] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const onBlur = () => {
        setBorderColor('#A1AEB7')
    }

    const onFocus = () => {
        setBorderColor(colors.Red)
    }

    const login = async() => {
        try {
            const resopnseLogin = await Api.login(username, password)
            if (resopnseLogin.data.success === true) {
                const data = {
                    token : resopnseLogin.data.access_token,
                    role : resopnseLogin.data.role
                }
                storeData('user', data)
                
                navigation.navigate('NavigationAdmin')
            } else {
                Toast.error('Invalid username/password')
            }
        } catch (error) {
            
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle = "default" hidden = {false} backgroundColor = {colors.Gray} translucent = {false}/>
            <ToastManager/>
            <Gap height={50}/>
            <Image source={IkaftiBlack} style={{ width: 160, height: 60, resizeMode: 'cover', alignSelf: 'center' }}/>
            <Gap height={50}/>
            <View style={{ alignSelf: 'flex-start' }}>
                <Text style={{ fontFamily: 'Poppins-Bold', color: colors.Black, fontSize: 24 }}>Login</Text>
                <Text style={{ fontFamily: 'Poppins', color: colors.Gray, fontSize: 12, bottom: 5 }}>Input field for continue</Text>
                <Gap height={10}/>
            </View>
            <View style={{width: '100%'}}>
                <View>
                    <Text style={styles.title}>Username</Text>
                    <TextInput style={styles.input(borderColor)} placeholder='Username' placeholderTextColor={colors.Gray} onFocus={onFocus} onBlur={onBlur} value={username} onChangeText={(value) => setUsername(value)}/>
                </View>
                <Gap height={20} />
                <View>
                    <Text style={styles.title}>Password</Text>
                    <TextInput secureTextEntry={true} style={styles.input(borderColor)} placeholder='Password' placeholderTextColor={colors.Gray} onFocus={onFocus} onBlur={onBlur} value={password} onChangeText={(value) => setPassword(value)}/>
                </View>
            </View>
            <Gap height={20}/>
            <TouchableOpacity style={styles.buttonLogin} onPress={ login }>
                <Text style={styles.titleButtonLogin}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.White,
        padding: 16,
        width: '100%'
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
        width: '100%'
    }),
    buttonLogin: {
        backgroundColor: colors.Red,
        borderRadius: 50,
        paddingHorizontal: 50,
        paddingVertical: 10,
    },
    titleButtonLogin: {
        color: colors.White,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: '700'
    },
})

export default Login;