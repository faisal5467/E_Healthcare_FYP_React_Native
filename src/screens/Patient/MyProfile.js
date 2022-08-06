import { AppRegistry, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const MyProfile = () => {


  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 0.56, backgroundColor: '#381290' }}>
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
            <Icon name="map-marker-radius" color="#fff" size={20} />
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


      <View style={styles.menuWrapper}>
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

      </View>






    </SafeAreaView>
  )
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