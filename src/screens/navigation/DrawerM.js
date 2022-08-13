import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Splash from '../Splash';
import Onboarding from '../Onboarding';
import Login from '../Login';
import PDoctors from '../Patient/PDoctors';
import Optionalpd from '../Optionalpd';
import SignUp from '../SignUp';
import Patienthome from '../Patient/Patienthome';
import LabReport from '../Patient/LabReport'
import BookAppointment from '../Patient/BookAppointment'
import Prescription from '../Patient/Prescription'
import ViewAppointment from '../Patient/ViewAppointment'
import PHelp from '../Patient/PHelp'
import PHistory from '../Patient/LabReport'
import EditProfile from '../Patient/EditProfile'
import PMyProfile from '../Patient/PMyProfile'
import TextScreen from '../Patient/TextScreen'
import Profile from '../../components/Profile';
import DoctorHome from '../Doctor/DoctorHome';
import Privacy from '../../components/Privacy';


const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

const DrawerM = () => {
    return (

        <Drawer.Navigator screenOptions={{ HeaderShown: false }} >
            <Drawer.Screen name="Patienthome" component={PMyProfile} options={{ headerShown: false }} />
        </Drawer.Navigator>


    );
}



export default DrawerM

const styles = StyleSheet.create({})









