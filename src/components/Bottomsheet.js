// import { StyleSheet, Text, View, Modal, Dimensions, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
// import React, { Component } from 'react'
// import { Title } from 'react-native-paper'
// import { FlatList } from 'react-native-gesture-handler'
// import { Item } from 'react-native-paper/lib/typescript/components/List/List'

// const deviceHeight = Dimensions.get("window").height

// export class BottomSheet extends React.Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             show: false
//         }
//     }

//     show = () => {
//         this.setState({ show: true })
//     }

//     close = () => {
//         this.setState({ show: false })
//     }


//     renderOutsideTouchable(onTouch) {
//         const view = <View style={{ flex: 1, width: '100%' }} />
//         if (!onTouch) return view
//         return (
//             <TouchableOpacity onPress={onTouch} style={{ flex: 1, width: '100%' }}>
//                 {view}
//             </TouchableOpacity>
//         )

//     }

//     renderTitle = () => {
//         const { title } = this.props
//         return (
//             <View>
//                 <Text style={{
//                     color: '#182E44',
//                     fontSize: 25,
//                     fontWeight: '500',
//                     margin: 15
//                 }}>
//                     {title}
//                 </Text>
//             </View>
//         )

//     }


//     renderContent = () => {
//         const { data } = this.props
//         return (
//             <View>
//                 <FlatList
//                     style={{ marginBottom: 20 }}
//                     showsVerticalScrollIndicator={false}
//                     data={data}
//                     renderItem={this.renderItem}
//                     extraData={data}
//                     keyExtractor={(index) => index.toString()}
//                     ItemSeparatorComponent={this.renderSeparator}
//                     contentContainerStyle={{
//                         paddingBottom: 40
//                     }}
//                 />
//             </View>
//         )
//     }

//     renderItem = ({ item }) => {
//         return (
//             <View style={{ height: 50, flex: 1, alignItems: 'center' }}>
//                 <Text style={{ fontSize: 10, fontWeight: 'normal', color: '#182E44' }}>{item.name}</Text>
//             </View>
//         )
//     }
//     renderSeparator = () => {
//         <View style={{
//             opacity: 0.1,
//             backgroundColor: '#182E44',
//             height: 1
//         }}></View>
//     }


//     render() {

//         let { show } = this.state
//         const { onTouchOutside, title } = this.props
//         return (
//             <Modal
//                 animationType={'fade'}
//                 transparent={true}
//                 visible={show}
//                 onRequestClose={this.close}
//             >
//                 <View style={{ flex: 1, backgroundColor: '#000000AA', justifyContent: 'flex-end' }}
//                 >
//                     {this.renderOutsideTouchable(onTouchOutside)}
//                     <View style={{
//                         backgroundColor: '#FFFFFF',
//                         width: '100%',
//                         borderTopRightRadius: 10,
//                         borderTopLeftRadius: 10,
//                         paddingHorizontal: 10,
//                         height: deviceHeight * 0.4
//                     }}>
//                         {this.renderTitle()}
//                         {this.renderContent}

//                     </View>
//                 </View>
//             </Modal>
//         )
//     }

// }
