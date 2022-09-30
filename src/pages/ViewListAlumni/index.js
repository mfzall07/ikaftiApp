import React, {useEffect, useState} from "react"
import {View, Text, StyleSheet, StatusBar, ScrollView, TextInput, FlatList, SafeAreaView} from "react-native"
import { CardAlumniList, CardViewAlumniList, Gap } from "../../component";
import { colors, getData } from "../../utils"
import IonIcon from 'react-native-vector-icons/Ionicons';
import axios from "axios";
import { useIsFocused } from "@react-navigation/native";
const ViewAlumniList = ({navigation}) => {

    const isFocused = useIsFocused();
    const [token, setToken] = useState('')
    const [borderColor, setBorderColor] = useState('#A1AEB7') ;
    const [alumni, setAlumni] = useState('');
    const [limitAlumni, setLimitAlumni] = useState(5);

    const onBlur = () => {
        setBorderColor('#A1AEB7')
    }

    const onFocus = () => {
        setBorderColor(colors.Red)
    }

    const getDataAlumni = () => {
        getData('user').then(res => {
            setToken(res.token)
            const fetchData = async() => {
                try {
                    const responseAlumni = await axios.get('https://ikafti-umi.com/api/v1/alumni?limit='+limitAlumni)
                    setAlumni(responseAlumni.data.data)
                } catch (error) {
                    console.log(error)
                }
            }
            fetchData()
        })
    }
    useEffect(() => {
        isFocused && getDataAlumni()
    }, [isFocused]) 
    
    const render = ({item}) => {
        const params = {
            id : item.id,
            token : token
        }
        return (
            <View>
                <CardViewAlumniList
                    name={item.name}
                    image={item.image}
                    onPress={ () => navigation.navigate('ViewListAlumniDetail', params) }
                />
                <Gap height={15}/>
            </View>
        )
    }

    const loadMore = () => {
        setLimitAlumni(limitAlumni+5)
        getDataAlumni()
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle = "default" hidden = {false} backgroundColor = {colors.Gray} translucent = {false}/>
            <View style={styles.main}>
                <Gap height={10}/>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View>
                    <Text style={styles.headerTitle}>Alumni List</Text>
                    </View>
                </View>
                <View style={styles.line}></View>
                <Gap height={20}/>
                <View style={{ position: 'relative' }}>
                    <TextInput style={styles.input(borderColor)} placeholder='Search' placeholderTextColor={colors.Gray} onFocus={onFocus} onBlur={onBlur}/>
                    <IonIcon name="search" color={colors.Gray} size={18} style={styles.icon} />
                    <Gap height={10}/>
                </View>
                <View>
                    <FlatList showsVerticalScrollIndicator={false} data={alumni} renderItem={render} onEndReached={() => loadMore()}/>
                </View>
            </View>
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

})

export default ViewAlumniList;