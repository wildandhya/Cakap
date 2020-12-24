import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, StatusBar } from 'react-native'
import { Badge } from 'react-native-elements'
import { SwipeListView } from 'react-native-swipe-list-view'

import { Color } from "../assets/color"
import Camera from 'react-native-vector-icons/FontAwesome'
import Pin from 'react-native-vector-icons/AntDesign'
import More from 'react-native-vector-icons/Feather'
import Chat from "react-native-vector-icons/Ionicons"
import Logo from "../assets/icons/pp.jpg"
import { TouchableOpacity } from 'react-native-gesture-handler'


const Message = () => {

    const data = Array(20).fill("").map((_, i) => ({ key: `${i}` }))


    return (
        <View style={style.container}>
            <StatusBar backgroundColor="#fcfcfc" barStyle="dark-content" />
            <View style={style.contentWrapp}>
                <View style={style.headerWrapp}>
                    <Camera name="camera" size={26} color="#bebebe" style={style.iconCamera} />
                    <Text style={style.textTitle}>Message</Text>
                </View>
                <SwipeListView
                    data={data}
                    renderItem={(rowMap) => (
                        <View style={style.rowFront}>
                            <View style={style.roomChatWrapp}>
                                <Image source={Logo} style={style.avatar} />
                                <View style={{ alignSelf: 'flex-start', flex: 1, marginLeft: 10, paddingTop: 10 }}>
                                    <Text style={style.name}>Wildan Dhya</Text>
                                    <Text style={style.message}>Haloo there!</Text>
                                </View>
                                <View >
                                    <Text style={style.time}>13.00</Text>
                                    <Badge badgeStyle={style.badgeMessage} containerStyle={style.badgeMessage} value={2} textStyle={style.badgeText} />
                                </View>
                            </View>
                        </View>

                    )}
                    renderHiddenItem={(rowMap) => (
                        <View style={style.rowBack}>
                            <View style={style.rowBackWrapp}>
                                <TouchableOpacity style={{alignItems:'center'}}>
                                    <Chat name="chatbubble" size={30} color='#fff' />
                                    <Text style={style.textRowBack}>Unread</Text>
                                </TouchableOpacity >
                                <TouchableOpacity style={{alignItems:'center'}}>
                                    <Pin name='pushpin' size={30} color="#fff" />
                                    <Text style={style.textRowBack}>Pin</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{alignItems:'center'}}>
                                    <More name='more-horizontal' size={30} color="#fff"/>
                                    <Text style={style.textRowBack}>More</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                    disableRightSwipe
                    rightOpenValue={-250}
                    previewRowKey={"0"}
                    previewOpenValue={-90}
                    previewOpenDelay={3000}
                />
            </View>
        </View>
    )
}

export default Message
const { width, height } = Dimensions.get("screen");
const style = StyleSheet.create({
    container: {
        backgroundColor: Color.backgroundBaseColor,
        height,
        flex: 1
    },
    contentWrapp: {

    },
    headerWrapp: {
        paddingTop: 15,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#fcfcfc',
        width,
        height: "10%",
    },
    rowFront: {
        backgroundColor: "#fff"
    },
    rowBack: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: Color.primaryColor
    },
    rowBackWrapp: {
        width: 250,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    textRowBack: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '400'
    },
    iconCamera: {
        marginHorizontal: 17,
        alignSelf: 'center'
    },
    textTitle: {
        fontSize: 18,
        fontWeight: '400',
        color: '#000',
        flex: 1,
        alignSelf: 'center',
        marginLeft: '30%'
    },
    roomChatWrapp: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#e2e2e2',
        paddingBottom: 10,
        marginTop: 5,
        marginHorizontal: 17,

    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 3,
        borderColor: Color.primaryColor
    },
    name: {
        fontSize: 16,
        fontWeight: '700',
        color: "#000"
    },
    message: {
        fontSize: 14,
        fontWeight: '400',
        color: '#000'
    },
    time: {
        fontSize: 14,
        fontWeight: '400',
        color: '#000'
    },
    badgeMessage: {
        width: 22,
        height: 22,
        backgroundColor: Color.primaryColor,
        borderRadius: 20,
        alignSelf: 'center'
    },
    badgeText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: '400'
    }

})
