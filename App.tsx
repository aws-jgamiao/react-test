import React from 'react';
import { View, ScrollView } from 'react-native';
import BottomNavBar from './src/components/navbar/BottomNavBar';
import './global.css';
import { TailwindProvider } from 'tailwindcss-react-native';
import Header from './src/components/header/Header';
import ShiftSectionHeader from './src/components/sections/ShiftSectionHeader';
import RosteredShiftsToggle from './src/components/sections/ShiftSectionMainRosterToggle';

export default function App() {
  return (
    <View className="flex-1">
      {/* Header */}
      <Header userProfileImage={'https://cdn-icons-png.flaticon.com/512/6858/6858504.png'} />

      <ScrollView className="">
        {/* Shift Section Header */}
        <ShiftSectionHeader userName={'Nova'} shiftsCount={3} />

        <View className="bg-[#F9FAFB] border-t border-[#E5E7EB]">
          {/* Rostered Shifts Toggle */}
          <RosteredShiftsToggle />
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <TailwindProvider platform="native">
        <BottomNavBar />
      </TailwindProvider>
    </View>
  );
}
