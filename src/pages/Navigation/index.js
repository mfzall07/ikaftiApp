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

const Tab = createBottomTabNavigator();
const Navigation = () => {
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
                    name="Home"
                    component={Home}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={colors.White} size={23} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Registration"
                    component={RegistrationAlumni}
                    options={{
                        tabBarLabel: 'Registration',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="file-document-edit" color={colors.White} size={23} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Login"
                    component={Login}
                    options={{
                        tabBarLabel: 'Login',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="login" color={colors.Red} size={23} style={styles.iconLogin}/>
                        ),
                    }}
                />
                <Tab.Screen
                    name="AlumniList"
                    component={AlumniList}
                    options={{
                        tabBarLabel: 'Alumni List',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="account-details" color={colors.White} size={23} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="About"
                    component={About}
                    options={{
                        tabBarLabel: 'About',
                        tabBarIcon: ({ color, size }) => (
                            <IonIcon name="ios-people-sharp" color={colors.White} size={23} />
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

export default Navigation;