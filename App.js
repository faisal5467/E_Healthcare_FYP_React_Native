import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainStackNavigator from './src/screens/navigation/StackNavigator';
import DrawerNavig from './src/screens/navigation/DrawerNavig';


const Stack = createNativeStackNavigator();

const App = () => {
  return (

    <NavigationContainer>
      {/* <Stack.Navigator options={{ headerShown: false }}> */}
      {/* <DrawerNavig /> */}
      <MainStackNavigator />
      {/* <Stack.Screen name='MainStackNavigator' component={MainStackNavigator} options={{ headerShown: false }} />
        <Stack.Screen name='DrawerNavig' component={DrawerNavig} /> */}

      {/* </Stack.Navigator> */}
    </NavigationContainer >
  );
}

export default App

const styles = StyleSheet.create({})