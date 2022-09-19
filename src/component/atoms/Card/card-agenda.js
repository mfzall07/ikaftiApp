import React from 'react'
import {Image, StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native'
import { exampleContent } from '../../../assets'
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../../utils'
import Gap from '../Gap'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CardAgenda = ({title, author, date, onPress, image}) => {
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.card}>
                <View style={styles.imageCard}>
                    <Image source={{uri:image}} style={styles.image}/>
                </View>
                <View style={styles.contentCard}>
                    <Text style={styles.title} numberOfLines={5}>{title}</Text>
                    <Gap height={20}/>
                    <View>
                        <Text style={styles.author} numberOfLines={1}>
                            <Icon name="user" size={14} color={colors.Red}/>
                            <Gap width={10}/>
                            {author ? author : '-'}
                        </Text>
                        <Gap height={5}/>
                        <Text style={styles.date} numberOfLines={1}>
                            <Icon name="calendar" size={14} color={colors.Red}/>
                            <Gap width={9}/>
                            {date ? date : '-'}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.White,
        width: windowWidth/1.1,
        height: 180,
        borderWidth: 1,
        borderColor: colors.Gray,
        borderRadius: 5,
        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        display: 'flex',
        flexDirection: 'row',
    },
    imageCard: {
        height: '100%',
        width: '45%',
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
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: 'Poppins-Bold',
        color: colors.Black,
        fontSize: 16,

    },
    author: {
        color: colors.Gray,
        fontFamily: 'Poppins',
        textAlign: 'justify',
        fontSize: 12,
        marginLeft: 1,
    },
    date: {
        color: colors.Gray,
        fontFamily: 'Poppins',
        textAlign: 'justify',
        fontSize: 12,
    },

})

export default CardAgenda;