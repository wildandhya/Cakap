import React, { useState } from 'react'
import { Text, View, StyleSheet, Dimensions, TextInput, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import PhoneNumber from 'react-native-phone-number-input'
import { color } from 'react-native-reanimated'
import { Color } from "../assets/color/index"
import Logo from "../assets/icons/Logo.png"




const WelcomeAuth = () => {
    const [phoneNumberData, setPhoneNumberData] = useState("")

    return (
        <View style={style.container}>
            <View style={style.contentWrapp}>
                <Image source={Logo} />
                <Text style={style.textTitle}>Welcome to WhatsApp</Text>
                <View style={{marginTop:32}}>
                    <PhoneNumber
                    defaultValue={phoneNumberData}
                    defaultCode="ID"
                    onChangeText={(text)=>{
                        setPhoneNumberData(text)
                    }}
                    containerStyle={style.flagContainer}
                    layout="first"
                    textContainerStyle={style.InputContainer}
                    textInputStyle={style.textInputStyle}
                    autoFocus
                    />
                </View>
                <TouchableOpacity style={style.btnSend}>
                    <Text style={style.textSend}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default WelcomeAuth

const { width, height } = Dimensions.get("screen");
const style = StyleSheet.create({
    container: {
        backgroundColor: Color.backgroundBaseColor,
        height
    },
    contentWrapp: {
        marginTop: 130,
        marginHorizontal: 25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textTitle: {
        fontSize: 24, 
        fontWeight: '500', 
        color: "#000",
        marginTop: 43
    },
    flagContainer:{
        backgroundColor:"#f3f3f3",
        height:50
    },
    InputContainer:{
        backgroundColor:"#f3f3f3",
        height:50
    },
    textInputStyle:{
        height:50
    },
    btnSend:{
        backgroundColor:Color.primaryColor,
        marginTop:79,
        borderRadius:20
    },
    textSend:{
        paddingVertical:12,
        paddingHorizontal:95,
        color:'#fff',
        fontSize:14,
        fontWeight:"400",
        lineHeight:21
    }
})
