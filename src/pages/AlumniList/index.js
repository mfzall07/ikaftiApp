import React, {useEffect, useState} from "react"
import {View, Text, StyleSheet, StatusBar, ScrollView, TextInput, FlatList, SafeAreaView} from "react-native"
import { CardAlumniList, Gap } from "../../component";
import { colors } from "../../utils"
import IonIcon from 'react-native-vector-icons/Ionicons';
import Api from "../../Api";
import axios, { Axios } from "axios";

const AlumniList = ({navigation}) => {

    const [borderColor, setBorderColor] = useState('#A1AEB7') ;
    const [alumni, setAlumni] = useState('');
    const [limitAlumni, setLimitAlumni] = useState(4);
    
    const onBlur = () => {
        setBorderColor('#A1AEB7')
    }

    const onFocus = () => {
        setBorderColor(colors.Red)
    }

    const fetchData = async() => {
        try {
            const responseAlumni = await axios.get('https://ikafti-umi.com/api/v1/alumni?limit='+limitAlumni)
            setAlumni(responseAlumni.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    
    const render = ({item}) => {
        return (
            <View>
                <Gap height={10}/>
                <CardAlumniList key={item.id}
                    fullname={item.name}
                    domicile={item.domicile}
                    email={item.email}
                    generation={item.generation}
                />
            </View>
        )
    }

    const loadMore = () => {
        setLimitAlumni(limitAlumni+4)
        fetchData()
    }
    

    return (
        <SafeAreaView style={styles.container} >
            <StatusBar barStyle = "default" hidden = {false} backgroundColor = {colors.Red} translucent = {false}/>
            <Text style={{ color: colors.Black, fontFamily: 'Poppins-Bold', fontSize: 18, textTransform: 'uppercase', textAlign: 'center' }}>Alumni List</Text>
            <Gap height={20}/>
            <View style={{ position: 'relative' }}>
                <TextInput style={styles.input(borderColor)} placeholder='Search' placeholderTextColor={colors.Gray} onFocus={onFocus} onBlur={onBlur}/>
                <IonIcon name="search" color={colors.Gray} size={18} style={styles.icon} />
                <Gap height={10}/>
            </View>
            <FlatList showsVerticalScrollIndicator={false} data={alumni} renderItem={render} onEndReached={() => loadMore()}/>
            <Gap height={10}/>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.White,
        padding: 16,
        borderWidth: 1,
        borderColor: 'red'
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