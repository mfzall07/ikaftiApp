import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { exampleContent } from '../../../assets';
import { colors } from '../../../utils';
import Gap from '../Gap';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CardViewAlumniList = ({name, onPress}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
        <Image source={exampleContent} style={styles.avatar}/>
        <Gap width={20}/>
        <Text style={styles.name}>{name}</Text>
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
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    name: {
        fontFamily: 'Poppins-Bold',
        color: colors.Black
    }
})

export default CardViewAlumniList