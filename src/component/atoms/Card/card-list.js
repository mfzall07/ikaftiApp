import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../../utils'
import Gap from '../Gap'
import IonIcon from 'react-native-vector-icons/Ionicons';

const CardList = ({onPress, image, name, desc, type, onPressDel, id}) => {

    const [modalVisible, setmodalVisible] = useState(false);
    
    const gotoRewards = () => {
        setmodalVisible(!modalVisible)
    }

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
                
                <TouchableOpacity style={{ backgroundColor: colors.Red, padding: 5, borderRadius: 99 }} onPress={()=>setmodalVisible(!modalVisible)}>
                    <IonIcon name="md-trash-bin" color={colors.White} size={15} />
                </TouchableOpacity>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setmodalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.mainModal}>
                        <View style={styles.subModal}>
                            <View style={{ alignItems: 'center' }}>
                                <View style={{ width: 48, height: 4, backgroundColor: '#E6E9ED' }}/>
                            </View>
                            <View>
                                <Text style={{ color: colors.Black, fontFamily: 'Poppins-Bold', fontSize: 18 }}>Delete this event?</Text>
                                <Text style={{ color: colors.Gray, fontFamily:'Poppins' }}>Are u sure want to delete this event?</Text>
                            </View>
                            <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TouchableOpacity style={{ width: '45%', paddingVertical: 6, backgroundColor: '#F4F5F6', borderRadius: 8, alignItems: 'center' }} onPress = {gotoRewards}>
                                    <Text style={{ color: colors.Black, fontSize: 18, fontFamily:'Poppins'}}>Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: '45%', paddingVertical: 6, backgroundColor: colors.Red, borderRadius: 8, alignItems: 'center' }} onPress={onPressDel}>
                                    <Text style={{ color:'#fff', fontSize: 18, fontFamily:'Poppins' }}>Delete</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>

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
    },
    mainModal: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: "flex-end",
        flex: 1,
    },
    subModal: {
        backgroundColor: '#fff',
        height: 260,
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,
        justifyContent: 'space-around'
    },
})

export default CardList