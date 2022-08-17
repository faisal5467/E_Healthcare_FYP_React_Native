import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import PharmEditProfile from './PharmEditProfile';
import ShareIt from '../../components/ShareIt';
import ContactUs from '../../components/ContactUs';
import Privacy from '../../components/Privacy';
import Prescription from '../Patient/Prescription';
import CustomDrawer from '../../components/CustomDrawer';


function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        </View>
    );
}

function NotificationsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}


const Drawer = createDrawerNavigator();


const PharmacyHome = () => {
    return (

        <Drawer.Navigator initialRouteName="Prescription" drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{
                drawerActiveBackgroundColor: "#381290", drawerActiveTintColor: "white", drawerInactiveTintColor: '#333', drawerLabelStyle: { fontSize: 15 }
            }}>
            {/* <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
            <Drawer.Screen name='Prescription' component={Prescription} />
            <Drawer.Screen name='Edit Profile' component={PharmEditProfile} />
            <Drawer.Screen name='Share' component={ShareIt} />
            <Drawer.Screen name='Contact Us' component={ContactUs} />
            <Drawer.Screen name='Privacy Policy' component={Privacy} />
        </Drawer.Navigator>

    );
}

export default PharmacyHome
const styles = StyleSheet.create({})