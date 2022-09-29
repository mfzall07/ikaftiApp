import React, {useEffect, useState} from "react"
import {View, Text, StyleSheet, StatusBar} from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { colors, getData } from "../../utils"
import AddAdmin from "../AddAdmin";
import AddAnnouncement from "../AddAnnouncement";
import WaitingList from "../WaitingList";
import ViewAlumniList from "../ViewListAlumni";
import AddJob from "../AddJob";

const Tab = createBottomTabNavigator();
const NavigationAdmin = (route) => {
    
    const [token, setToken] = useState('')
    const [role, setRole] = useState('')

    const getUser = () => {
        getData('user').then(res => {
            setToken(res.token)
            setRole(res.role)
        })
    }

    useEffect(() => {
        getUser()
    }, []) 

    return (
        <View style={styles.container}>
            <StatusBar barStyle = "default" hidden = {false} backgroundColor = {colors.Red} translucent = {false}/>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: colors.White,
                    tabBarStyle:{paddingBottom: 5, paddingTop: 5, backgroundColor: colors.Red},
                }}
                initialRouteName="WaitingList"
            >  
                { role === 'Super Admin' &&
                    <Tab.Screen
                        name="Admin"
                        component={AddAdmin}
                        options={{
                            tabBarLabel: 'Admin',
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="account-multiple" color={colors.White} size={23} />
                            ),
                        }}
                    />
                }
                <Tab.Screen
                    name="Announcement"
                    component={AddAnnouncement}
                    options={{
                        tabBarLabel: 'Announcement',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="bullhorn" color={colors.White} size={23} />
                        ),
                    }}
                />
                { role === 'Super Admin' ?  
                    <Tab.Screen
                        name="WaitingList"
                        component={WaitingList}
                        options={{
                            tabBarLabel: 'Home',
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="home" color={colors.Red} size={23} style={styles.iconLogin}/>
                            ),
                        }}
                    />
                :
                    <Tab.Screen
                        name="WaitingList"
                        component={WaitingList}
                        options={{
                            tabBarLabel: 'Waiting List',
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="format-list-bulleted-triangle" color={colors.White} size={23} />
                            ),
                        }}
                    />
                }
                <Tab.Screen
                    name="AlumniList"
                    component={ViewAlumniList}
                    options={{
                        tabBarLabel: 'Alumni List',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="badge-account" color={colors.White} size={23} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Job"
                    component={AddJob}
                    options={{
                        tabBarLabel: 'Job',
                        tabBarIcon: ({ color, size }) => (
                            <IonIcon name="briefcase" color={colors.White} size={23} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.White,
    },
    iconLogin: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: colors.White,
        textAlign: 'center',
        textAlignVertical:"center",
        marginBottom: 25,
        borderWidth: 2,
        borderColor: colors.Red,
    }

})

export default NavigationAdmin;