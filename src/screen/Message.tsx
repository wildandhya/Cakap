import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import { Badge } from 'react-native-elements'
import { Color } from "../assets/color"
import Camera from 'react-native-vector-icons/FontAwesome'
import Logo from "../assets/icons/pp.jpg"


const Message = () => {
    return (
        <View style={style.container}>
            <View style={style.contentWrapp}>
                <View style={style.headerWrapp}>
                    <Camera name="camera" size={26} color="#bebebe" />
                    <Text style={style.textTitle}>Message</Text>
                </View>
                <View style={{  marginTop: 30}}>
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

            </View>
        </View>
    )
}

export default Message
const { width, height } = Dimensions.get("screen");
const style = StyleSheet.create({
    container: {
        backgroundColor: Color.backgroundBaseColor,
        height
    },
    contentWrapp: {
        marginHorizontal: 17,
    },
    headerWrapp: {
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row'
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
        marginTop:5

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
