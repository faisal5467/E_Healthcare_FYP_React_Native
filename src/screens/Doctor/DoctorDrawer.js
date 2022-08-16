import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import EditProfile from '../Patient/EditProfile';
import ShareIt from '../../components/ShareIt';
import ContactUs from '../../components/ContactUs';
import Privacy from '../../components/Privacy';
import DoctorHome from './DoctorHome';
import CustomDrawer from '../../components/CustomDrawer';



const Drawer = createDrawerNavigator();

const DoctorDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName="DoctorHome" drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{
                drawerActiveBackgroundColor: "#381290", drawerActiveTintColor: "white", drawerInactiveTintColor: '#333', drawerLabelStyle: { fontSize: 15 }
            }}>
            <Drawer.Screen name='Doctor Home' component={DoctorHome} />
            <Drawer.Screen name='Edit Profile' component={EditProfile} />
            <Drawer.Screen name='Share' component={ShareIt} />
            <Drawer.Screen name='Contact Us' component={ContactUs} />
            <Drawer.Screen name='Privacy Policy' component={Privacy} />
        </Drawer.Navigator>
    )
}

export default DoctorDrawer

const styles = StyleSheet.create({})