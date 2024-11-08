import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { styled } from 'tailwindcss-react-native';

const IconButton = styled(TouchableOpacity);

const BottomNavBar: React.FC = () => {
  const [isClockedOn, setIsClockedOn] = useState<boolean>(false);
  const [selectedTab, setSelectedTab] = useState<string>('Home');

  const handleClockToggle = () => {
    setIsClockedOn((prev) => !prev);
  };

  const handleTabPress = (tabName: string) => {
    setSelectedTab(tabName);
  };

  return (
    <View className="flex-row justify-around items-center h-16 bg-white border-t border-gray-200 relative">
      {/* Home Button */}
      <IconButton className="items-center" onPress={() => handleTabPress('Home')}>
        <Feather
          name="home"
          size={24}
          color={selectedTab === 'Home' ? 'blue' : 'gray'}
        />
        <Text className={`text-xs ${selectedTab === 'Home' ? 'text-blue-500' : 'text-gray-500'}`}>
          Home
        </Text>
      </IconButton>

      {/* Shifts Button */}
      <IconButton className="items-center" onPress={() => handleTabPress('Shifts')}>
        <MaterialIcons
          name="people"
          size={24}
          color={selectedTab === 'Shifts' ? 'blue' : 'gray'}
        />
        <Text className={`text-xs ${selectedTab === 'Shifts' ? 'text-blue-500' : 'text-gray-500'}`}>
          Shifts
        </Text>
      </IconButton>

      {/* Center Clock Button */}
        <View className="absolute top-[-24px] z-10">
        <IconButton
            className={`p-4 rounded-full shadow-lg items-center ${isClockedOn ? 'bg-orange-500' : 'bg-green-500'}`}
            onPress={handleClockToggle}
        >
            {/* Change icon color based on clock state */}
            <Feather
            name={isClockedOn ? 'log-out' : 'clock'}
            size={24}
            color={isClockedOn ? 'orange' : 'green'} // Green for clocked in, orange for clocked out
            />
            <Text className="text-xs text-white mt-1">{isClockedOn ? 'Clock off' : 'Clock on'}</Text>
        </IconButton>
        </View>


      {/* Timesheets Button */}
      <IconButton className="items-center" onPress={() => handleTabPress('Timesheets')}>
        <Feather
          name="file-text"
          size={24}
          color={selectedTab === 'Timesheets' ? 'blue' : 'gray'}
        />
        <Text className={`text-xs ${selectedTab === 'Timesheets' ? 'text-blue-500' : 'text-gray-500'}`}>
          Timesheets
        </Text>
      </IconButton>

      {/* More Button */}
      <IconButton className="items-center" onPress={() => handleTabPress('More')}>
        <Feather
          name="more-horizontal"
          size={24}
          color={selectedTab === 'More' ? 'blue' : 'gray'}
        />
        <Text className={`text-xs ${selectedTab === 'More' ? 'text-blue-500' : 'text-gray-500'}`}>
          More
        </Text>
      </IconButton>
    </View>
  );
};

export default BottomNavBar;
