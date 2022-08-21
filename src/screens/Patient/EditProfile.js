import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, TextInput, ToastAndroid, Alert, TouchableHighlight } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Entypo from 'react-native-vector-icons/Entypo'
import { ScrollView } from 'react-native-gesture-handler'
import { launchImageLibrary } from 'react-native-image-picker'
import { Avator, Button } from 'react-native-paper'



const EditProfile = ({ navigation }) => {


    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
            width: 500,
            height: 700,
            cropping: true,
        }).then(image => {
            console.log(image);
        });
    }


    const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
            width: 500,
            height: 800,
            cropping: true
        }).then(image => {
            console.log(image);
        });
    }











    // const [Pic, SetPic] = React.useState('');
    // // for show toast msg
    // const setToastMsg = msg => {
    //     ToastAndroid, showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER);
    // };

    // const uploadImage = () => {
    //     let options = {
    //         mediaType: 'photo',
    //         quality: 1,
    //         includeBase64: true,
    //     };
    //     launchImageLibrary(options, response => {
    //         if (response.didCancel) {
    //             setToastMsg('Cancelled Image selection')
    //         }
    //         else if (response.errorCode == 'permission') {
    //             setToastMsg('permission not satisfied')
    //         }
    //         else if (response.errorCode == 'others') {
    //             setToastMsg(response.errorMessage);
    //         }
    //         else if (response.assets[0].fileSize > 2097152) {
    //             Alert.alert('Maximum image size exceeded', 'Please choose image under 2MB', [{ text: 'OK' }],
    //             );
    //         }
    //         else {
    //             SetPic()(response.assets[0].base64);
    //         }
    //     });


    // };




    return (
        <ScrollView>
            <View style={styles.container}>

                <View style={{ margin: 20 }}>
                    <View style={{ alignItems: 'center' }}>

                        {/* 
                        <View>
                            <TouchableHighlight>
                                onPress={() => alert('pressed')}
                                backgroundColor='yellow'

                                <Avator.Image
                                    size={50}
                                    source={{ uri: 'data:image/png;base64' + Pic }} />
                            </TouchableHighlight>
                        </View>

                        <View>
                            <Button mode="contained" onPress={() => uploadImage()}>
                                upload Image
                            </Button>

                            <Button mode="contained" onPress={() => uploadImage()}>
                                Remove Image
                            </Button>
                        </View> */}






                        <TouchableOpacity onPress={takePhotoFromCamera}>
                            <View style={{
                                height: 100,
                                width: 100,
                                borderRadius: 15,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: 40
                            }}>
                                <ImageBackground
                                    source={require('../../assets/images/faisal.jpg')} style={{ width: 100, height: 100 }} imageStyle={{ borderRadius: 15 }} >
                                    <View style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Icon name="camera" size={35} color='#fff' style={{
                                            opacity: 0.7,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderWidth: 1,
                                            borderColor: '#fff',
                                            borderRadius: 10,
                                        }} />
                                    </View>
                                </ImageBackground>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={choosePhotoFromLibrary}>
                            <View style={{
                                height: 100,
                                width: 100,
                                borderRadius: 15,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: 40
                            }}>
                                <ImageBackground
                                    source={require('../../assets/images/faisal.jpg')} style={{ width: 100, height: 100 }} imageStyle={{ borderRadius: 15 }} >
                                    <View style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Icon name="camera" size={35} color='#fff' style={{
                                            opacity: 0.7,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderWidth: 1,
                                            borderColor: '#fff',
                                            borderRadius: 10,
                                        }} />
                                    </View>
                                </ImageBackground>
                            </View>
                        </TouchableOpacity>




                    </View>
                    <View style={styles.action}>
                        <MaterialCommunityIcons name="account-outline" size={25} style={{ paddingTop: 13, color: '#381290' }} />
                        <TextInput
                            placeholder="Full Name"
                            placeholderTextColor='#666666'
                            autoCorrect={false}
                            style={styles.textInput} />
                    </View>

                    <View style={styles.action}>
                        <FontAwesome name="pencil-square" size={25} style={{ paddingTop: 13, color: '#381290' }} />
                        <TextInput
                            placeholder="Registration Number"
                            placeholderTextColor='#666666'
                            autoCorrect={false}
                            style={styles.textInput} />
                    </View>
                    <View style={styles.action}>
                        <FontAwesome name="envelope-o" size={25} style={{ paddingTop: 13, color: '#381290' }} />
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor='#666666'
                            autoCorrect={false}
                            keyboardType={'email-address'}
                            style={styles.textInput} />
                    </View>
                    <View style={styles.action}>
                        <Icon name="phone" size={25} style={{ paddingTop: 13, color: '#381290' }} />
                        <TextInput
                            placeholder="Mobile No"
                            placeholderTextColor='#666666'
                            keyboardType='number-pad'
                            autoCorrect={false}
                            style={styles.textInput} />
                    </View>
                    <View style={styles.action}>
                        <Entypo name="location" size={25} style={{ paddingTop: 13, color: '#381290' }} />
                        <TextInput
                            placeholder="City"
                            placeholderTextColor='#666666'
                            autoCorrect={false}
                            style={styles.textInput} />
                    </View>
                    <View style={styles.action}>
                        <Fontisto name="world-o" size={25} style={{ paddingTop: 13, color: '#381290' }} />
                        <TextInput
                            placeholder="Country"
                            placeholderTextColor='#666666'
                            autoCorrect={false}
                            style={styles.textInput} />
                    </View>
                    <TouchableOpacity style={styles.commandButton} onPress={() => { }}>
                        <Text style={styles.panelButtonTitle}>UpDate</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#381290',
        alignItems: 'center',
        marginTop: 40,
    },
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        // shadowColor: '#000000',
        // shadowOffset: {width: 0, height: 0},
        // shadowRadius: 5,
        // shadowOpacity: 0.4,
    },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: { width: -1, height: -3 },
        shadowRadius: 2,
        shadowOpacity: 0.4,
        // elevation: 5,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
    panelTitle: {
        fontSize: 27,
        height: 35,
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
    action: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#D2D1D8',
        marginTop: 5

    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
    },
    textInput: {

        paddingLeft: 20,
        color: '#05375a',
    },
});