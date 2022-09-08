import React, {useEffect, useState} from "react"
import {View, Text, StyleSheet, StatusBar, ScrollView, TextInput} from "react-native"
import { CardAlumniList, Gap } from "../../component";
import { colors } from "../../utils"
import IonIcon from 'react-native-vector-icons/Ionicons';
const AlumniList = ({navigation}) => {

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
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.main}>
                    <Text style={{ color: colors.Black, fontFamily: 'Poppins-Bold', fontSize: 18, textTransform: 'uppercase', textAlign: 'center' }}>Alumni List</Text>
                    <Gap height={20}/>
                    <View style={{ position: 'relative' }}>
                        <TextInput style={styles.input(borderColor)} placeholder='Full Name' placeholderTextColor={colors.Gray} onFocus={onFocus} onBlur={onBlur}/>
                        <IonIcon name="search" color={colors.Gray} size={18} style={styles.icon} />
                        <Gap height={10}/>
                    </View>
                    <View style={{ position: 'relative' }}>
                        <TextInput style={styles.input(borderColor)} placeholder='Generation' placeholderTextColor={colors.Gray} onFocus={onFocus} onBlur={onBlur}/>
                        <IonIcon name="search" color={colors.Gray} size={18} style={styles.icon} />
                        <Gap height={10}/>
                    </View>
                    <View style={{ position: 'relative' }}>
                        <TextInput style={styles.input(borderColor)} placeholder='Domicile' placeholderTextColor={colors.Gray} onFocus={onFocus} onBlur={onBlur}/>
                        <IonIcon name="search" color={colors.Gray} size={18} style={styles.icon} />
                        <Gap height={10}/>
                    </View>
                    <View>
                        <CardAlumniList
                            fullname={''}
                            address={''}
                            domicile={''}
                            email={''}
                            phone={''}
                            generation={''}
                            company={''}
                        />
                        <Gap height={10}/>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.White,
    },
    main: {
        padding: 16,

    },
    input: borderColor => ( {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: borderColor,
        fontWeight: "400",
        fontSize: 14,
        paddingLeft: 40,
        position: "relative",
        width: '100%'
    }),
    icon: {
        position: 'absolute', 
        top: 15, 
        left: 10
    }

})

export default AlumniList;