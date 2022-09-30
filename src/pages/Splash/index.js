import React, {useEffect, useRef} from "react"
import {View, Image, StyleSheet, StatusBar, Animated, ImageBackground} from "react-native"
import { BgSplash, IkaftiBlack, IkaftiWhite } from "../../assets"
import { colors, getData } from "../../utils"

const Splash = ({navigation}) => {

    const fadeAnim = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
              toValue: 1,
              duration: 2000,
              useNativeDriver: true
            }
        ).start();
        setTimeout(() => {
            getData('user').then(res=>{
                if (res !== null ){
                    navigation.replace('NavigationAdmin')
                }
                else {
                    navigation.replace('Navigation')
                }
            })
        }, 5000);
    }, []);

    return (
        <ImageBackground source={BgSplash} resizeMode='cover' style={styles.container}>
            <StatusBar barStyle = "default" hidden = {false} backgroundColor = {colors.Gray} translucent = {false}/>
            <View style={{flex: 1 ,justifyContent: 'center', alignItems: 'center'}}>
                <Animated.Image source={IkaftiBlack} style={{ width:'55%', height:'15%', resizeMode: 'stretch', opacity: fadeAnim }}/>
            </View>
        </ImageBackground>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})

export default Splash;