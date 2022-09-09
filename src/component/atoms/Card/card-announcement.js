import React from 'react'
import {Image, StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native'
import { exampleContent, IkaftiBlack } from '../../../assets'
import { colors } from '../../../utils'
import Gap from '../Gap'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CardAnnouncement = ({title, description, onPress}) => {
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.card}>
                <View style={styles.imageCard}>
                    <Image source={exampleContent} style={styles.image}/>
                </View>
                <View style={styles.contentCard}>
                    <Text style={styles.title} numberOfLines={1}>{title}</Text>
                    <Gap height={5}/>
                    <Text style={styles.description} numberOfLines={2}>{description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.White,
        width: windowWidth/1,
        height: 180,
        borderWidth: 1,
        borderColor: colors.Gray,
        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    imageCard: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',    
    },
    contentCard: {
        padding: 10,
        position: 'absolute',
        bottom: 0
    },
    title: {
        color: colors.Black,
        fontSize: 12,
        width: '60%',
        backgroundColor: colors.White,
        padding: 5,
        borderRadius: 5,
        opacity: 0.8,
        fontFamily: 'Poppins-Bold'
    },
    description: {
        fontFamily: 'Poppins',
        color: colors.Black,
        fontSize: 12,
        backgroundColor: colors.White,
        padding: 5,
        borderRadius: 5,
        opacity: 0.8,
        width: 200
    }

})

export default CardAnnouncement;