import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
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



const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (

        <Stack.Navigator screenOptions={{ HeaderShown: false }} >
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ title: 'Sign In', headerBackVisible: false, headerTitleAlign: 'center', headerTitleStyle: { fontWeight: "bold", fontSize: 28, color: '#fff' }, headerStyle: { backgroundColor: '#381290' } }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'Sign Up', headerTitleAlign: 'center', headerTitleStyle: { fontWeight: "bold", fontSize: 28, color: '#381290' } }} />
            <Stack.Screen name="Optionalpd" component={Optionalpd} options={{ title: 'Healthcare', headerTitleAlign: 'center', headerTitleStyle: { fontWeight: "bold", fontSize: 28, color: '#381290' } }} />
            <Stack.Screen name="Patienthome" component={Patienthome} options={{ headerShown: false }} />
            <Stack.Screen name="PDoctors" component={PDoctors} options={{ title: 'My Doctors', headerTitleAlign: 'center', headerTitleStyle: { fontWeight: "bold", fontSize: 28, color: '#381290' } }} />
            <Stack.Screen name="LabReport" component={LabReport} options={{ title: 'Lab Report', headerTitleAlign: 'center', headerTitleStyle: { fontWeight: "bold", fontSize: 28, color: '#381290' } }} />
            <Stack.Screen name="BookAppointment" component={BookAppointment} options={{ title: 'Book Appointment', headerTitleAlign: 'center', headerTitleStyle: { fontWeight: "bold", fontSize: 28, color: '#381290' } }} />
            <Stack.Screen name="Prescription" component={Prescription} options={{ title: 'Prescription', headerTitleAlign: 'center', headerTitleStyle: { fontWeight: "bold", fontSize: 28, color: '#381290' } }} />
            <Stack.Screen name="ViewAppointment" component={ViewAppointment} options={{ title: 'View Appointment', headerTitleAlign: 'center', headerTitleStyle: { fontWeight: "bold", fontSize: 28, color: '#381290' } }} />
            <Stack.Screen name="PHelp" component={PHelp} options={{ title: 'Emergency Helpline', headerTitleAlign: 'center', headerTitleStyle: { fontWeight: "bold", fontSize: 28, color: '#381290' } }} />
            <Stack.Screen name="PHistory" component={PHistory} options={{ title: 'Patient History', headerTitleAlign: 'center', headerTitleStyle: { fontWeight: "bold", fontSize: 28, color: '#381290' } }} />
            <Stack.Screen name="EditProfile" component={EditProfile} options={{ title: 'Profile', headerBackVisible: false, headerTitleStyle: { fontWeight: "bold", fontSize: 28, color: '#fff' }, headerStyle: { backgroundColor: '#381290' } }} />
            <Stack.Screen name="PMyProfile" component={PMyProfile} options={{ title: 'My Profile', headerBackVisible: false, headerTitleStyle: { fontWeight: "bold", fontSize: 28, color: '#fff' }, headerStyle: { backgroundColor: '#381290' } }} />
            <Stack.Screen name="TextScreen" component={TextScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Profile" component={Profile} options={{ title: 'My Profile', headerBackVisible: false, headerTitleStyle: { fontWeight: "bold", fontSize: 28, color: '#fff' }, headerStyle: { backgroundColor: '#381290' } }} />
            <Stack.Screen name="DoctorHome" component={DoctorHome} options={{ title: 'My Doctors', headerTitleAlign: 'center', headerTitleStyle: { fontWeight: "bold", fontSize: 28, color: '#381290' } }} />
            <Stack.Screen name="Privacy" component={Privacy} options={{ title: 'Healthcare', headerTitleAlign: 'center', headerTitleStyle: { fontWeight: "bold", fontSize: 28, color: '#381290' } }} />

        </Stack.Navigator>


    );
}



export default MainStackNavigator

const styles = StyleSheet.create({})









