import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const FormInput = ({ labelValue, placeholderText, iconType, iconTypee, placeholderTextColor, ...rest }) => {
    return (



        <View>
            {iconType || iconTypee ? (<View style={styles.inputField}>
                <Icon name={iconType} size={20} color="#381290" />
                <MaterialIcons name={iconTypee} size={20} color="#381290" />
                <TextInput
                    value={labelValue}
                    style={styles.input}
                    numberOfLines={1}
                    placeholder={placeholderText}
                    placeholderTextColor="#381290"
                    {...rest}
                /></View>) : (<View style={styles.withouticon}>
                    <TextInput
                        value={labelValue}
                        style={styles.input}
                        numberOfLines={1}
                        placeholder={placeholderText}
                        placeholderTextColor="#381290"
                        {...rest}
                    /></View>)}
        </View>




    )
}

export default FormInput

const styles = StyleSheet.create({
    inputField: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ededed',
        width: '98%',
        borderRadius: 10,
        height: 60,
        paddingLeft: 10,
        marginTop: 10,
        borderWidth: 1.2,
        borderColor: '#381290',

    },
    input: {
        // position: 'relative',
        height: '100%',
        width: '90%',
        fontFamily: 'OpenSans-Medium',
        paddingLeft: 12,
        color: 'black',
        fontSize: 18,


    },
    withouticon: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ededed',
        width: '98%',
        borderRadius: 10,
        height: 60,
        marginTop: 10,

    }
})