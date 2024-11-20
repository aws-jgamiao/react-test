import React from 'react';
import { ScrollView, SafeAreaView, View } from 'react-native';
import "./global.css";
import AutoTimestamp from './src/components/time/AutoTimeStamp';
import TimePicker from './src/components/time/Time';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView className="bg-gray-100 p-4">
        <View>
          <TimePicker />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
