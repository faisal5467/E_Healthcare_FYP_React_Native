import { StyleSheet, Text, View, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import Icon from 'react-native-vector-icons/FontAwesome'
import { Colors } from '../../constants'
import Buttons from '../../components/Buttons'
import { ScrollView } from 'react-native-gesture-handler'




const BookAppointment = ({ navigation }) => {

    const [formData, setformData] = useState({
        email: '',
        password: ''
    })


    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff', flexDirection: 'column' }}>
            <StatusBar StatusBar="dark-content" backgroundColor="#381290" />
            {/* Login from section */}
            <View style={{ flex: 3, flexDirection: 'column', paddingTop: 20, backgroundColor: '#fff', paddingHorizontal: '5%' }}>

                {/* Firstbox */}
                <View style={{ flexDirection: 'column', paddingLeft: 8 }}>
                    <View style={{
                        flexDirection: 'row', backgroundColor: '#ededed', width: '98%',
                        borderRadius: 10, height: 60, marginTop: 20
                    }}>


                        <TextInput onChangeText={(text) => { setformData((prevState) => ({ ...prevState, name: text })) }}
                            style={styles.input} placeholder="Full Name" placeholderTextColor={"#381290"} />
                    </View>

                    <View style={{
                        flexDirection: 'row', backgroundColor: '#ededed', width: '98%',
                        borderRadius: 10, height: 60, marginTop: 10
                    }}>

                        <TextInput onChangeText={(text) => { setformData((prevState) => ({ ...prevState, regnumber: text })) }}
                            style={styles.input} placeholder="Reg. Number" secureTextEntry={true} placeholderTextColor={"#381290"} />
                    </View>

                    <View style={{
                        flexDirection: 'row', backgroundColor: '#ededed', width: '98%',
                        borderRadius: 10, height: 60, marginTop: 10,
                    }}>

                        <TextInput onChangeText={(text) => { setformData((prevState) => ({ ...prevState, email: text })) }}
                            style={styles.input} placeholder="Email" secureTextEntry={true} placeholderTextColor={"#381290"} />
                    </View>

                    <View style={{
                        flexDirection: 'row', backgroundColor: '#ededed', width: '98%',
                        borderRadius: 10, height: 60, marginTop: 10
                    }}>

                        <TextInput onChangeText={(text) => { setformData((prevState) => ({ ...prevState, mobile: text })) }}
                            style={styles.input} placeholder="Mobile" secureTextEntry={true} placeholderTextColor={"#381290"} />
                    </View>


                    <View style={{
                        flexDirection: 'row', backgroundColor: '#ededed', width: '98%',
                        borderRadius: 10, height: 60, marginTop: 10,
                    }}>

                        <TextInput onChangeText={(text) => { setformData((prevState) => ({ ...prevState, country: text })) }}
                            style={styles.input} placeholder="Country" secureTextEntry={true} placeholderTextColor={"#381290"} />
                    </View>


                    <View style={{
                        flexDirection: 'row', backgroundColor: '#ededed', width: '98%',
                        borderRadius: 10, height: 100, marginTop: 10, marginBottom: 80
                    }}>

                        <TextInput onChangeText={(text) => { setformData((prevState) => ({ ...prevState, problem: text })) }}
                            style={styles.input} placeholder="Problems" placeholderTextColor={"#381290"} />
                    </View>


                    <Buttons btn_text={"Book Appointment"} on_press={() => console.log({ formData })} />

                </View>

            </View>




        </ScrollView >
    )
}

export default BookAppointment

const styles = StyleSheet.create({
    input: {
        position: 'relative',
        height: '100%',
        width: '90%',
        fontFamily: 'OpenSans-Medium',
        paddingLeft: 20,
        color: '#381290',


    },
    social_btn: {
        height: 55,
        width: '100%',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ddd',
        flexDirection: 'row',
        marginLeft: 20,
        alignItems: 'center',
        marginBottom: 20
    },
    social_img: {
        width: 30,
        height: 30,
        marginLeft: 40
    }
})