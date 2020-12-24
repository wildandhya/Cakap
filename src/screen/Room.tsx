import React from 'react'
import { View, StyleSheet, Dimensions, StatusBar, Text, Image } from 'react-native'
import { Input } from 'react-native-elements'
import Mic from "react-native-vector-icons/FontAwesome"
import Attach from "react-native-vector-icons/Ionicons"
import Arrow from "react-native-vector-icons/MaterialIcons"
import Emoji from "react-native-vector-icons/MaterialCommunityIcons"
import { Color } from '../assets/color'
import Logo from "../assets/icons/pp.jpg"

const Room = () => {
    return (
        <View style={style.container}>
            <StatusBar backgroundColor={Color.backgroundBaseColor} barStyle="dark-content" />
            <View style={{flex:1}}>
                <View style={style.headerRoom}>
                    <Arrow name="keyboard-arrow-left" size={30} color="#000" />
                    <View style={{alignItems:'center'}}>
                        <Text style={style.recieverName}>Wildan Dhya</Text>
                        <Text style={style.lastSeen}>last seen 6 minutes ago</Text>
                    </View>
                    <View>
                        <Image source={Logo} style={style.avatar} />
                    </View>
                </View>
                <View style={style.roomChat}>
                    <View style={style.roomChatContent}>
                        <Text style={style.textMessage}>haloo nadiya</Text>
                        <Text style={style.textTime}>{new Date().getTime()}</Text>
                    </View>
                </View>
            </View>
            <View style={style.roomBar}>
                <Attach name='attach' size={30} color="#808080" />
                <Input
                    placeholder="Message"
                    style={style.textInputStyle}
                    containerStyle={style.containerStyle}
                    inputContainerStyle={style.inputContainerStyle}
                    rightIcon={
                        <Emoji name='emoticon-happy-outline' size={26} color="#808080" />
                    }
                />

                <Mic name='microphone' size={30} color="#808080" />
            </View>
        </View>
    )
}

export default Room


const { height, width } = Dimensions.get("screen")
const style = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        height,
        flex:1
    },
    headerRoom: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        backgroundColor: Color.backgroundBaseColor,
        paddingTop:10
    },
    recieverName: {
        fontSize: 18,
        fontWeight: '400',
        color: '#000'
    },
    lastSeen: {
        fontSize: 12,
        fontWeight: '400',
        color: "#bebebe"
    },
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 25
    },
    roomChat: {
        flex: 1
    },
    roomChatContent:{
        display:'flex',
        flexDirection:'row',
        backgroundColor:Color.primaryColor,
        alignSelf:'flex-start',
        paddingVertical:10,
        paddingHorizontal:10,
        borderRadius:12,
        marginLeft:5,
        marginRight:5,
        marginTop:15
    },
    textMessage:{
        fontSize:18,
        fontWeight:'400',
        color:'#fff',
    },
    textTime:{
        fontSize:14,
        fontWeight:'300',
        color:'#fff',
        alignSelf:'flex-end'
    },
    roomBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    inputContainerStyle: {
        backgroundColor: '#f2f2f2',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
    },
    containerStyle: {
        width: '84%',
        height: '65%'
    },
    textInputStyle: {
        fontSize: 14,
        fontWeight: '400',
        color: "#000",
        paddingLeft: 13
    }
})