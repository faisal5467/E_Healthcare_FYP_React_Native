import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Patienthome from '../Patient/Patienthome';
import PDoctors from '../Patient/PDoctors';
import PMyProfile from '../Patient/PMyProfile';
import PHelp from '../Patient/PHelp';
import PHistory from '../Patient/PHistory';
const Drawer = createDrawerNavigator();
const DrawerM = () => {
    return (
        <Drawer.Navigator initialRouteName="Patienthome">
            <Drawer.Screen name="Patienthome" component={Patienthome} />
            <Drawer.Screen name="PHelp" component={PHelp} />
            <Drawer.Screen name="PHistory" component={PHistory} />
        </Drawer.Navigator>
    )
}
export default DrawerM

const styles = StyleSheet.create({})



