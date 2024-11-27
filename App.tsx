import React from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import BottomNavBar from './src/components/card/BottomNavBar';
import './global.css';
import { TailwindProvider } from 'tailwindcss-react-native';
import Header from './src/components/header/Header';

export default function App() {
  return (
    <View className="flex-1 bg-gray-500">
      <SafeAreaView className="flex-1">
        <Header userProfileImage={''} />

        <ScrollView className="p-4">
        </ScrollView>
        
        <TailwindProvider platform="native">
          <BottomNavBar />
        </TailwindProvider>
      </SafeAreaView>
    </View>
  );
}
