import React from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import BottomNavBar from './src/components/card/BottomNavBar';
import './global.css';
import { TailwindProvider } from 'tailwindcss-react-native';
import Header from './src/components/header/Header';
import ShiftSectionHeader from './src/components/sections/ShiftSectionHeader';

export default function App() {
  return (
    <View className="flex-1 bg-gray-500">
        <Header userProfileImage={'https://cdn-icons-png.flaticon.com/512/6858/6858504.png'} />

        <ScrollView className="">
          <ShiftSectionHeader userName={'Nova'} shiftsCount={3}/>
        </ScrollView>
        
        <TailwindProvider platform="native">
          <BottomNavBar />
        </TailwindProvider>
    </View>
  );
}