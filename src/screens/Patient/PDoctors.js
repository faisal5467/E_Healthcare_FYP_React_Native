import { StyleSheet, Text, Button, View, Image, FlatList, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { Colors } from '../../constants'
import DoctorFlatList from './DoctorFlatList'
import Buttons from '../../components/Buttons'



const PDoctors = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <StatusBar StatusBar="dark-content" backgroundColor='#381290' />
            <View style={{ flex: 0.11, flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 10 }}>
                    <Text style={{
                        fontSize: 20, color: Colors.black, paddingLeft: 70, paddingRight: 10,
                        alignItems: 'center', fontStyle: 'italic', fontWeight: 'bold', backgroundColor: '#fff'
                    }}>Find your favorite Doctor here</Text>
                </View>
            </View>

            <View style={{ backgroundColor: '#fff', alignItems: 'center' }}>
                <Image source={require('../../assets/images/doctor.png')} style={{ width: 100, height: 100, }} />
            </View>



            <View style={{ flex: 0.17, flexDirection: 'row', backgroundColor: '#fff' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: 55, paddingBottom: 10 }}>
                    <Text style={{ fontSize: 20, color: "#525157", textAlign: 'center' }}>Choose the Doctor and make an Appointment</Text>
                </View>

            </View>

            <FlatList style={{ flex: 5, backgroundColor: '#fff' }}
                data={DoctorFlatList}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <View style={styles.itemContainer}>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={{ paddingTop: 20, paddingLeft: 10 }}>
                                        <Image source={item.image} style={{ width: 110, height: 110, borderRadius: 50 }} />
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 20, paddingTop: 20, paddingLeft: 40, fontWeight: 'bold', color: '#525157' }} >{item.name}</Text>
                                        <Text style={{ fontSize: 15, paddingTop: 10, paddingLeft: 40, color: '#525157' }} >{item.specialist}</Text>
                                        <Text style={{ fontSize: 15, paddingTop: 10, paddingLeft: 40, color: '#525157' }} >{item.email}</Text>
                                    </View>
                                </View>
                                <Text style={{ fontSize: 15, paddingTop: 15, paddingLeft: 15, paddingBottom: 20, color: '#525157' }} >{item.position}</Text>
                                <TouchableOpacity onPress={() => navigation.navigate("LabReport")} style={styles.btnstyle}
                                >
                                    <Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }}> Book Appointment</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    )

                }}
            />
        </View>

    );
}

export default PDoctors

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        backgroundColor: '#EAF5F0',
        borderRadius: 10,
        height: 260,
        marginHorizontal: '4%',
        marginVertical: '2%',
        shadowOffset: { width: 0, height: 0 },
        shadowColor: 'purple',
        shadowOpacity: 10,
        elevation: 10
    },
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

    },
    btnstyle: {
        justifyContent: 'center',
        width: '70%',
        backgroundColor: Colors.primary,
        height: 40,
        marginLeft: 55,
        borderRadius: 10
    }
})












