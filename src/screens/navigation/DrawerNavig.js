import { Share, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomDrawer from '../../components/CustomDrawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Patienthome from '../Patient/Patienthome';
import EditProfile from '../Patient/EditProfile';
import ContactUs from '../../components/ContactUs'
import Privacy from '../../components/Privacy';

const Drawer = createDrawerNavigator();
const DrawerNavig = () => {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{
                drawerActiveBackgroundColor: "#381290", drawerActiveTintColor: "white", drawerInactiveTintColor: '#333', drawerLabelStyle: { fontSize: 15 }
            }}>
            <Drawer.Screen name='Patient Home' component={Patienthome} screenOptions={{
                drawerIcon: () => {
                    <MaterialIcons name="supervisor-account" size={22} />
                },
            }} />

            <Drawer.Screen name='Edit Profile' component={EditProfile} />

            <Drawer.Screen name='Contact Us' component={ContactUs} />
            <Drawer.Screen name='Privacy Policy' component={Privacy} />

        </Drawer.Navigator>
    )
}

export default DrawerNavig

const styles = StyleSheet.create({})