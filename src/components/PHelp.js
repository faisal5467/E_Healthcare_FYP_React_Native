import { ImageBackground, SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const PHelp = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', borderWidth: 3, borderColor: '#381290', borderRadius: 20, width: '96%', marginLeft: '2%', }}>

            <View style={{ flex: .5, backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                <Image source={require('../assets/images/emergency.jpg')} style={{ height: 200, width: '100%', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
            </View>

            <View style={{ flex: .2, backgroundColor: 'white', paddingHorizontal: 20, paddingVertical: 20, }}>
                <Text style={{ fontSize: 20, color: '#333', textAlign: 'center' }}>In case of any emergency please contact on these Number  </Text>
            </View>


            <View style={{ flex: 1, backgroundColor: '#EAF5F0', borderWidth: 3, borderColor: '#381290', borderRadius: 20, width: '80%', marginLeft: '10%', }}>
                <View style={{ flex: .18, backgroundColor: '#EAF5F0', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
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
                    <MaterialCommunityIcons name="car-emergency" size={28} color="#381290" style={{ marginLeft: 15 }} />
                    <Text style={{
                        textAlign: 'center',
                        fontWeight: 'bold', fontSize: 20, fontFamily: 'OpenSans-Medium', color: '#273746'
                    }}> 1122</Text>
                </View>

                <View style={{ flex: .2 }}>
                    <Text style={{
                        textAlign: 'center',
                        fontWeight: 'bold', fontSize: 30, fontFamily: 'OpenSans-Medium', color: '#273746'
                    }}> For Emergency Contact</Text>
                </View>


            </View>
        </SafeAreaView>
    )
}

export default PHelp

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
        paddingTop: 10
    },
    description: {
        color: '#4D4C52',
        fontSize: 15,
        paddingHorizontal: '4%',
        paddingVertical: '4%'

    }

})