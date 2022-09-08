import React from 'react'
import {
    AgendaDetail,
    AgendaList,
    CareerDetail,
    CareerList,
    InformationDetail,
    InformationList,
    Navigation,
    Splash,
} from '../pages'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();


const Router = () => {

    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false, 
                animation: 'slide_from_right',
            }}
            initialRouteName='Splash'
        >
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Navigation" component={Navigation} />
            <Stack.Screen name="InformationDetail" component={InformationDetail} />
            <Stack.Screen name="InformationList" component={InformationList} />
            <Stack.Screen name="AgendaDetail" component={AgendaDetail} />
            <Stack.Screen name="AgendaList" component={AgendaList} />
            <Stack.Screen name="CareerDetail" component={CareerDetail} />
            <Stack.Screen name="CareerList" component={CareerList} />
        </Stack.Navigator>
    );
}

export default Router;