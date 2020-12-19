import React, { useState } from 'react'
import { Text, View, StyleSheet, Dimensions, TextInput, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from "react-native-confirmation-code-field"
import { Color } from "../assets/color/index"
import Logo from "../assets/icons/Logo.png"



const CELL_COUNT = 6

const VerificationAuth = () => {
    const [value, setValue] = useState("")
    console.log('value', value)
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT })
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue
    })
    return (
        <View style={style.container}>
            <View style={style.contentWrapp}>
                <Image source={Logo} />
                <Text style={style.textTitle}>Welcome to WhatsApp</Text>
                <Text style={style.title}>Enter SMS Code</Text>
                <View style={{ marginTop: 32 }}>
                    <CodeField
                        ref={ref}
                        {...props}
                        value={value}
                        cellCount={CELL_COUNT}
                        onChangeText={setValue}
                        rootStyle={style.codeFieldRoot}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        renderCell={({ index, symbol, isFocused }) => (
                            <Text key={index} onLayout={getCellOnLayoutHandler(index)}
                                style={[style.cell, isFocused && style.focusCell]}>
                                    {(isFocused? <Cursor/> : null)}
                            </Text>
                        )

                        }
                    />
                </View>
                <TouchableOpacity style={style.btnSend}>
                    <Text style={style.textSend}>Done</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default VerificationAuth

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
    title: {
        textAlign: 'center', 
        fontSize: 14, 
        fontWeight: '400',
        color: "#000",
        marginTop: 30
    },
    codeFieldRoot: {
        marginTop: 20,
        paddingHorizontal: 20,
       
    },
    cell: {
        width: 20,
        height: 20,
        marginHorizontal: 5,
        borderBottomWidth: 1,
        borderColor: '#00000030',
        textAlign: 'center',
        color:'#000',
        fontSize: 16,
    },
    focusCell: {
        borderColor: '#000',
        color:'#000',
        fontSize: 16,
    },
    btnSend: {
        backgroundColor: Color.primaryColor,
        marginTop: 79,
        borderRadius: 20
    },
    textSend: {
        paddingVertical: 12,
        paddingHorizontal: 95,
        color: '#fff',
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 21
    }
})
