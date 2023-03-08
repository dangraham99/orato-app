import { View, StyleSheet, Text, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import ChatHistory from '../components/ChatHistory';
import { REACT_APP_OPENAI_API_KEY } from "../secrets";
import { Configuration, OpenAIApi } from 'openai'
import 'react-native-url-polyfill/auto'


const ChatPage = (props) => {

    const configuration = new Configuration({
        apiKey: REACT_APP_OPENAI_API_KEY,
    });


    const openai = new OpenAIApi(configuration);

    var styles = StyleSheet.create({
        container: {
            margin: 20,
            flex: 1,
            height: '100%'
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
            marginVertical: 12,
            padding: 10,
            backgroundColor: '#f8fafc'
        }
    });


    const handleChatSubmit = async () => {

        setMessages([...messages, {
            role: 'user',
            content: userInput
        }])



        setUserInput('')



        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: 'user',
                    content: userInput,
                }
            ],
        }).then((response) => {
            console.log(response)
            return String(response.data.choices[0].message.content).trim()

        })
            .catch((e) => {
                console.log(e)
                return String(e);
            });


        setAiResponse(completion)

    }


    const [messages, setMessages] = useState([
        { role: 'assistant', content: "I'm Orato, your personal language tutor. Let's get started." }
    ])

    const [userInput, setUserInput] = useState('')
    const [aiResponse, setAiResponse] = useState(false)

    useEffect(() => {

        if (aiResponse) {
            setMessages([...messages, {
                role: 'assistant',
                content: aiResponse
            }])
        }

    }, [aiResponse])

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={styles.container} >


                <View style={styles.hero}>
                    <Text style={styles.titleText}>Meet Orato.</Text>
                    <Text style={styles.subtitleText}>A languages tutor powered by AI, built for you.</Text>
                </View>
                <View>
                    <ChatHistory messages={messages} />
                </View>
                <KeyboardAvoidingView keyboardVerticalOffset={82} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <TextInput value={userInput} enablesReturnKeyAutomatically enterKeyHint={'send'} onChangeText={text => setUserInput(text)} onSubmitEditing={() => { handleChatSubmit() }} style={styles.chatInput} />
                </KeyboardAvoidingView>




            </View>

        </TouchableWithoutFeedback>
    )
}

export default ChatPage