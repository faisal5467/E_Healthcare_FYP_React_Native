
import { Animated, SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native'
import React, { useState, useRef } from 'react'
import { Component } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const AnimatedViewdrawer = () => {


    const [currentTab, setCurrentTab] = useState("Edit Profile")
    // To get the curretn Status of menu ...
    const [showMenu, setShowMenu] = useState(false);
    const offsetValue = useRef(new Animated.Value(0)).current;
    // Scale Intially must be One...
    const scaleValue = useRef(new Animated.Value(1)).current;
    const closeButtonOffset = useRef(new Animated.Value(0)).current;
    return (
        <Animated.View style={{
            flexGrow: 1,
            backgroundColor: 'white',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            paddingHorizontal: 15,
            paddingVertical: 20,
            borderRadius: showMenu ? 15 : 0,
            // Transforming View...
            transform: [
                { scale: scaleValue },
                { translateX: offsetValue }
            ]
        }}>

            {
                // Menu Button...
            }

            <Animated.View style={{
                transform: [{
                    translateY: closeButtonOffset
                }]
            }}>
                <TouchableOpacity onPress={() => {
                    // Do Actions Here....
                    // Scaling the view...
                    Animated.timing(scaleValue, {
                        toValue: showMenu ? 1 : 0.7,
                        duration: 300,
                        useNativeDriver: true
                    })
                        .start()

                    Animated.timing(offsetValue, {
                        // YOur Random Value...
                        toValue: showMenu ? 0 : 300,
                        duration: 300,
                        useNativeDriver: true
                    })
                        .start()

                    Animated.timing(closeButtonOffset, {
                        // YOur Random Value...
                        toValue: !showMenu ? -15 : 0,
                        duration: 300,
                        useNativeDriver: true
                    })
                        .start()

                    setShowMenu(!showMenu);
                }}>

                    <MaterialIcons name="menu" color='black' size={40} />

                </TouchableOpacity>

                <Text style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: 'black',
                    paddingTop: 20
                }}>{currentTab}</Text>


            </Animated.View>

        </Animated.View>

    )
}

export default AnimatedViewdrawer

const styles = StyleSheet.create({})