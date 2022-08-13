import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainStackNavigator from './src/screens/navigation/StackNavigator';
import DrawerM from './src/screens/navigation/DrawerM';

const Stack = createStackNavigator();

const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='drawer'
          component={DrawerM}
        />
        <Stack.Screen
          name='stack'
          component={MainStackNavigator}
        />
      </Stack.Navigator>
      {/* <DrawerM />
      <MainStackNavigator /> */}
    </NavigationContainer >
  );
}

export default App

const styles = StyleSheet.create({})