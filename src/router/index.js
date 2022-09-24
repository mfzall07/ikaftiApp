import React from 'react'
import {
    AddAdmin,
    AddAdminList,
    AddAnnouncement,
    AddJob,
    AddJobList,
    AgendaDetail,
    AgendaList,
    CareerDetail,
    CareerList,
    InformationDetail,
    InformationList,
    Navigation,
    NavigationAdmin,
    Splash,
    ViewAlumniList,
    ViewListAlumniDetail,
    ViewListAlumniEdit,
    WaitingList,
    WaitingListDetail,
} from '../pages'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AddAnnouncementList from '../pages/AddAnnouncementList';

const Stack = createNativeStackNavigator();


const Router = () => {

    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false, 
                animation: 'slide_from_right',
            }}
            initialRouteName='Navigation'
        >
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Navigation" component={Navigation} />
            <Stack.Screen name="InformationDetail" component={InformationDetail} />
            <Stack.Screen name="InformationList" component={InformationList} />
            <Stack.Screen name="AgendaDetail" component={AgendaDetail} />
            <Stack.Screen name="AgendaList" component={AgendaList} />
            <Stack.Screen name="CareerDetail" component={CareerDetail} />
            <Stack.Screen name="CareerList" component={CareerList} />
            <Stack.Screen name="NavigationAdmin" component={NavigationAdmin} />
            <Stack.Screen name="AddAdmin" component={AddAdmin} />
            <Stack.Screen name="AddAdminList" component={AddAdminList} />
            <Stack.Screen name="AddAnnouncement" component={AddAnnouncement} />
            <Stack.Screen name="AddAnnouncementList" component={AddAnnouncementList} />
            <Stack.Screen name="WaitingList" component={WaitingList} />
            <Stack.Screen name="WaitingListDetail" component={WaitingListDetail} />
            <Stack.Screen name="ViewAlumniList" component={ViewAlumniList} />
            <Stack.Screen name="ViewListAlumniDetail" component={ViewListAlumniDetail} />
            <Stack.Screen name="ViewListAlumniEdit" component={ViewListAlumniEdit} />
            <Stack.Screen name="AddJob" component={AddJob} />
            <Stack.Screen name="AddJobList" component={AddJobList} />
        </Stack.Navigator>
    );
}

export default Router;