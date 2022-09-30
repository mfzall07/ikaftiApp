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
            <StatusBar barStyle = "default" hidden = {false} backgroundColor = {colors.Gray} translucent = {false}/>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarLabelStyle:{ color: colors.White },
                    tabBarStyle:{paddingBottom: 5, paddingTop: 5, backgroundColor: colors.Gray}
                }}

            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ focused }) => (
                            <MaterialCommunityIcons name="home" style={styles.icon(focused)} size={23} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Registration"
                    component={RegistrationAlumni}
                    options={{
                        tabBarLabel: 'Registration',
                        tabBarIcon: ({ focused }) => (
                            <MaterialCommunityIcons name="file-document-edit" style={styles.icon(focused)} size={23} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Login"
                    component={Login}
                    options={{
                        tabBarLabel: 'Login',
                        tabBarIcon: ({ focused }) => (
                            <MaterialCommunityIcons name="login" size={23} style={styles.iconLogin(focused)}/>
                        ),
                    }}
                />
                <Tab.Screen
                    name="AlumniList"
                    component={AlumniList}
                    options={{
                        tabBarLabel: 'Alumni List',
                        tabBarIcon: ({ focused }) => (
                            <MaterialCommunityIcons name="account-details" style={styles.icon(focused)} size={23} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="About"
                    component={About}
                    options={{
                        tabBarLabel: 'About',
                        tabBarIcon: ({ focused }) => (
                            <IonIcon name="ios-people-sharp" style={styles.icon(focused)} size={23} />
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

export default Navigation;