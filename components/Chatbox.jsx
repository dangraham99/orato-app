import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Chatbox = (props) => {

    var styles = StyleSheet.create({
        chatBoxAI: {
            backgroundColor: '#d4d4d4',
            borderRadius: 25,
            padding: 10,
            paddingHorizontal: 15,
            marginVertical: 5,
            maxWidth: "70%",
            alignSelf: 'flex-start'


        },

        chatBoxUser: {
            backgroundColor: '#312e81',
            borderRadius: 25,
            padding: 10,
            paddingHorizontal: 15,
            marginVertical: 5,
            maxWidth: "70%",
            alignSelf: 'flex-end'

        }
    })

    return (
        <View style={props.user ? styles.chatBoxContainerUser : styles.chatBoxContainerAI}>
            <View style={props.user ? styles.chatBoxUser : styles.chatBoxAI}>
                <Text style={props.user ? { color: 'white' } : {}}>{props.text}</Text>
            </View>
        </View>
    )
}

export default Chatbox