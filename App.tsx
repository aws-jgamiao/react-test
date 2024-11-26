import React from 'react';
import { View, ScrollView, StatusBar } from 'react-native';
import BottomNavBar from './src/components/card/BottomNavBar';
import "./global.css";
import { TailwindProvider } from 'tailwindcss-react-native';

export default function App() {
  return (
    <View className="flex-1 bg-gray-500">
      <ScrollView className="p-4">
      </ScrollView>
      
      {/* Bottom Navigation Bar */}
      <TailwindProvider platform="native">
        <BottomNavBar />
      </TailwindProvider>
    </View>
  );
}
