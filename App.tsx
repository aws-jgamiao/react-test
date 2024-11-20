import React from 'react';
import { ScrollView, SafeAreaView, StatusBar } from 'react-native';
import ShiftCard from './src/components/card/ShiftCard';
import "./global.css"
import TimePicker from './src/components/time/Time';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView className="bg-gray-100 p-4">
        <TimePicker />
      </ScrollView>
    </SafeAreaView>
  );
}
