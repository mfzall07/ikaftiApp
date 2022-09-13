import React, {useEffect, useState} from "react"
import {View, Text, StyleSheet, StatusBar, Image, TextInput, TouchableOpacity} from "react-native"
import { IkaftiBlack } from "../../assets";
import { Gap } from "../../component/atoms";
import { colors } from "../../utils"

const Login = ({navigation}) => {

    const [borderColor, setBorderColor] = useState('#A1AEB7') ;
    const onBlur = () => {
        setBorderColor('#A1AEB7')
    }

    const onFocus = () => {
        setBorderColor(colors.Red)
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle = "default" hidden = {false} backgroundColor = {colors.Red} translucent = {false}/>
            <Image source={IkaftiBlack} style={{ width:'55%', height:'15%', resizeMode: 'stretch' }}/>
            <Gap height={50}/>
            <View style={{ alignSelf: 'flex-start' }}>
                <Text style={{ fontFamily: 'Poppins-Bold', color: colors.Black, fontSize: 24 }}>Login</Text>
                <Text style={{ fontFamily: 'Poppins', color: colors.Gray, fontSize: 12, bottom: 5 }}>Input field for continue</Text>
                <Gap height={10}/>
            </View>
            <View style={{width: '100%'}}>
                <View>
                    <Text style={styles.title}>Username</Text>
                    <TextInput style={styles.input(borderColor)} placeholder='Username' placeholderTextColor={colors.Gray} onFocus={onFocus} onBlur={onBlur}/>
                </View>
                <Gap height={20} />
                <View>
                    <Text style={styles.title}>Password</Text>
                    <TextInput secureTextEntry={true} style={styles.input(borderColor)} placeholder='Password' placeholderTextColor={colors.Gray} onFocus={onFocus} onBlur={onBlur}/>
                </View>
            </View>
            <Gap height={20}/>
            <TouchableOpacity style={styles.buttonLogin} onPress={ () => navigation.navigate('NavigationAdmin') }>
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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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