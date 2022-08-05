import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { color } from 'react-native-reanimated'

const PHistory = () => {
    return (
        <View>
            <Text style={styles.text}>You Don't have any History yet</Text>
        </View>
    )
}

export default PHistory

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        color: 'black',
        fontSize: 20
    }
})