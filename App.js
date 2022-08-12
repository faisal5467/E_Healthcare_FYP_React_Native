import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './src/screens/navigation/StackNavigator';
import DrawerM from './src/screens/navigation/DrawerM';

const App = () => {
  return (

    <NavigationContainer>

      {/* <DrawerM /> */}
      <MainStackNavigator />
    </NavigationContainer>
  );
}

export default App

const styles = StyleSheet.create({})