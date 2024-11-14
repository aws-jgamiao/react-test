import React from 'react';
import { View, ScrollView, StatusBar } from 'react-native';
import ShiftCard from './src/components/card/ShiftCard';
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
        <ShiftCard
          status="Uncomplete"
          duration="3hrs"
          distance="15km"
          userName="Donald Duck"
          date="14 October 2024"
          time="6am - 9am"
          location="CC - Newcastle Cluster 1 - Standard Care"
          profileImage="https://img.freepik.com/free-vector/cute-duck-cartoon-character-holding-mug-beer_1308-118197.jpg?ga=GA1.1.2133803969.1730878438&semt=ais_hybrid"
          notificationCount={2}
        />
        <ShiftCard
          status="Complete"
          duration="8hrs"
          distance="5km"
          userName="Mickey Mouse"
          date="15 October 2024"
          time="9am - 5pm"
          location="5678 Elm Street, Town"
          profileImage="https://img.freepik.com/premium-photo/mickey-mouse-with-his-arms-raised-air_971166-158674.jpg?ga=GA1.1.2133803969.1730878438&semt=ais_hybrid"
          notificationCount={0}
        />
        <StatusBar />
      </ScrollView>
      
      {/* Bottom Navigation Bar */}
      <TailwindProvider platform="web">
        <BottomNavBar />
      </TailwindProvider>
    </View>
  );
}
