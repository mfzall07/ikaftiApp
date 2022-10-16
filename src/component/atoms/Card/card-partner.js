import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../../utils'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CardPartner = ({source, title}) => {
  return (
    <View style={{ overflow: 'hidden', borderRadius: 5 }}>
        <ImageBackground source={source} style={styles.mainPartner}>
            <Text style={styles.text}>{title}</Text>
        </ImageBackground>
    </View>
  )
}


const styles = StyleSheet.create({
    mainPartner: {
        height: 120,
        width: windowWidth/2.33,
        padding: 5,
        position: 'relative'
    },
    text: {
        color: colors.White,
        fontFamily: 'Poppins-Bold',
        fontSize: 10,
        position: 'absolute',
        bottom: 5,
        alignSelf: 'center',
        backgroundColor: colors.Gray,
        paddingVertical: 2,
        paddingHorizontal: 5,
        borderRadius: 5 ,
        maxWidth: 140,
        opacity: 0.8
    }
})


export default CardPartner