import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, TextInput } from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Entypo from 'react-native-vector-icons/Entypo'
import { ScrollView } from 'react-native-gesture-handler'
import Animated, { Value } from 'react-native-reanimated'
import Bottomsheet from '../../components/Bottomsheet'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const popuplist = [
    {
        id: 1,
        name: 'task'
    },
    {
        id: 2,
        name: 'ok'
    },
    {
        id: 3,
        name: 'mast'
    },
]
const EditProfile = ({ navigation }) => {

    let popupRef = React.createRef()
    const onShowPopup = () => {
        popupRef.show()
    }

    const onclosePopup = () => {
        popupRef.close()
    }




    // pehly ka hai ye.....const renderInner = () => (
    //     <Text>Hello</Text>
    // )
    // const renderHeader = () => (
    //     <View style={styles.header}>
    //         <View style={styles.panelHeader}>
    //             <View style={styles.panelHandle}>
    //             </View>
    //         </View>
    //     </View>
    // );

    // bs = React.createRef();
    // fall = new Animated.Value(1);



    return (
        <ScrollView>
            <View style={styles.container}>
                {/* <BottomSheet
                    ref={this.bs}
                    snapPoints={[330, 0]}
                    renderContent={this.renderInner}
                    renderHeader={this.renderHeader}
                    initialSnap={1}
                    callbackNode={this.fall}
                    enabledGestureInteraction={true} /> */}
                <View style={{ margin: 20 }}>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity title="Demo PopUp" ref={(target) => popupRef = target} onPress={onShowPopup} onTouchOutside={onclosePopup} data={popuplist}>
                            <View style={{
                                height: 100,
                                width: 100,
                                borderRadius: 15,
                                justifyContent: 'center',
                                alignItems: 'center'
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
                        <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>Mr.Faisal
                        </Text>
                    </View>
                    <View style={styles.action}>
                        <MaterialCommunityIcons name="account-outline" size={20} style={{ paddingTop: 13 }} />
                        <TextInput
                            placeholder="First Name"
                            placeholderTextColor='#666666'
                            autoCorrect={false}
                            style={styles.textInput} />
                    </View>
                    <View style={styles.action}>
                        <MaterialCommunityIcons name="account-outline" size={20} style={{ paddingTop: 13 }} />
                        <TextInput
                            placeholder="Last Name"
                            placeholderTextColor='#666666'
                            autoCorrect={false}
                            style={styles.textInput} />
                    </View>
                    <View style={styles.action}>
                        <FontAwesome name="pencil-square" size={20} style={{ paddingTop: 13 }} />
                        <TextInput
                            placeholder="Registration Number"
                            placeholderTextColor='#666666'
                            autoCorrect={false}
                            style={styles.textInput} />
                    </View>
                    <View style={styles.action}>
                        <FontAwesome name="envelope-o" size={20} style={{ paddingTop: 13 }} />
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor='#666666'
                            autoCorrect={false}
                            keyboardType={'email-address'}
                            style={styles.textInput} />
                    </View>
                    <View style={styles.action}>
                        <Icon name="phone" size={20} style={{ paddingTop: 13 }} />
                        <TextInput
                            placeholder="Mobile No"
                            placeholderTextColor='#666666'
                            keyboardType='number-pad'
                            autoCorrect={false}
                            style={styles.textInput} />
                    </View>
                    <View style={styles.action}>
                        <Entypo name="location" size={20} style={{ paddingTop: 13 }} />
                        <TextInput
                            placeholder="City"
                            placeholderTextColor='#666666'
                            autoCorrect={false}
                            style={styles.textInput} />
                    </View>
                    <View style={styles.action}>
                        <Fontisto name="world-o" size={20} style={{ paddingTop: 13 }} />
                        <TextInput
                            placeholder="Country"
                            placeholderTextColor='#666666'
                            autoCorrect={false}
                            style={styles.textInput} />
                    </View>
                    <TouchableOpacity style={styles.commandButton} onPress={() => { }}>
                        <Text style={styles.panelButtonTitle}>Submit</Text>
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
        marginTop: 10,
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

    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
    },
    textInput: {

        paddingLeft: 10,
        color: '#05375a',
    },
});