import { StatusBar } from 'expo-status-bar';
import { getResponse } from './helpers/openai-api';
import { SafeAreaView, StyleSheet } from 'react-native';
import ChatPage from './pages/ChatPage';
import React, { useState } from 'react';

export default function App() {




  var styles = StyleSheet.create({

    app: {
      backgroundColor: '#f5f5f5',
      height: '100%'
    },

  })




  return (
    <SafeAreaView style={styles.app}>
      <ChatPage />
      <StatusBar style="auto" />
    </SafeAreaView >
  );




}



