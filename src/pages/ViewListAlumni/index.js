import React, {useEffect, useState} from "react"
import {View, Text, StyleSheet, StatusBar, ScrollView, TextInput, FlatList, SafeAreaView} from "react-native"
import { CardAlumniList, CardList, CardViewAlumniList, Gap } from "../../component";
import { colors, getData } from "../../utils"
import IonIcon from 'react-native-vector-icons/Ionicons';
import Api from "../../Api";
import axios, { Axios } from "axios";

const ViewListAlumni = ({navigation}) => {

    const [borderColor, setBorderColor] = useState('#A1AEB7') ;
    const [alumni, setAlumni] = useState('');
    const [oldAlumni, setOldAlumni] = useState('');
    const [token, setToken] = useState('');
    const [search, setSearch] = useState('');
    
    const onBlur = () => {
        setBorderColor('#A1AEB7')
    }

    const onFocus = () => {
        setBorderColor(colors.Red)
    }

    const fetchData = async() => {
        try {
            const responseAlumni = await axios.get('https://ikafti-umi.com/api/v1/alumni')
            setOldAlumni(responseAlumni.data.data)
            setAlumni(responseAlumni.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getLocalStorage = () => {
        getData('user').then(res => {
            setToken(res.token)
        })
    }

    useEffect(() => {
        fetchData() && getLocalStorage()
    }, [])
    
    const render = ({item}) => {
        const params = {
            id : item.id,
            token : token
        }
        return (
            <View>
                <Gap height={10}/>
                <CardViewAlumniList
                    name={item.name}
                    image={item.image}
                    onPress={ () => navigation.navigate('ViewListAlumniDetail', params) }
                />
            </View>
        )
    }
    
    const searchName = (input) => {
        if (input) {
            const searchData = alumni.filter((item) => {
                const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase()
                const textData = input.toUpperCase()
                return itemData.indexOf(textData) > -1      
            })
            setAlumni(searchData)
            setSearch(input)
        }else { 
            setAlumni(oldAlumni)
            setSearch(input)
        }
    }

    return (
        <SafeAreaView style={styles.container} >
            <StatusBar barStyle = "default" hidden = {false} backgroundColor = {colors.Gray} translucent = {false}/>
            <View style={{ alignSelf: 'flex-start' }}>
                <Text style={{ fontFamily: 'Poppins-Bold', color: colors.Black, fontSize: 24 }}>Alumni List</Text>
                <Text style={{ fontFamily: 'Poppins', color: colors.Gray, fontSize: 12, bottom: 5 }}>List for alumni IKAFTi</Text>
                <Gap height={10}/>
            </View>
            <Gap height={20}/>
            <View style={{ position: 'relative' }}>
                <TextInput style={styles.input(borderColor)} placeholder='Search' placeholderTextColor={colors.Gray} onFocus={onFocus} onBlur={onBlur} value={search} onChangeText={ (input) => searchName(input) }/>
                <IonIcon name="search" color={colors.Gray} size={18} style={styles.icon} />
                <Gap height={10}/>
            </View>
            <FlatList data={alumni} renderItem={render} keyExtractor={item => item.id}/>
            {/* <Gap height={10}/> */}
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.White,
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

export default ViewListAlumni;