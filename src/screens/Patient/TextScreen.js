import { Animated, SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native'
import React, { useState, useRef } from 'react'
import { Component } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const MyProfile = () => {

    const [currentTab, setCurrentTab] = useState("Edit Profile")
    // To get the curretn Status of menu ...
    const [showMenu, setShowMenu] = useState(false);



    // Animated Properties...

    const offsetValue = useRef(new Animated.Value(0)).current;
    // Scale Intially must be One...
    const scaleValue = useRef(new Animated.Value(1)).current;
    const closeButtonOffset = useRef(new Animated.Value(0)).current;

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 0.8, backgroundColor: '#381290' }}>
                <View style={styles.userInfoSection}>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <Image source={require('../../assets/images/faisal.jpg')} style={{ width: 80, height: 80, borderRadius: 50 }} />
                        <View style={{ marginLeft: 20 }}>
                            <Text style={styles.title}>Muhammad Faisal</Text>
                            <Text style={styles.caption}>4033-FBAS/BSCS4/F18 B</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.userInfoSection}>
                    <View style={styles.row}>
                        <Icon name="location-on" color="#fff" size={20} />
                        <Text style={{ color: "#fff", marginLeft: 20 }}>Islamabad, Pakistan</Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name="phone" color="#fff" size={20} />
                        <Text style={{ color: "#fff", marginLeft: 20 }}>+92339894729</Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name="email" color="#fff" size={20} />
                        <Text style={{ color: "#fff", marginLeft: 20 }}>Faisal@email.com</Text>
                    </View>
                </View>

            </View>


            {/* <View style={styles.menuWrapper}>
        <TouchableOpacity onPress={() => { }}>
          <View style={styles.menuItem}>
            <Icon name="account-edit" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Edit Profile</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { }}>
          <View style={styles.menuItem}>
            <Ionicons name="notifications" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Notifications</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { }}>
          <View style={styles.menuItem}>
            <AntDesign name="sharealt" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Share</Text>
          </View>
        </TouchableOpacity >
        <TouchableOpacity onPress={() => { }}>
          <View style={styles.menuItem}>
            <AntDesign name="contacts" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Contact us</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { }}>
          <View style={styles.menuItem}>
            <MaterialIcons name="privacy-tip" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Privacy</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { }}>
          <View style={styles.menuItem}>
            <AntDesign name="logout" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Logout</Text>
          </View>
        </TouchableOpacity>

      </View> */}

            <View>

                {TabButton(currentTab, setCurrentTab, "Edit Profile", "supervisor-account")}
                {TabButton(currentTab, setCurrentTab, "Notifications", "notifications-active")}
                {TabButton(currentTab, setCurrentTab, "Share", "share")}
                {TabButton(currentTab, setCurrentTab, "Contact Us", "perm-contact-calendar")}
                {TabButton(currentTab, setCurrentTab, "Privacy", "privacy-tip")}
                {TabButton(currentTab, setCurrentTab, "Logout", "logout")}

            </View>







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


        </SafeAreaView>
    )
}

// for mmultiple buttons..

const TabButton = (currentTab, setCurrentTab, title, image) => {
    return (
        <TouchableOpacity onPress={() => {
            if (title == "LogOut") {
                // Do your Stuff...
            } else {
                setCurrentTab(title)
            }
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 15,
                marginTop: 7,
                backgroundColor: currentTab == title ? '#91c0db' : 'transparent',
                borderRadius: 8,
                width: '97.4%',
                marginLeft: 5,
                height: 50,


            }}>
                <Icon name={image} color="#381290" size={25} style={{ tintColor: currentTab == title ? "#381290" : "#91c0db" }} />
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    paddingLeft: 15,
                    color: currentTab == title ? "#381290" : "#4e4e52"
                }}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}


export default MyProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoSection: {
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 8,
        marginBottom: 10,
        color: "#fff"
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
        color: "#fff"
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    menuWrapper: {
        flex: 1.2,
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 18,

    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 26,

    },
})