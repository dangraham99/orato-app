import { View, StyleSheet, Text, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import ChatHistory from '../components/ChatHistory';

const ChatPage = () => {

    var styles = StyleSheet.create({
        container: {
            margin: 20,
            flex: 1
        },

        hero: {
            marginTop: 20,
            marginBottom: 30
        },

        titleText: {
            fontSize: 24,
            fontWeight: '700',
            marginBottom: 8
        },

        subtitleText: {
            fontSize: 18
        },

        chatInput: {
            shadowRadius: 20,
            shadowOpacity: 0.8,
            shadowOffset: {
                height: 20
            },
            shadowColor: '#d4d4d4',
            borderRadius: 25,
            height: 40,
            margin: 12,
            padding: 10,
            backgroundColor: '#f8fafc'
        }
    });


    const handleChatSubmit = () => {
        tempMessagesArr = messages
        tempMessagesArr.push({
            user: true,
            text: userInput
        })

        setMessages(tempMessagesArr)
    }


    const [messages, setMessages] = useState([
        { user: false, text: "I'm Orato, your personal language tutor. Let's get started" }
    ])

    const [userInput, setUserInput] = useState('')


    return (
        <View style={styles.container}>
            <View style={styles.hero}>
                <Text style={styles.titleText}>Meet Orato.</Text>
                <Text style={styles.subtitleText}>A languages tutor powered by AI, built for you.</Text>
            </View>

            <View>
                <ChatHistory messages={messages} />
            </View>

            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <TextInput onChangeText={(text) => setUserInput(text)} onEndEditing={() => { handleChatSubmit() }} style={styles.chatInput} />
            </View>

        </View>
    )
}

export default ChatPage