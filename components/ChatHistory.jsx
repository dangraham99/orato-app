import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Chatbox from '../components/Chatbox';

const ChatHistory = (props) => {
    return (

        <View style={{ flex: 1 }}>
            {props.messages.map((message, i) => {


                return <Chatbox key={i} user={message.role == 'user'} text={message.content} />


            })}
        </View>

    )
}

export default ChatHistory