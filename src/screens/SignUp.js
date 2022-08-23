import { StyleSheet, Text, View, StatusBar, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import auth, { firebase } from '@react-native-firebase/auth';
import { updateProfile } from '@react-native-firebase/auth';
import { Colors } from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome'
import Buttons from '../components/Buttons'
import { ScrollView } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FormInput from '../components/FormInput'
import firestore from '@react-native-firebase/firestore';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import { Validator } from 'react-native-validator'

// const validateFields = (email, password) => {
//     const isValid = {
//         email: Validator.isEmail(email),
//         password: Validator.isStrongPassword(password, {
//             minLength: 8,
//             minLowercase: 1,
//             minUppercase: 1,
//             minNumbers: 1,
//             minSymbols: 1,
//         }),
//     };
//     return isValid
// };






const SignUp = ({ navigation }) => {


    const [name, setName] = useState({
        text: "",
        errorMessage: ""
    });
    const [email, setEmail] = useState({
        text: "",
        errorMessage: ""
    });
    const [password, setPassword] = useState({
        text: "",
        errorMessage: ""
    });



    const AddUser = () => {
        firestore()
            .collection('users')
            .add({
                name: name.text,
                email: email.text,
            })
            .then(() => {
                console.log('User added!');
            });
    }

    //     firestore()
    //   .collection('Users')
    //   .doc('ABC')
    //   .set({
    //     name: name.text,
    //     email: email.text,
    //   })
    //   .then(() => {
    //     console.log('User added!');
    //   });

    GoogleSignin.configure({
        webClientId: '547114636121-30uf5r1qjshhu0tceeks4373agsfi9l4.apps.googleusercontent.com',
    });


    async function onGoogleButtonPress() {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
    }


    // const [formData, setformData] = useState({
    //     email: '',
    //     password: '',
    //     name: '',
    //     mobile: '',

    // })




    const handlerSignUp = () => {
        (email.text && password.text) == "" ? (Alert.alert("Please Enter The Email And Password")) :
            auth()
                .createUserWithEmailAndPassword(email.text, password.text)
                .then(() => {
                    Alert.alert('User account created & signed in!');
                    // navigation.navigate("DoctorDrawer")
                })
                .catch(error => {

                    { error.code === 'auth/email-already-in-use' ? Alert.alert("That email address is already in use!") : Alert.alert('That email address is invalid!') }

                    // if (error.code === 'auth/email-already-in-use') {
                    //     console.log('That email address is already in use!');
                    // }

                    // if (error.code === 'auth/invalid-email') {
                    //     console.log('That email address is invalid!');
                    // }

                    //     console.error(error);
                });

    }


    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff', flexDirection: 'column' }}>
            <StatusBar StatusBar="dark-content" backgroundColor="#3704c2" />
            {/* Login from section */}
            <View style={{ flex: 3, flexDirection: 'column', paddingTop: 20, backgroundColor: '#fff', paddingHorizontal: '5%' }}>
                {/* Firstbox */}
                <View style={{ flexDirection: 'column', paddingLeft: 8, marginBottom: 40 }}>
                    <FormInput
                        labelValue={name}
                        text={email.text}
                        onChangeText={(text) => setName({ text })}
                        placeholderText="Full Name"
                        iconTypee="account-circle"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <FormInput
                        labelValue={email}
                        text={email.text}
                        onChangeText={(text) => setEmail({ text })}
                        placeholderText="Email"
                        iconType="envelope-o"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        errorMessage={email.errorMessage}
                        autoCompleteType="email"

                    />

                    <FormInput
                        labelValue={password}
                        text={password.text}
                        onChangeText={(text) => setPassword({ text })}
                        placeholderText="password"
                        iconType="lock"
                        secureTextEntry={true}
                        autoCorrect={false}
                        errorMessage={password.errorMessage}
                    />

                </View>
                <Buttons btn_text={"SignUp"} on_press={() => { handlerSignUp(); AddUser(); }} />
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
                    <TouchableOpacity onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))} style={styles.social_btn}>
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