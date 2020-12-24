import React from 'react'
import {Image} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { WelcomeAuth, VerificationAuth, Message, Room, HistoryCall, Profile } from '../screen/index'
import { Color } from '../assets/color'

import Chat from "react-native-vector-icons/Ionicons"
import Call from "react-native-vector-icons/Ionicons"
import Setting from "react-native-vector-icons/Ionicons"
import Status from '../assets/icons/Status.png'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName="Profile" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="WelcomeAuth" component={WelcomeAuth} />
            <Stack.Screen name="VerificationAuth" component={VerificationAuth} />
            <Stack.Screen name="Message" component={Message} />
            <Stack.Screen name="Room" component={Room} />
            <Stack.Screen name="HistoryCall" component={HistoryCall} />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>

    )
}

const BottomNavigator = ()=>{
    return(
        <Tab.Navigator
        tabBarOptions={{
            activeTintColor:Color.primaryColor,
            inactiveTintColor:'#c6c6c6',
            style:{height:60, paddingBottom:10, paddingTop:10, backgroundColor:'#fcfcfc'}
        }}
        >
            <Tab.Screen name='Message' component={AuthStack} options={{
                tabBarIcon:({color, size})=>{
                    return <Chat name="chatbubble" size={size} color={color}/>
                }
            }}/>
            <Tab.Screen name='Call' component={HistoryCall} options={{
                tabBarIcon:({color, size})=>{
                    return <Call name="call" size={size} color={color}/>
                }
            }}/>
            <Tab.Screen name='Story' component={AuthStack} options={{
                tabBarIcon:({color, size})=>{
                    return <Image source={Status} style={{tintColor:color}}/>
                }
            }}/>
            <Tab.Screen name='Setting' component={AuthStack} options={{
                tabBarIcon:({color, size})=>{
                    return <Setting name="settings-sharp" size={size} color={color}/>
                }
            }}/>
        </Tab.Navigator>
    )
}

export default BottomNavigator
