import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../../utils'
import Gap from '../Gap'

const CardList = ({onPress, image, name, desc}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
        <Image source={{uri: image}} style={styles.avatar}/>
        <Gap width={20}/>
        <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.desc}>{desc}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 999,
        shadowColor: "#000",
        backgroundColor: colors.White,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.Gray
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    name: {
        fontFamily: 'Poppins-Bold',
        color: colors.Black,
        maxWidth: 250
    },
    desc: {
        fontFamily: 'Poppins-Bold',
        color: colors.Gray,
        maxWidth: 250,
        fontSize: 12
    }
})

export default CardList