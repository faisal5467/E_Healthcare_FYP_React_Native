import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Splash, Onboarding, Login, } from './src/screens';
import SignUp from './src/screens/SignUp';
import Optionalpd from './src/screens/Optionalpd';
import Patienthome from './src/screens/Patient/Patienthome';


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ HeaderShown: false }} >
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Sign In', headerBackVisible: false, headerTitleAlign: 'center', headerTitleStyle: { fontWeight: "bold", fontSize: 28, color: '#381290' } }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'Sign Up', headerBackVisible: false, headerTitleAlign: 'center', headerTitleStyle: { fontWeight: "bold", fontSize: 28, color: '#381290' } }} />
        <Stack.Screen name="Optionalpd" component={Optionalpd} options={{ title: 'Healthcare', headerBackVisible: false, headerTitleAlign: 'center', headerTitleStyle: { fontWeight: "bold", fontSize: 28, color: '#381290' } }} />
        <Stack.Screen name="Patienthome" component={Patienthome} options={{ title: 'Healthcare', headerBackVisible: false, headerTitleAlign: 'center', headerTitleStyle: { fontWeight: "bold", fontSize: 28, color: '#381290' } }} />



      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

const styles = StyleSheet.create({})