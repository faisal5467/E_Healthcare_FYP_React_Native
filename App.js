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
      {/* <DrawerNavig /> */}
      <MainStackNavigator />

    </NavigationContainer >
  );
}

export default App

const styles = StyleSheet.create({})