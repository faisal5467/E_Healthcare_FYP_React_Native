import { StyleSheet, Text, View, Image, FlatList, StatusBar } from 'react-native'
import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { Colors } from '../../constants'
import DoctorFlatList from './DoctorFlatList'



const PDoctors = () => {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar StatusBar="dark-content" backgroundColor='#381290' />
            <View style={{ flex: 0.11, flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 10 }}>
                    <Text style={{
                        fontSize: 24, color: Colors.black, paddingLeft: 40, paddingRight: 10,
                        alignItems: 'center', fontStyle: 'italic', fontWeight: 'bold',
                    }}>Find your favorite Doctor here</Text>
                </View>
            </View>

            <View style={{ backgroundColor: 'gray', alignItems: 'center', paddingTop: 10, paddingBottom: 10 }}>
                <Image source={require('../../assets/images/doctor.png')} style={{ width: 130, height: 130, }} />
            </View>



            <View style={{ flex: 0.17, flexDirection: 'row', backgroundColor: '#fff' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: 50, paddingBottom: 20 }}>
                    <Text style={{ fontSize: 20, color: "#818181", textAlign: 'center' }}>Choose the Doctor and make an Appointment</Text>
                </View>

            </View>

            <FlatList style={{ flex: 5, backgroundColor: 'red' }}
                data={DoctorFlatList}
                renderItem={({ item }) => {
                    return (
                        <ScrollView>
                            <View style={{ flex: 1, backgroundColor: 'pink', borderRadius: 10, height: 300, marginHorizontal: '4%', marginVertical: '2%' }}>
                                <View style={{ flexDirection: "row" }}>
                                    <View>
                                        <Image source={item.image} style={{ width: 120, height: 120, borderRadius: 50, paddingTop: 40 }} />
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 20 }} >{item.email}</Text>
                                        <Text >{item.name}</Text>
                                        <Text >{item.name}</Text>
                                    </View>
                                </View>
                                <Text >{item.position}</Text>
                                <Text >{item.position}</Text>


                            </View>
                        </ScrollView>

                    )

                }}
            />
        </View>

    );
}

export default PDoctors

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












