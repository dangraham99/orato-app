import { View, Text } from 'react-native'
import React from 'react'
import Chatbox from '../components/Chatbox';

const ChatHistory = (props) => {
    return (
        <View>
            {props.messages.map((message, i) => {
                return <Chatbox key={i} user={message.user} text={message.text} />
            })}
        </View>
    )
}

export default ChatHistory