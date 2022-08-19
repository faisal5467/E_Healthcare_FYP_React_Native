import { StyleSheet, Text, View, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Buttons from '../../components/Buttons'
import { ScrollView } from 'react-native-gesture-handler'
import FormInput from '../../components/FormInput'


const BookAppointment = ({ navigation }) => {

    const [formData, setformData] = useState({
        email: '',
        password: ''
    })

    const [name, setName] = useState('');
    const [regnumber, setReg] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [problem, setProblem] = useState('');
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff', flexDirection: 'column' }}>
            <StatusBar StatusBar="dark-content" backgroundColor="#381290" />
            {/* Login from section */}
            <View style={{ flex: 3, flexDirection: 'column', paddingTop: 20, backgroundColor: '#fff', paddingHorizontal: '5%' }}>

                {/* Firstbox */}
                <View style={{ flexDirection: 'column', paddingLeft: 8 }}>

                    <FormInput
                        labelValue={name}
                        onChangeText={(userName) => setName(userName)}
                        placeholderText="Full Name"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <FormInput
                        labelValue={regnumber}
                        onChangeText={(userReg) => setReg(userReg)}
                        placeholderText="Reg. Number"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <FormInput
                        labelValue={email}
                        onChangeText={(userEmail) => setEmail(userEmail)}
                        placeholderText="Email"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <FormInput
                        labelValue={mobile}
                        onChangeText={(userMobile) => setMobile(userMobile)}
                        placeholderText="Mobile"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <FormInput
                        labelValue={city}
                        onChangeText={(userCity) => setCity(userCity)}
                        placeholderText="City"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <FormInput
                        labelValue={country}
                        onChangeText={(userCountry) => setCountry(userCountry)}
                        placeholderText="Country"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <View style={{
                        flexDirection: 'row',
                        backgroundColor: '#ededed',
                        width: '98%',
                        borderRadius: 10,
                        height: 100,
                        marginTop: 10,
                        marginBottom: 50
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