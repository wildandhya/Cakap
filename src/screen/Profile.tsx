import React from 'react'
import { Text, View, StyleSheet, Dimensions, ImageBackground, FlatList } from 'react-native'
import { Color } from '../assets/color'
import Logo from "../assets/icons/pp.jpg"
import Call from "react-native-vector-icons/Ionicons"
import Video from 'react-native-vector-icons/FontAwesome'
import Chat from "react-native-vector-icons/Ionicons"
import Arrow from "react-native-vector-icons/MaterialIcons"
import { ListItem } from 'react-native-elements'


const Profile = () => {


    const list = [
        {
            title: 'Media, Links, and Docs',
        },
        {
            title: 'Starred Messages',
        },
        {
            title: 'Chat Search',
        },
        {
            title: 'Mute',
        },

    ]

    return (
        <View style={style.container}>
            <View style={{ position: 'relative' }}>
                <ImageBackground source={Logo} style={style.image} />
            </View>
            <View style={{ position: 'absolute' }}>
                <Arrow name="keyboard-arrow-left" size={40} color="#000" style={style.arrowBack} />
            </View>
            <View style={style.bar}>
                <View style={{ marginLeft: 10, alignItems: 'center' }}>
                    <Text style={{ fontSize: 17, color: "#000", fontWeight: 'bold' }}>Wildan Dhya</Text>
                    <Text style={{ fontSize: 14, color: "#808080", fontWeight: '400' }}>08965142576</Text>
                </View>
                <View style={{ flexDirection: 'row', marginRight: 10 }}>
                    <View style={style.icon}>
                        <Chat name="chatbubble" size={23} color='#fff' />
                    </View>
                    <View style={style.icon}>
                        <Video name="video-camera" size={23} color="#fff" />
                    </View>
                    <View style={style.icon}>
                        <Call name="call" size={23} color="#fff" />
                    </View>

                </View>
            </View>
            <View style={style.statusBar}>
                <Text style={{ fontSize: 17, color: "#000", fontWeight: 'bold' }}>Status</Text>
                <Text style={{ fontSize: 14, color: "#808080", fontWeight: '400' }}>ahahalksdhgdlfhgfad</Text>
            </View>
            <View>
                <FlatList
                    data={list}
                    renderItem={(item) => (
                        <ListItem>
                            <ListItem.Content>
                                <ListItem.Title>{item.item.title}</ListItem.Title>
                                <ListItem.Title></ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron></ListItem.Chevron>
                        </ListItem>
                    )}
                />
            </View>

        </View>
    )
}

export default Profile
const { width, height } = Dimensions.get("screen");
const style = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        height,
        flex: 1
    },
    image: {
        width,
        height: "75%",
    },
    arrowBack: {
        marginTop: 20,
        marginLeft: 10
    },
    icon: {
        backgroundColor: Color.primaryColor,
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5
    },
    bar: {
        position: 'absolute',
        flexDirection: 'row',
        top: "38%",
        left: 0,
        right: 0,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        height: '11%',
        marginHorizontal: 10,
        borderRadius: 5
    },
    statusBar: {
        position: 'absolute',
        top: "50%",
        left: 0,
        right: 0,
        backgroundColor: '#f2f2f2',
        height: '11%',
        marginHorizontal: 10,
        borderRadius: 5,
        paddingLeft: 10,
        justifyContent: 'center'
    }
})

