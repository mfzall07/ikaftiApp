import React from 'react'
import {Image, StyleSheet, Text, View, Dimensions} from 'react-native'
import { exampleContent } from '../../../assets'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome5';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../../utils'
import Gap from '../Gap'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CardAlumniList = ({fullname, domicile, email, generation, image}) => {
    return(
        <View style={styles.card}>
            <View style={styles.imageCard}>
                <Image source={{uri: image}} style={styles.image}/>
            </View>
            <View style={styles.contentCard}>
                <View>
                    <View style={{ flexDirection: 'row', marginLeft: 2 }}>
                        <Icon name="user" size={18} />
                        <Gap width={10}/>
                        <Text style={styles.text} numberOfLines={2}>
                            {fullname ? fullname : '-'}
                        </Text>
                    </View>
                    <Gap height={5}/>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="map" size={15} />
                        <Gap width={10}/>
                        <Text style={styles.text} numberOfLines={2}>
                            {domicile ? domicile : '-'}
                        </Text>
                    </View>
                    <Gap height={5}/>
                    <View style={{ flexDirection: 'row' }}>
                        <IonIcon name="mail-open" size={15} />
                        <Gap width={10}/>
                        <Text style={styles.text} numberOfLines={2}>
                            {domicile ? domicile : '-'}
                        </Text>
                    </View>
                    <Gap height={5}/>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="users" size={15} />
                        <Gap width={10}/>
                        <Text style={styles.text} numberOfLines={2}>
                            {generation ? generation : '-'}
                        </Text>
                    </View>
                    <Gap height={5}/>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.White,
        height: 210,
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
        width: '40%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',  
        borderTopRightRadius: 5,  
        borderBottomRightRadius: 5  
    },
    contentCard: {
        padding: 10,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    text: {
        color: colors.Gray,
        fontFamily: 'Poppins',
        textAlign: 'justify',
        fontSize: 14,
        maxWidth: 150,
    },
    date: {
        color: colors.Gray,
        fontWeight: '500',
        textAlign: 'justify',
        fontSize: 14,
    },

})

export default CardAlumniList;