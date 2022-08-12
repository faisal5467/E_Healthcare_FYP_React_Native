import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const Privacy = () => {
    return (
        <ScrollView contentContainerStyle={{ flex: 1, backgroundColor: 'gray' }}>
            <View style={{ flex: .4, backgroundColor: 'yellow' }}>
                <Text style={{ fontSize: 50, textAlign: "center", paddingTop: 60 }}>
                    Privacy Policy
                </Text>

            </View>

            <View style={{ flex: 1, backgroundColor: "red", marginHorizontal: '3%', marginVertical: '3%' }}>
                <Text style={{ fontSize: 20 }}>

                </Text>
            </View>
        </ScrollView>
    )
}

export default Privacy

const styles = StyleSheet.create({})