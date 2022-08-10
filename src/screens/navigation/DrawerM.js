import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Patienthome from '../Patient/Patienthome';
import EditProfile from '../Patient/EditProfile';
import PDoctors from '../Patient/PDoctors';


const Drawer = createDrawerNavigator();

export default function DrawerM() {
    return (

        <Drawer.Navigator initialRouteName="Patienthome">
            <Drawer.Screen name="Patienthome" component={Patienthome} />
            <Drawer.Screen name="EditProfile" component={EditProfile} />
            <Drawer.Screen name="PDoctors" component={PDoctors} />

        </Drawer.Navigator>

    );
}