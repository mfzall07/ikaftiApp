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
            <StatusBar barStyle = "default" hidden = {false} backgroundColor = {colors.Gray} translucent = {false}/>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarLabelStyle: {color: colors.White},
                    tabBarStyle:{paddingBottom: 5, paddingTop: 5, backgroundColor: colors.Gray},
                }}
                initialRouteName="WaitingList"
            >  
                { role === 'Super Admin' &&
                    <Tab.Screen
                        name="Admin"
                        component={AddAdmin}
                        options={{
                            tabBarLabel: 'Admin',
                            tabBarIcon: ({focused}) => (
                                <MaterialCommunityIcons name="account-multiple" style={styles.icon(focused)} size={23} />
                            ),
                        }}
                    />
                }
                <Tab.Screen
                    name="Announcement"
                    component={AddAnnouncement}
                    options={{
                        tabBarLabel: 'Announcement',
                        tabBarIcon: ({focused}) => (
                            <MaterialCommunityIcons name="bullhorn" style={styles.icon(focused)} size={23} />
                        ),
                    }}
                />
                { role === 'Super Admin' ?  
                    <Tab.Screen
                        name="WaitingList"
                        component={WaitingList}
                        options={{
                            tabBarLabel: 'Home',
                            tabBarIcon: ({focused}) => (
                                <MaterialCommunityIcons name="home" size={23} style={styles.iconLogin(focused)}/>
                            ),
                        }}
                    />
                :
                    <Tab.Screen
                        name="WaitingList"
                        component={WaitingList}
                        options={{
                            tabBarLabel: 'Waiting List',
                            tabBarIcon: ({focused}) => (
                                <MaterialCommunityIcons name="format-list-bulleted-triangle" style={styles.icon(focused)} size={23} />
                            ),
                        }}
                    />
                }
                <Tab.Screen
                    name="AlumniList"
                    component={ViewAlumniList}
                    options={{
                        tabBarLabel: 'Alumni List',
                        tabBarIcon: ({focused}) => (
                            <MaterialCommunityIcons name="badge-account" style={styles.icon(focused)} size={23} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Job"
                    component={AddJob}
                    options={{
                        tabBarLabel: 'Job',
                        tabBarIcon: ({focused}) => (
                            <IonIcon name="briefcase" style={styles.icon(focused)} size={23} />
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
    iconLogin: focused => ({
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: focused ? colors.White : colors.Gray,
        textAlign: 'center',
        textAlignVertical:"center",
        marginBottom: 25,
        borderWidth: 2,
        borderColor: focused ? colors.Red : colors.White,
        color: focused ? colors.Red : colors.White,
    }),
    icon: focused => ({
        color: focused ? colors.Red : colors.White,
    }),

})

export default NavigationAdmin;