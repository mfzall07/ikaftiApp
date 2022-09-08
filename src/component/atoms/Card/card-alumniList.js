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

const CardAlumniList = ({fullname, address, domicile, email, phone, generation, company}) => {
    return(
        <View style={styles.card}>
            <View style={styles.imageCard}>
                <Image source={exampleContent} style={styles.image}/>
            </View>
            <View style={styles.contentCard}>
                <View>
                    <Text style={styles.text} numberOfLines={1}>
                        <Icon name="user" size={15} />
                        <Gap width={10}/>
                        {fullname ? fullname : '-'}
                    </Text>
                    <Gap height={5}/>
                    <Text style={styles.text} numberOfLines={1}>
                        <Icons name="map-marked-alt" size={10} />
                        <Gap width={10}/>
                        {address ? address : '-'}
                    </Text>
                    <Gap height={5}/>
                    <Text style={styles.text} numberOfLines={1}>
                        <Icons name="map" size={10} />
                        <Gap width={10}/>
                        {domicile ? domicile : '-'}
                    </Text>
                    <Gap height={5}/>
                    <Text style={styles.text} numberOfLines={1}>
                        <IonIcon name="mail-open" size={11} />
                        <Gap width={10}/>
                        {email ? email : '-'}
                    </Text>
                    <Gap height={5}/>
                    <Text style={styles.text} numberOfLines={1}>
                        <Icon name="phone-square" size={12} />
                        <Gap width={10}/>
                        {phone ? phone : '-'}
                    </Text>
                    <Gap height={5}/>
                    <Text style={styles.text} numberOfLines={1}>
                        <Icon name="users" size={10} />
                        <Gap width={10}/>
                        {generation ? generation : '-'}
                    </Text>
                    <Gap height={5}/>
                    <Text style={styles.text} numberOfLines={1}>
                        <Icons name="building" size={12} />
                        <Gap width={10}/>
                        {company ? company : '-'}
                    </Text>
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
        height: '100%',
        width: '40%',
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
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    text: {
        color: colors.Gray,
        fontFamily: 'Poppins',
        textAlign: 'justify',
        fontSize: 14,
        marginLeft: 1,
    },
    date: {
        color: colors.Gray,
        fontWeight: '500',
        textAlign: 'justify',
        fontSize: 14,
    },

})

export default CardAlumniList;