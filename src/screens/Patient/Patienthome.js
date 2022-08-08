import { Animated, Image, StatusBar, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { Colors } from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ScrollView } from 'react-native-gesture-handler'
import { FlatGrid } from 'react-native-super-grid';
import PHomeFlatList from './PHomeFlatList';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useRef, useState } from 'react';


export default function Patienthome({ navigation }) {
    const [items, setItems, open] = React.useState([
        { name: 'Doctors', code: '#D1CDDD', image: require("../../assets/images/doctor.png") },
        { name: 'Apppointment', code: '#D1CDDD', image: require("../../assets/images/patient.png") },
        { name: 'Prescription', code: '#D1CDDD', image: require("../../assets/images/pres1.png") },
        { name: 'Lab Report', code: '#D1CDDD', image: require("../../assets/images/lab.png") },
        { name: 'Patient History', code: '#D1CDDD', image: require("../../assets/images/phistory.png") },
        //{ name: 'View Schedule', code: '#D1CDDD', image: require("../../assets/images/shedule.png") },
        //{ name: 'View Appointment', code: '#D1CDDD', image: require("../../assets/images/view.png") },
        { name: 'Help', code: '#D1CDDD', image: require("../../assets/images/help.png") },

    ])

    //  Menu ka properties use kr raha
    // to get the surrent status of menu// 
    const [showMenu, setShowMenu] = useState(false);

    // Animated properties
    const offsetValue = useRef(new Animated.Value(0)).current;
    // scall initial must be one..
    const scaleValue = useRef(new Animated.Value(1)).current;
    const closeButtonOffset = useRef(new Animated.Value(0)).current;


    const handleList = ({ item }) => {
        return (

            <View style=
                {{ flexGrow: 1, backgroundColor: '#fff', borderRadius: 10, marginHorizontal: 10, borderRadius: 10 }}>
                <View >
                    <View style={{ flexGrow: 1 }}>
                        <Image resizeMode="cover" style={{
                            borderRadius: 10,
                            width: 300,
                            height: 200
                        }} source={item.image} />
                    </View>
                    <View>

                    </View>
                </View>
            </View>
        )
    }


    return (


        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <StatusBar StatusBar="dark-content" backgroundColor='#381290' />


            {/*new menw bana raha  */}


            <Animated.View style={{ flex: .2, position: 'relative', backgroundColor: 'yellow', borderRadius: showMenu ? 15 : 0, transform: [{ scale: scaleValue }, { translateX: offsetValue }] }}>
                <TouchableOpacity onPress={() => {
                    // do action here
                    //scaling the view
                    Animated.timing(scaleValue, {
                        toValue: showMenu ? 1 : 0.88,
                        duration: 300,
                        useNativeDriver: true
                    })
                        .start()

                    Animated.timing(offsetValue, {
                        toValue: showMenu ? 0 : 220,
                        duration: 300,
                        useNativeDriver: true
                    })
                        .start()

                    setShowMenu(!showMenu)
                }} style={{ flex: 1, flexDirection: 'row', backgroundColor: 'gray', width: '10%', marginLeft: 7 }}>
                    <MaterialIcons name="menu" color='black' size={40} />
                </TouchableOpacity>
            </Animated.View>

            {/* Menu yaha tak hai */}






            <FlatList
                style={{ flex: 1, backgroundColor: "#fff", marginVertical: 10 }}
                data={PHomeFlatList}
                horizontal
                renderItem={handleList}
            />

            <Text style={{ flex: 0.2, textAlign: 'center', backgroundColor: 'white', fontSize: 24, color: 'black', fontWeight: 'bold' }}>
                What are you looking for?
            </Text>

            <View style={{ flex: 2 }}>
                <FlatGrid
                    itemDimension={130}
                    data={items}
                    style={styles.gridView}
                    // staticDimension={300}
                    // fixed
                    spacing={20}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={[styles.itemContainer, { backgroundColor: item.code }]}>
                            <Image style={styles.img_design} source={item.image} />
                            <Text style={styles.itemName}>{item.name}</Text>
                            {/*<Text style={styles.itemCode}>{item.code}</Text>}*/}
                        </TouchableOpacity>
                    )}
                />
            </View >

        </View>

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
        elevation: 10,
    },
    itemName: {

        color: 'black',
        fontWeight: '600',
        fontSize: 20,
        textAlign: 'center',
        paddingBottom: 15,
        fontWeight: 'bold',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
    img_design: {
        width: 60,
        height: 60,
        marginLeft: 40,
        marginBottom: 15,
    }
});
