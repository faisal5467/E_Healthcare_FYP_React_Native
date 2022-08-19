import { ImageBackground, SafeAreaView, StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


const ContactUs = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#EAF5F0', borderWidth: 1, borderColor: '#381290', borderRadius: 12, width: '96%', marginLeft: '2%', }}>

            <View style={{ flex: .5, backgroundColor: 'white', borderTopLeftRadius: 12, borderTopRightRadius: 20 }}>
                <Image source={require('../assets/images/contact1.webp')} style={{ height: 200, width: '100%', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
            </View>

            <View style={{ flex: .2, backgroundColor: '#EAF5F0', paddingHorizontal: 20, paddingVertical: 20, }}>
                <Text style={{ fontSize: 20, color: '#333', textAlign: 'center' }}>If you have any any Question then you can Contact with Us on these Number  </Text>
            </View>

            <ScrollView contentContainerStyle={{ flex: 1, backgroundColor: 'white', borderWidth: 3, borderColor: '#381290', borderRadius: 20, width: '80%', marginLeft: '10%', }}>
                <View style={{ flex: .18, backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                    <Text style={{ fontSize: 30, textAlign: "center", color: '#381290' }}>  Medical Centre IIUI  </Text>
                </View>

                <View style={{ flex: .2, flexDirection: 'row' }}>
                    <MaterialIcons name="call" size={27} color="#381290" style={{ marginLeft: 15 }} />
                    <Text style={{
                        paddingLeft: 5, textAlign: 'center',
                        fontWeight: 'bold', fontSize: 20, fontFamily: 'OpenSans-Medium', color: '#273746'
                    }}> 051-9257963</Text>
                </View>

                <View style={{ flex: .2, flexDirection: 'row' }}>
                    <MaterialIcons name="email" size={27} color="#381290" style={{ marginLeft: 15 }} />
                    <Text style={{
                        textAlign: 'center', paddingLeft: 5,
                        fontWeight: 'bold', fontSize: 20, fontFamily: 'OpenSans-Medium', color: '#273746'
                    }}> medicalcentre iiu.edu.pk </Text>
                </View>

                <View style={{ flex: .2, flexDirection: 'row' }}>
                    <MaterialIcons name="add-location" size={27} color="#381290" style={{ marginLeft: 15 }} />
                    <Text style={{
                        textAlign: 'center',
                        fontWeight: 'bold', fontSize: 20, fontFamily: 'OpenSans-Medium', color: '#273746'
                    }}> Ground Floor C-Block IIUI </Text>
                </View>
                <View style={{ flex: .2 }}>
                    <Text style={{
                        textAlign: 'center',
                        fontWeight: 'bold', fontSize: 30, fontFamily: 'OpenSans-Medium', color: '#273746'
                    }}> Please Contact Us</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default ContactUs

const styles = StyleSheet.create({
    social_img: {
        width: 30,
        height: 30,
        marginLeft: 40,

    }
})