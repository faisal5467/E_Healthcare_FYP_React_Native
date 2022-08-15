import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const CustomDrawer = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}
                contentContainerStyle={{ backgroundColor: '#8200d6' }}>
                <ImageBackground source={require('../assets/images/menu-bg.jpeg')} style={{ height: 150 }}>
                    <Text style={{ fontSize: 30, color: 'white', alignSelf: 'center', marginTop: 30, fontStyle: "italic" }}>HEALTHCARE</Text>
                    <Text style={{ fontSize: 17, color: 'white', alignSelf: 'center', fontStyle: "italic", textAlign: 'center', paddingTop: 5 }}>“Physical fitness is the first requisite of happiness”</Text>
                    {/* <Image source={require('../assets/images/faisal.jpg')} style={{ height: 80, width: 80, borderRadius: 40, }} /> */}
                </ImageBackground>

                <View style={{ flex: 1, backgroundColor: "white", paddingTop: 10, }}>
                    <DrawerItemList {...props} />
                </View>




            </DrawerContentScrollView>

            <View style={{ marginBottom: 50 }}>
                <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                        <MaterialIcons name="logout" size={25} style={{ marginLeft: 10 }} />
                        <Text style={{ marginLeft: 5, fontSize: 20, color: "#333" }}>Logout</Text>
                    </View>
                </TouchableOpacity>
            </View >

        </View >
    )
}

export default CustomDrawer

const styles = StyleSheet.create({})