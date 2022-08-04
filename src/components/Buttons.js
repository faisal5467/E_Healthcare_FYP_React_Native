import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../src/constants'

const Buttons = ({ on_press, btn_text }) => {
    return (
        <TouchableOpacity style={{ justifyContent: 'center', width: '95%', backgroundColor: Colors.primary, height: 50, marginBottom: 50, marginLeft: 5, borderRadius: 10 }}
            onPress={on_press}
        >

            <Text style={{ fontSize: 20, letterSpacing: 1.5, textAlign: 'center', position: 'relative', color: Colors.white }}>{btn_text}</Text>
        </TouchableOpacity>
    )
}

export default Buttons

const styles = StyleSheet.create({})