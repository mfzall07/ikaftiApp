import React from 'react'
import {Image, StyleSheet, Text, View, Dimensions} from 'react-native'
import { exampleContent, IkaftiBlack } from '../../../assets'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from '../../../utils'
import Gap from '../Gap'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CardCareer = ({title, description, typeJob, salary}) => {
    return(
        <View style={styles.card}>
            <View style={styles.imageCard}>
                <Image source={exampleContent} style={styles.image}/>
            </View>
            <View style={styles.contentCard}>
                <Text style={styles.title} numberOfLines={1}>{title}</Text>
                <Gap height={5}/>
                <Text style={styles.description} numberOfLines={1}>{description}</Text>
                <Gap height={7}/>
                <View style={styles.category}>
                    <View style={styles.category}>
                        <View style={styles.categorys}>
                            <MaterialCommunityIcons name="clock-time-three" color={colors.Red} size={15} style={{marginBottom: 1.5}} />
                            <Gap width={5}/>
                            <Text style={styles.textCategory}>{typeJob ? '' : '-'}</Text>
                        </View>
                        <Gap width={20}/>
                        <View style={styles.categorys}>
                            <Text style={styles.iconRP}>Rp</Text>
                            <Gap width={5}/>
                            <Text style={styles.textCategory}>{salary ? '' : '-'}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.White,
        width: windowWidth/2.5,
        height: 200,
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
    },
    imageCard: {
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',    
    },
    contentCard: {
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    title: {
        fontFamily: 'Poppins-Bold',
        color: colors.Black,
        fontSize: 16
    },
    description: {
        color: colors.Gray,
        textAlign: 'justify',
        fontSize: 12,
        fontFamily: 'Poppins'
    },
    category: {
        display: 'flex',
        flexDirection: 'column',
    },
    categorys: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    textCategory: {
        fontSize: 12,
        fontFamily: 'Poppins',
        color: colors.Black
    },
    iconRP: {
        color: colors.Red,
        fontFamily: 'Poppins-Bold',
        fontSize: 13,
        marginBottom: 5
    }

})

export default CardCareer;