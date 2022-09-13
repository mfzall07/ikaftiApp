import React, {useEffect} from "react"
import {View, Text, StyleSheet, StatusBar} from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { colors } from "../../utils"
import Home from '../Home'
import RegistrationAlumni from "../RegistrationAlumni"
import AlumniList from "../AlumniList";
import Login from "../Login";
import About from "../About";
import AddAdmin from "../AddAdmin";
import AddAnnouncement from "../AddAnnouncement";
import WaitingList from "../WaitingList";
import ViewAlumniList from "../ViewListAlumni";

const Tab = createBottomTabNavigator();
const NavigationAdmin = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle = "default" hidden = {false} backgroundColor = {colors.Red} translucent = {false}/>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: colors.White,
                    tabBarStyle:{paddingBottom: 5, paddingTop: 5, backgroundColor: colors.Red}
                }}

            >
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
                <Tab.Screen
                    name="Waiting List"
                    component={WaitingList}
                    options={{
                        tabBarLabel: 'Waiting List',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="file-document-edit" color={colors.Red} size={23} style={styles.iconLogin}/>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Alumni List"
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
                    component={About}
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