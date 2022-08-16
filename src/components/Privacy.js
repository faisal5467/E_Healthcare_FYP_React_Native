import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { Paragraph } from 'react-native-paper'


const Privacy = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#EAF5F0' }}>
            <View style={{ flex: .4, backgroundColor: 'yellow' }}>
                <ImageBackground source={require('../assets/images/menu-bg.jpeg')} style={{ height: 185 }}>
                    <Text style={{ fontSize: 50, color: 'white', alignSelf: 'center', marginTop: 60, fontStyle: "italic" }}>Privacy Policy</Text>
                </ImageBackground>
            </View>

            <ScrollView style={{ flex: 1, backgroundColor: "white", marginHorizontal: '3%', marginVertical: '1%', borderWidth: 1, borderColor: '#381290', borderRadius: 10, paddingHorizontal: 5 }}>
                <View>
                    <Text style={{ fontSize: 20, }}>This privacy policy sets out the basis on which any information, including any personal data, we collect from you, or you provide to us, will be processed by Blood Donation .Each time you use the Service by doing so you are accepting and cons-{"\n"}enting to the practices described in this privacy policy.</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#333' }}>1: Scope and Application of Privacy policy</Text>
                </View>

                <View>
                    <Text style={{ fontSize: 20 }}>This privacy policy (this “privacy policy") applies to persons anywhere in the world who access the application and use the blood donation app</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#333' }}>2: Collection of Information </Text>
                </View>

                <View>
                    <Text style={{ fontSize: 20 }}>We collect the information you provide directly to us through your access or use of the Services, such as when you create or modify your account, post a request, or by becoming donor. This information may include your name, email address, phone number, postal address, profile picture, location, and other information you choose to provide</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#333' }}>3: Use of Personal Data</Text>
                </View>

                <View>
                    <Text style={{ fontSize: 20 }}>improve the blood donation service including clear communication b/w donors and users

                        Send you notification matching your blood group and city

                        To improve the Blood Donation Service </Text>
                </View>
                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#333' }}>4: Sharing of Personal Data </Text>
                </View>
                <View>
                    <Text style={{ fontSize: 20 }}>We may share the data which include the phone number ,image , and location

                        With the Donors to provide the blood. We may share your location, name, profile image etc. for better service.

                        With blood acceptor, We may share your location, name, profile image etc.
                    </Text>
                </View>

                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#333' }}>5: Security of Personal Data</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 20 }}>We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</Text>
                </View>

                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#333' }}>6: Children’s Privacy</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 20 }}>Please note that we do not knowingly collect, keep or maintain personal information from children under the age of 18 through the Services, as we require that all users represent to us that they are at least 18 years old</Text>
                </View>

                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#333' }}>7: Log Data</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 20 }}>We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information that we use to improve the operation of the application</Text>
                </View>

                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#333' }}>8: Cookies</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 20 }}>Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory. This Service does not use these “cookies” explicitly. However, the app may use third-party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse the cookies, you may not be able to use some portions of this Service</Text>
                </View>

                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#333' }}>9: Links to Other Sites</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 20 }}>This Application may contain links to third-party websites and applications of interest, including advertisements and external services that are not affiliated with us. Once you have used these links, you will be directed to that site. Any information you provide to these third parties is not covered by this Privacy Policy, and we cannot guarantee the safety and privacy of your information. Before visiting and providing any information to any third-party websites, you should inform yourself of the privacy policies and practices (if any) of the third-party responsible for that website, and should take those steps necessary to, in your discretion, protect the privacy of your information. We are not responsible for the content or privacy and security practices and policies of any third parties, including other sites, services or applications that may be linked to or from the Application. We do not hold, control or in any way have access to the databases. We only package the links, link in any easier way for the users to navigate through. We are not responsible for any content posted on these sites. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services</Text>
                </View>

                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#333' }}>10: Changes to This Privacy Policy</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 20 }}>We may update our Privacy Policy from time to time. Thus, you are advised to review our website page periodically for any changes. These changes are effective immediately after they are posted on this page.</Text>
                </View>

                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#333' }}>11: Contact Us</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 20 }}>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at faisalabbas3120@gmail.com</Text>
                </View>
            </ScrollView>


        </View>
    )
}

export default Privacy

const styles = StyleSheet.create({})