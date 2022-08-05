import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { color } from 'react-native-reanimated'

const Prescription = () => {
    return (
        <View>
            <Text style={styles.text}>You Don't have any Prescription</Text>
        </View>
    )
}

export default Prescription

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        color: 'black',
        fontSize: 20
    }
})