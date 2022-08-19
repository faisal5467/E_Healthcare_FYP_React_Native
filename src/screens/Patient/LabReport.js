import { Animated, BottomSheet, StyleSheet, ImageBackground, Text, View, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Colors } from '../../constants'
import Buttons from '../../components/Buttons'
import { ScrollView } from 'react-native-gesture-handler'
import FormInput from '../../components/FormInput'

const LabReport = ({ navigation }) => {

    const [formData, setformData] = useState({
        email: '',
        password: '',
        name: '',
        mobile: '',

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
                        marginBottom: 40
                    }}>

                        <TextInput onChangeText={(text) => { setformData((prevState) => ({ ...prevState, problem: text })) }}
                            style={styles.input} placeholder="Problems" placeholderTextColor={"#381290"} />
                    </View>



                    {/* <BottomSheet
                        ref={bs}
                        snapPoints={[330, 0]}
                        renderContent={renderInner}
                        renderHeader={renderHeader}
                        initialSnap={1}
                        callbackNode={fall}
                        enabledGestureInteraction={true} /> */}


                    {/* <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity title="Demo PopUp" ref={(target) => popupRef = target} onPress={onShowPopup} onTouchOutside={onclosePopup} data={popuplist}>
                            <View style={{
                                height: 100,
                                width: 100,
                                borderRadius: 15,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}> */}
                    <ImageBackground
                        source={require('../../assets/images/faisal.jpg')} style={{ width: 100, height: 100, alignSelf: 'center', marginBottom: 20 }} imageStyle={{ borderRadius: 15 }} >
                        <View style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Icon name="camera" size={35} color='#fff' style={{
                                opacity: 0.7,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderWidth: 1,
                                borderColor: '#fff',
                                borderRadius: 10,
                            }} />
                        </View>
                    </ImageBackground>
                    {/* </View>
                        </TouchableOpacity>
                        <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>Mr.Faisal
                        </Text>
                    </View> */}




                    <Buttons btn_text={"Submit Report"} on_press={() => console.log({ formData })} />

                </View>

            </View>




        </ScrollView >
    )
}

export default LabReport

const styles = StyleSheet.create({
    input: {
        position: 'relative',
        height: '100%',
        width: '90%',
        fontFamily: 'OpenSans-Medium',
        paddingLeft: 20,
        color: '#381290'
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
    },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: { width: -1, height: -3 },
        shadowRadius: 2,
        shadowOpacity: 0.4,
        // elevation: 5,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },



})