import React from 'react';
import { View, ScrollView } from 'react-native';
import BottomNavBar from './src/components/navbar/BottomNavBar';
import './global.css';
import { TailwindProvider } from 'tailwindcss-react-native';
import Header from './src/components/header/Header';
import ShiftSectionHeader from './src/components/sections/ShiftSectionHeader';
import RosteredShiftsToggle from './src/components/sections/ShiftSectionMainRosterToggle';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ShiftCardDetails from './src/screens/ShiftCardDetails'; // Import the details page

// Define your root param list for navigation
type RootStackParamList = {
  Home: undefined;
  ShiftCardDetails: { name: string; startTime: number; duration: number };
};

// Create the stack navigator
const Stack = createStackNavigator<RootStackParamList>();

// Main App component
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ShiftCardDetails" component={ShiftCardDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// HomeScreen component
const HomeScreen = () => {
  return (
    <View className="flex-1">
      {/* Header */}
      <Header userProfileImage={'https://cdn-icons-png.flaticon.com/512/6858/6858504.png'} />

      <ScrollView>
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
};
