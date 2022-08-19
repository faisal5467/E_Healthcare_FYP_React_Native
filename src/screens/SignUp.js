import { StyleSheet, Text, View, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome'
import Buttons from '../components/Buttons'
import { ScrollView } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FormInput from '../components/FormInput'
const SignUp = ({ navigation }) => {



    const [formData, setformData] = useState({
        email: '',
        password: '',
        name: '',
        mobile: '',

    })

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff', flexDirection: 'column' }}>
            <StatusBar StatusBar="dark-content" backgroundColor="#3704c2" />
            {/* Login from section */}
            <View style={{ flex: 3, flexDirection: 'column', paddingTop: 20, backgroundColor: '#fff', paddingHorizontal: '5%' }}>
                {/* Firstbox */}
                <View style={{ flexDirection: 'column', paddingLeft: 8, marginBottom: 40 }}>
                    <FormInput
                        labelValue={name}
                        onChangeText={(userName) => setName(userName)}
                        placeholderText="Full Name"
                        iconTypee="account-circle"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <FormInput
                        labelValue={email}
                        onChangeText={(userEmail) => setEmail(userEmail)}
                        placeholderText="Email"
                        iconType="envelope-o"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <FormInput
                        labelValue={mobile}
                        onChangeText={(userMobile) => setMobile(userMobile)}
                        placeholderText="Mobile"
                        iconTypee="call"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <FormInput
                        labelValue={password}
                        onChangeText={(userPassword) => setPassword(userPassword)}
                        placeholderText="Password"
                        iconType="lock"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                </View>
                <Buttons btn_text={"SignUp"} on_press={() => console.log({ formData })} />
            </View>

            {/* social login section */}
            <View style={{
                flex: 3,
                flexDirection: 'column',
                backgroundColor: '#fff'
            }}>
                <Text style={{
                    fontFamily: "OpenSans-Bold",
                    textAlign: 'center',
                    marginVertical: 1,
                    color: "#381290",
                    fontSize: 20,
                    fontWeight: 'bold'
                }}>Or</Text>

                <View style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '95%'
                }}>
                    <TouchableOpacity onPress={() => console.log("google login")} style={styles.social_btn}>
                        <Image style={styles.social_img} source=
                            {require('../assets/images/google.png')} />
                        <Text style={{
                            width: '80%',
                            paddingRight: 50,
                            textAlign: 'center',
                            fontWeight: 'bold',
                            fontSize: 20,
                            fontFamily: 'OpenSans-Medium',
                            color: '#273746'
                        }}> Sign up with Google  </Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    backgroundColor: "#fff",
                    marginBottom: 10
                }}>
                    <Text style={{
                        fontFamily: 'OpenSans-Medium',
                        marginTop: 50,
                        fontSize: 20,
                        color: '#273746'
                    }}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            paddingLeft: 5,
                            fontFamily: 'OpenSans-SemiBold',
                            color: '#381290'
                        }}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView >
    )
}

export default SignUp

const styles = StyleSheet.create({
    input: {
        position: 'relative',
        height: '100%',
        width: '90%',
        fontFamily: 'OpenSans-Medium',
        paddingLeft: 20,
        color: 'black'

    },
    social_btn: {
        height: 55,
        width: '96%',
        borderWidth: 1.5,
        borderRadius: 10,
        borderColor: '#381290',
        flexDirection: 'row',
        marginLeft: 20,
        alignItems: 'center',
        marginBottom: 40,
        marginTop: 30,
        backgroundColor: '#ededed'
    },
    social_img: {
        width: 30,
        height: 30,
        marginLeft: 50
    }
})