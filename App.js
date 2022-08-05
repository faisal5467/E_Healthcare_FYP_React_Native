import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash, Onboarding, Login, } from './src/screens';
import SignUp from './src/screens/SignUp';
import Optionalpd from './src/screens/Optionalpd';
import Patienthome from './src/screens/Patient/Patienthome';

import LabReport from './src/screens/Patient/LabReport';
import PDoctors from './src/screens/Patient/PDoctors'
import BookAppointment from './src/screens/Patient/BookAppointment';
import Prescription from './src/screens/Patient/Prescription';
import ViewAppointment from './src/screens/Patient/ViewAppointment';
import PHelp from './src/screens/Patient/PHelp';
import PHistory from './src/screens/Patient/PHistory';


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ HeaderShown: false }} >
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Sign In', headerBackVisible: false, headerTitleAlign: 'center', headerTitleStyle: { fontWeight: "bold", fontSize: 28, color: '#fff' }, headerStyle: { backgroundColor: '#381290' } }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'Sign Up', headerTitleAlign: 'center', headerTitleStyle: { fontWeight: "bold", fontSize: 28, color: '#381290' } }} />
        <Stack.Screen name="Optionalpd" component={Optionalpd} options={{ title: 'Healthcare', headerTitleAlign: 'center', headerTitleStyle: { fontWeight: "bold", fontSize: 28, color: '#381290' } }} />
        <Stack.Screen name="Patienthome" component={Patienthome} options={{ title: 'Healthcare', headerBackVisible: false, headerTitleAlign: 'center', headerTitleStyle: { fontWeight: "bold", fontSize: 28, color: '#381290' } }} />
        <Stack.Screen name="PDoctors" component={PDoctors} options={{ title: 'My Doctors', headerTitleAlign: 'center', headerTitleStyle: { fontWeight: "bold", fontSize: 28, color: '#381290' } }} />
        <Stack.Screen name="LabReport" component={LabReport} options={{ title: 'Lab Report', headerTitleAlign: 'center', headerTitleStyle: { fontWeight: "bold", fontSize: 28, color: '#381290' } }} />
        <Stack.Screen name="BookAppointment" component={BookAppointment} options={{ title: 'Book Appointment', headerTitleAlign: 'center', headerTitleStyle: { fontWeight: "bold", fontSize: 28, color: '#381290' } }} />
        <Stack.Screen name="Prescription" component={Prescription} options={{ title: 'Prescription', headerTitleAlign: 'center', headerTitleStyle: { fontWeight: "bold", fontSize: 28, color: '#381290' } }} />
        <Stack.Screen name="ViewAppointment" component={ViewAppointment} options={{ title: 'View Appointment', headerTitleAlign: 'center', headerTitleStyle: { fontWeight: "bold", fontSize: 28, color: '#381290' } }} />
        <Stack.Screen name="PHelp" component={PHelp} options={{ title: 'Emergency Helpline', headerTitleAlign: 'center', headerTitleStyle: { fontWeight: "bold", fontSize: 28, color: '#381290' } }} />
        <Stack.Screen name="PHistory" component={PHistory} options={{ title: 'Patient History', headerTitleAlign: 'center', headerTitleStyle: { fontWeight: "bold", fontSize: 28, color: '#381290' } }} />




      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

const styles = StyleSheet.create({})