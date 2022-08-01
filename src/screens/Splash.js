
import React from 'react'
import { StyleSheet, Text, View, StatusBar, Image, } from 'react-native'
import { Colors } from '../../src/constants'



const Splash = ({ navigation }) => {

    setTimeout(() => {
        navigation.replace('Onboarding')
    }, 3000)
    return (
        <View style={
            {
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Colors.primary
            }
        }>
            <StatusBar barStyle="light-content" hidden={false} backgroundColor="#381290" />
            <Image source={require('../assets/images/logo1.png')}
                style={{
                    width: 200,
                    height: 200,
                    tintColor: 'white'
                }} />

            <Text style={
                {

                    fontSize: 25,
                    color: Colors.white,
                    fontWeight: 'bold',
                    fontFamily: 'OpenSans-Italic'

                }}>Healthy Life</Text>

        </View>
    )
}

export default Splash

const styles = StyleSheet.create({})