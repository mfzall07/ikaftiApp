import React, {useEffect} from "react"
import {View, Image, StyleSheet, StatusBar} from "react-native"
import { IkaftiWhite } from "../../assets"
import { colors } from "../../utils"

const Splash = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Navigation')
        }, 5000);
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar barStyle = "default" hidden = {false} backgroundColor = {colors.Red} translucent = {false}/>
            <View style={{flex: 1 ,justifyContent: 'center', alignItems: 'center'}}>
                <Image source={IkaftiWhite} style={{ width:'55%', height:'15%', resizeMode: 'stretch' }}/>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.Red,
    },

})

export default Splash;