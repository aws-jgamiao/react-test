import React, { useState } from 'react';
import { View, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import { styled } from 'tailwindcss-react-native';
import ClockOn from '../icons/ClockOn';
import ClockOff from '../icons/ClockOff';
import Home from '../icons/Home';
import Shifts from '../icons/Shifts';
import TimeSheets from '../icons/TimeSheets';
import More from '../icons/More';

const IconButton = styled(TouchableOpacity);

const BottomNavBar: React.FC = () => {
  const [isClockOn, setIsClockOn] = useState(true);
  const [selectedTab, setSelectedTab] = useState<string>('Home');
  
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 640;

  const handleClockPress = () => {
    setIsClockOn(!isClockOn);
  };

  const handleTabPress = (tabName: string) => {
    setSelectedTab(tabName);
  };

  const indicatorColor = 'blue-500'; // Tailwind color class
  const selectedTextColor = 'text-blue-500'; // Tailwind text color class
  const defaultTextColor = 'text-gray-500'; // Tailwind text color class

  return (
    <View className="flex-row justify-between items-center bg-white border-t border-gray-200 relative px-4 sm:px-10 pt-6 pb-10">
      {!isSmallScreen && (
        <IconButton className="items-center flex-col" onPress={() => handleTabPress('Home')}>
          <View className="items-center mb-2">
            <Home color={selectedTab === 'Home' ? indicatorColor : 'gray-500'} />
          </View>
          <Text
            className={`text-xs mb-3 ${selectedTab === 'Home' ? selectedTextColor : defaultTextColor}`}
          >
            Home
          </Text>
          {selectedTab === 'Home' && !isSmallScreen && (
            <View className="w-2 h-2 rounded-full absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 bg-blue-500" />
          )}
        </IconButton>
      )}

      <IconButton className="items-center flex-col" onPress={() => handleTabPress('Shifts')}>
        <View className="items-center mb-2">
          <Shifts color={selectedTab === 'Shifts' ? indicatorColor : 'gray-500'} />
        </View>
        <Text
          className={`text-xs mb-3 ${selectedTab === 'Shifts' ? selectedTextColor : defaultTextColor}`}
        >
          Shifts
        </Text>
        {!isSmallScreen && selectedTab === 'Shifts' && (
          <View className="w-2 h-2 rounded-full absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 bg-blue-500" />
        )}
      </IconButton>

      <View className="absolute top-[-24px] left-1/2 transform -translate-x-1/2 z-10">
        <TouchableOpacity onPress={handleClockPress}>
          {isClockOn ? <ClockOn /> : <ClockOff />}
        </TouchableOpacity>
      </View>

      {!isSmallScreen && (
        <IconButton className="items-center flex-col" onPress={() => handleTabPress('Timesheets')}>
          <View className="items-center mb-2">
            <TimeSheets color={selectedTab === 'Timesheets' ? indicatorColor : 'gray-500'} />
          </View>
          <Text
            className={`text-xs mb-3 ${selectedTab === 'Timesheets' ? selectedTextColor : defaultTextColor}`}
          >
            Timesheets
          </Text>
          {selectedTab === 'Timesheets' && !isSmallScreen && (
            <View className="w-2 h-2 rounded-full absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 bg-blue-500" />
          )}
        </IconButton>
      )}

      <IconButton className="items-center flex-col" onPress={() => handleTabPress('More')}>
        <View className="items-center mb-2">
          <More color={selectedTab === 'More' ? indicatorColor : 'gray-500'} />
        </View>
        <Text
          className={`text-xs mb-3 ${selectedTab === 'More' ? selectedTextColor : defaultTextColor}`}
        >
          More
        </Text>
        {!isSmallScreen && selectedTab === 'More' && (
          <View className="w-2 h-2 rounded-full absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 bg-blue-500" />
        )}
      </IconButton>
    </View>
  );
};


export default BottomNavBar;
