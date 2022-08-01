import { StyleSheet, Text, View, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { Colors } from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ScrollView } from 'react-native-gesture-handler'

const Patienthome = ({ navigation }) => {
    return (
        <View>
            <Text>Patient Name</Text>
        </View>
    )
}

export default Patienthome

const styles = StyleSheet.create({})