import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { color } from 'react-native-reanimated'

const ViewAppointment = () => {
    return (
        <View>
            <Text style={styles.text}>You Don't have any Appointments</Text>
        </View>
    )
}

export default ViewAppointment

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        color: 'black',
        fontSize: 20
    }
})