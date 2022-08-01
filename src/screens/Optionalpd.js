import { StyleSheet, Text, View, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome'
import Buttons from '../components/Buttons'
import { ScrollView } from 'react-native-gesture-handler'

const Optionalpd = ({ navigation }) => {
    return (
        <View style={{ flex: 5, flexDirection: 'column', backgroundColor: '#ddd' }}>
            <StatusBar StatusBar="dark-content" backgroundColor='#fff' />
            <View style={{ flex: 0.11, flexDirection: 'row', backgroundColor: '#fff' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 30 }}>
                    <Text style={{ fontSize: 30, color: Colors.black, paddingLeft: 75, paddingRight: 10, fontStyle: 'italic', fontWeight: 'bold', }}>Type of Account</Text>
                    <Image source={require('../assets/images/user-group.png')} style={{ width: 25, height: 25, }} />
                </View>
            </View>


            <View style={{ flex: 0.17, flexDirection: 'row', backgroundColor: '#fff' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: 35, paddingBottom: 30, paddingHorizontal: '3%' }}>
                    <Text style={{ fontSize: 20, color: "#777", textAlign: 'center' }}>Choose the type of your account.Be careful to change, it is impossible.</Text>
                </View>

            </View>



            <View style={{ flex: 0.9, flexDirection: 'column', backgroundColor: '#fff' }}>
                <View style={{ flexDirection: 'column', alignItems: 'center', width: '95%' }}>
                    <TouchableOpacity onPress={() => navigation.navigate("SignUp")} style={styles.social_btn}>
                        <Image style={styles.social_img} source=
                            {require('../assets/images/patient.png')} />
                        <Text style={{
                            width: '80%', paddingRight: 50, textAlign: 'center',
                            fontWeight: 'bold', fontSize: 30, fontFamily: 'OpenSans-Medium', color: '#273746'
                        }}> I am a Patient </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => console.log("facebook login")} style={styles.social_btn}>
                        <Image style={styles.social_img} source=
                            {require('../assets/images/doctor.png')} />
                        <Text style={{
                            width: '80%', paddingRight: 50, textAlign: 'center',
                            fontWeight: 'bold', fontSize: 30, fontFamily: 'OpenSans-Medium', color: '#273746'
                        }}> I am a Doctor </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => console.log("facebook login")} style={styles.social_btn}>
                        <Image style={styles.social_img} source=
                            {require('../assets/images/pharmacy.png')} />
                        <Text style={{
                            width: '80%', paddingRight: 50, textAlign: 'center',
                            fontWeight: 'bold', fontSize: 30, fontFamily: 'OpenSans-Medium', color: '#273746'
                        }}> Pharmacy </Text>
                    </TouchableOpacity>
                </View>
            </View>



        </View>
    )
}

export default Optionalpd

const styles = StyleSheet.create({
    social_btn: {
        height: 155,
        width: '100%',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#381290',
        flexDirection: 'row',
        marginLeft: 20,
        alignItems: 'center',
        marginTop: 15,
        backgroundColor: '#EAF5F0'

    },
    social_img: {
        width: 60,
        height: 60,
        marginLeft: 40,

    }
})