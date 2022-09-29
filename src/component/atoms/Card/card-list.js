import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../../utils'
import Gap from '../Gap'

const CardList = ({onPress, image, name, desc, type, onPressDel, id}) => {

    if (type === 'addAdmin' || type === 'addAnnouncement' || type === 'addJob'  ) {
        return (
            <View style={styles.card} id={id}>
                <View style={styles.cards} onPress={onPress}>
                    <Image source={{uri: image}} style={styles.avatar}/>
                    <Gap width={20}/>
                    <View>
                        <Text style={styles.name} numberOfLines={1}>{name}</Text>
                        <Text style={styles.desc}>{desc}</Text>
                    </View>
                </View>
                
                <TouchableOpacity style={{ backgroundColor: colors.Red, paddingVertical: 5, paddingHorizontal: 8, borderRadius: 99 }} onPress={onPressDel}>
                    <Text style={{ color: colors.White, fontFamily: 'Poppins-Bold' }}>Del</Text>
                </TouchableOpacity>

            </View>
        )
    } else {
        return (
            <View style={styles.cardss} onPress={onPress}>
                <Image source={{uri: image}} style={styles.avatar}/>
                <Gap width={20}/>
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.desc}>{desc}</Text>
                </View>
            </View>
        )
    }

    return (
        <View type={type}/>
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
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: colors.Gray,
        paddingRight: 20
    },
    cards: {
        borderRadius: 999,
        shadowColor: "#000",
        backgroundColor: colors.White,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: colors.Gray,
        width: '88%'
    },
    cardss: {
        borderRadius: 999,
        shadowColor: "#000",
        backgroundColor: colors.White,
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: colors.Gray,
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    name: {
        fontFamily: 'Poppins-Bold',
        color: colors.Black,
        maxWidth: 125
    },
    desc: {
        fontFamily: 'Poppins-Bold',
        color: colors.Gray,
        maxWidth: 250,
        fontSize: 12
    }
})

export default CardList