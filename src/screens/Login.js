import { StyleSheet, Text, View, StatusBar, Image, TextInput, Alert, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Colors } from '../../src/constants'
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome'
import Buttons from '../components/Buttons'
import { ScrollView } from 'react-native-gesture-handler'

import FormInput from '../components/FormInput'

const Login = ({ navigation }) => {


    const [formData, setformData] = useState({
        email: '',
        password: ''
    })
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');




    const handlerSignIn = () => {
        {
            (email && password) == "" ? (Alert.alert("Please Enter The Email And Password")) :
                auth()
                    .signInWithEmailAndPassword(email, password)
                    .then(() => {
                        console.log('User signed in!');
                        navigation.navigate("DrawerNavig")

                    })
                    .catch(error => {

                        // if (error.code === 'auth/invalid-email') {
                        //     Alert.alert("Hellog")
                        // }
                        if (error) {
                            Alert.alert("Invalid username or password 🙂")
                        }

                        // console.error(error);

                    });
        }

    }
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff', flexDirection: 'column' }}>
            <StatusBar StatusBar="dark-content" backgroundColor="#3704c2" />
            {/* Login from section */}
            <View style={{ flex: 3, flexDirection: 'column', backgroundColor: '#fff', paddingTop: 10, paddingHorizontal: '5%' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Text style={{ fontSize: 30, color: Colors.black, paddingLeft: 80 }}>Welcome Back</Text>
                    <Image source={require('../assets/images/wave.png')} style={{ width: 25, height: 25 }} />
                </View>
                <Text style={{ fontSize: 15, color: "#777", paddingTop: 10, textAlign: 'center', marginBottom: 30 }}>I am happy to see you again.It is health that is real wealth and not pieces of gold and silver.</Text>

                {/* Firstbox */}
                <View style={{ flexDirection: 'column', paddingLeft: 8 }}>
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
                        labelValue={password}
                        onChangeText={(userPassword) => setPassword(userPassword)}
                        placeholderText="password"
                        iconType="lock"
                        secureTextEntry={true}
                    />

                    <View style={{ width: '95%', marginBottom: 35 }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 17, color: '#381290', alignSelf: 'flex-end', paddingTop: 10, }}>Forget Password</Text>
                        </TouchableOpacity>
                    </View>
                    {

                    }
                    <Buttons btn_text={"Sign In"} on_press={() => handlerSignIn()} />

                </View>

            </View>
            {/* social login section */}
            <View style={{ flex: 3, flexDirection: 'column', backgroundColor: '#fff' }}>
                <Text style={{
                    fontFamily: "OpenSans-Bold", textAlign: 'center', marginVertical: 5,
                    color: "#381290", fontSize: 20, fontWeight: 'bold',
                }}>Or</Text>

                <View style={{ flexDirection: 'column', alignItems: 'center', width: '95%' }}>
                    <TouchableOpacity onPress={() => console.log("google login")} style={styles.social_btn}>
                        <Image style={styles.social_img} source=
                            {require('../assets/images/google.png')} />
                        <Text style={{
                            width: '80%', paddingRight: 50, textAlign: 'center',
                            fontWeight: 'bold', fontSize: 20, fontFamily: 'OpenSans-Medium', color: '#273746'
                        }}> Sign In with Google </Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    flex: 1, flexDirection: 'row', justifyContent: 'center',
                    alignItems: 'flex-end', backgroundColor: "#fff", marginBottom: 80
                }}>
                    <Text style={{ fontFamily: 'OpenSans-Medium', marginTop: 50, fontSize: 20, color: '#2C3E50' }}>Don't have a account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Optionalpd")}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', paddingLeft: 5, fontFamily: 'OpenSans-SemiBold', color: '#381290' }}>Sign Up</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </ScrollView >
    )
}

export default Login

const styles = StyleSheet.create({

    social_btn: {
        height: 55,
        width: '92%',
        borderWidth: 1.3,
        borderRadius: 10,
        borderColor: '#381290',
        flexDirection: 'row',
        marginLeft: 20,
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 30,
        backgroundColor: '#ededed'
    },
    social_img: {
        width: 30,
        height: 30,
        marginLeft: 40,

    }
})