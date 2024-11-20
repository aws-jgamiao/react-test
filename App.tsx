import React from 'react';
import { ScrollView, SafeAreaView, View } from 'react-native';
import "./global.css"
import HalfWidthTextBox from './src/components/text-box/InfoBox';
import FullWidthTextBox from './src/components/text-box/InfoBoxFull';
import RichTextBox from './src/components/text-box/RichTextBox';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView className="bg-gray-100 p-4">
        <View className="mb-4">
          <HalfWidthTextBox/>
        </View>
        <View className="mb-4">
          <FullWidthTextBox/>
        </View>
        <View className="mb-4">
          <RichTextBox/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
