import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { color } from 'react-native-reanimated'

const PHelp = () => {
    return (
        <View>
            <Text style={styles.text}>In case of any emergency you can contact in these numbers</Text>
            <Text style={styles.description}>
                International Islamic University (IIU) has established {'\n'}
                an Emergency Helpline Line.

                The IIU emergency numbers{'\n'}
                051-9257915 (direct line), {'\n'}
                051-9019915 (direct number for intercom){'\n'}
                and 2915 (for inside complaints) {'\n'}
                can be dialed for emergency helpline.
            </Text>
        </View>
    )
}

export default PHelp

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
        paddingTop: 10
    },
    description: {
        color: '#4D4C52',
        fontSize: 15,
        paddingHorizontal: '4%',
        paddingVertical: '4%'

    }

})