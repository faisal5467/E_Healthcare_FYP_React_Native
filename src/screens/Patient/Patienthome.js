import { StyleSheet, Text, View, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { Colors } from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ScrollView } from 'react-native-gesture-handler'
import { FlatGrid } from 'react-native-super-grid';




export default function Patienthome({ navigation }) {
    const [items, setItems, open] = React.useState([
        { name: 'Doctors', code: '#D1CDDD', image: require("../../assets/images/doctor.png"), open: navigation.navigate("PDoctors") },
        { name: 'Apppointment', code: '#D1CDDD', image: require("../../assets/images/patient.png") },
        { name: 'Prescription', code: '#D1CDDD', image: require("../../assets/images/pres1.png") },
        { name: 'Lab Report', code: '#D1CDDD', image: require("../../assets/images/lab.png") },
        { name: 'Patient History', code: '#D1CDDD', image: require("../../assets/images/phistory.png") },
        //{ name: 'View Schedule', code: '#D1CDDD', image: require("../../assets/images/shedule.png") },
        //{ name: 'View Appointment', code: '#D1CDDD', image: require("../../assets/images/view.png") },
        { name: 'Help', code: '#D1CDDD', image: require("../../assets/images/help.png") },

    ])



    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <StatusBar StatusBar="dark-content" backgroundColor='#381290' />
            <Text style={{ flex: 0.06, textAlign: 'center', backgroundColor: 'white', fontSize: 24, color: 'black', fontWeight: 'bold' }}>
                What are you looking for?
            </Text>
            <FlatGrid
                itemDimension={130}
                data={items}
                style={styles.gridView}
                // staticDimension={300}
                // fixed
                spacing={20}
                renderItem={({ item }) => (
                    <TouchableOpacity osn_press={() => item.open} style={[styles.itemContainer, { backgroundColor: item.code }]}>
                        <Image style={styles.img_design} source={item.image} />
                        <Text style={styles.itemName}>{item.name}</Text>
                        {/*<Text style={styles.itemCode}>{item.code}</Text>}*/}
                    </TouchableOpacity>
                )}
            />
        </View >
    );
}

const styles = StyleSheet.create({
    gridView: {
        flex: 1
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 15,
        padding: 10,
        height: 150,
        shadowOffset: { width: 0, height: 0 },
        shadowColor: "purple",
        shadowOpacity: 10,
        elevation: 10



    },
    itemName: {

        color: 'black',
        fontWeight: '600',
        fontSize: 20,
        textAlign: 'center',
        paddingBottom: 15,
        fontWeight: 'bold'
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff'
    },
    img_design: {
        width: 60,
        height: 60,
        marginLeft: 40,
        marginBottom: 15
    }
});