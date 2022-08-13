import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import PMyProfile from '../Patient/PMyProfile';
import Patienthome from '../Patient/Patienthome';



const Drawer = createDrawerNavigator();


const DrawerNavig = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Patienthome' component={Patienthome} />
            <Drawer.Screen name='PMyProfile' component={PMyProfile} />
        </Drawer.Navigator>
    )
}

export default DrawerNavig

const styles = StyleSheet.create({})