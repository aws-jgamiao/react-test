import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import ShiftDetailsCard from '../components/card/ShiftDetailsCard';
import AdminNotesCard from '../components/card/AdminNotesCard';
import DashboardCard from '../components/card/DashBoardCard';

// Define the Root Stack Param List
type RootStackParamList = {
  Home: undefined;
  ShiftCardDetails: { name: string; startTime: number; duration: number };
};

// Define the navigation prop for this screen
type ShiftCardDetailsNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ShiftCardDetails'
>;

// Define the route prop for this screen
type ShiftCardDetailsRouteProp = RouteProp<
  RootStackParamList,
  'ShiftCardDetails'
>;

// Define the props for the component
type Props = {
  navigation: ShiftCardDetailsNavigationProp;
  route: ShiftCardDetailsRouteProp;
};

const ShiftCardDetails = ({ route, navigation }: Props) => {
  const { name, startTime, duration } = route.params;

  // Sample data for shift details
  const profileImage =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvZRzCOTmTpG-0zKoHeoNr8J-LeI_ihfZO3Q&sg'; // Example profile image URL
  const shiftDate = 'Thursday, 17 October 2024';
  const endTime = startTime + duration;

  // Set the title dynamically when the screen is loaded
  useEffect(() => {
    navigation.setOptions({
      title: 'Shift Details',
    });
  }, [navigation]);

  return (
    <View className="flex-1">
      <ShiftDetailsCard
        profileImage={profileImage}
        name={name}
        shiftDate={shiftDate}
        startTime={startTime}
        endTime={endTime}
        duration={duration}
      />

      {/* Admin Notes Title with Bottom Border */}
      <Text className="text-lg font-bold pl-4 pb-4 border-b-2 border-gray-300">
        Details
      </Text>

      {/* Admin Notes Card */}
      <AdminNotesCard />
      <DashboardCard />
    </View>
  );
};

export default ShiftCardDetails;
