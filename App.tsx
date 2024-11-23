import React from 'react';
import { View, ScrollView, StatusBar } from 'react-native';
import BottomNavBar from './src/components/card/BottomNavBar';
import "./global.css";
import { TailwindProvider } from 'tailwindcss-react-native';
import Header from './src/components/header/Header';

export default function App() {
  return (
    <View className="flex-1 bg-gray-100">
      <Header
        userProfileImage="https://img.freepik.com/free-vector/young-prince-royal-attire_1308-176144.jpg?t=st=1731565082~exp=1731568682~hmac=b054446f05d0eeee24b1e05b08400f45939891ffa8968bbb0142814ddf1ed97d&w=740" // Example profile image
      />
      <ScrollView className="p-4">
      </ScrollView>
      
      {/* Bottom Navigation Bar */}
      <TailwindProvider platform="native">
        <BottomNavBar />
      </TailwindProvider>
    </View>
  );
}
