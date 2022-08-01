import { ImageBackground, StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../src/constants'
import Buttons from '../components/Buttons'

const Onboarding = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: Colors.white }}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            {/* handshake image */}
            <View style={{ flex: 4, flexDirection: "column", backgroundColor: '#addd' }}>
                <ImageBackground source={require('../assets/images/hnd.png')}
                    style={{ flex: 1, width: '100%', backgroundColor: '#fff' }} />
            </View>

            {/* button and text */}
            <View style={{ flex: 2, backgroundColor: '#fff' }}>
                {/* Text Part */}
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    backgroundColor: '#fff'
                }}>
                    <Text style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        color: Colors.black
                    }}>Healthcare</Text>
                    <Text style={{ maxHeight: '50%', color: '#999', fontSize: 15, textAlign: 'center', padding: 10 }}>“I have chosen to be happy because it is good for my health.”</Text>

                </View>
                {/* Button */}
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }}>
                    {/*<TouchableOpacity style={{ justifyContent: 'center', width: '90%', backgroundColor: Colors.primary, height: 50, marginBottom: 50, borderRadius: 10 }}
                        onPress={() => navigation.navigate("Login")}
                    >

                        <Text style={{ fontSize: 15, letterSpacing: 1.5, textAlign: 'center', position: 'relative', color: Colors.white }}>Get Started</Text>
                </TouchableOpacity>*/}
                    <Buttons btn_text={"Get Started"} on_press={() => navigation.navigate("Login")} />
                </View>
            </View>
        </View>
    )
}

export default Onboarding

const styles = StyleSheet.create({})