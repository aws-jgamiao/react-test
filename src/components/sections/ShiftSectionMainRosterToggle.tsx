import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import HorizontalCalendar from '../date/HorizontalCalendar';
import EventCard from '../card/EventCard';
import { useNavigation } from '@react-navigation/native';

const RosteredShiftsToggle = () => {
  const [showCancelled, setShowCancelled] = useState(false);
  const navigation = useNavigation();  // Use useNavigation to get the navigation prop

  const handleToggle = () => {
    setShowCancelled((prev) => !prev);
  };

  const days = [
    { day: 'Mon', date: '26 Sep' },
    { day: 'Tue', date: '27 Sep' },
    { day: 'Wed', date: '28 Sep' },
    { day: 'Thu', date: '29 Sep' },
    { day: 'Fri', date: '30 Sep' },
    { day: 'Sat', date: '1 Oct' },
    { day: 'Sun', date: '2 Oct' },
  ];

  return (
    <View>
      <View className="flex-row justify-between items-center p-5">
        <View className="flex-row items-center">
          <View className="relative">
            <FontAwesomeIcon
              size={25}
              icon={faClock}
              color="#393939"
            />
            <View className="absolute bottom-[-2px] left-[55%] bg-white rounded-full p-0.5 border border-white">
              <FontAwesomeIcon
                size={13}
                icon={faUser}
                color="#393939"
              />
            </View>
          </View>
          <Text className="ml-2 text-[25px] text-[#393939] font-semibold">Rostered Shifts</Text>
        </View>

        <View className="flex-row items-center">
          <Text className="mr-2 text-[12px] text-[#171717]">Show Cancelled</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#3b82f6" }}
            thumbColor={showCancelled ? "#fff" : "#f4f3f4"}
            onValueChange={handleToggle}
            value={showCancelled}
          />
        </View>
      </View>

      <View className="pt-4 pb-4">
        <HorizontalCalendar days={days} />
      </View>
      <View className="pt-4 pb-4">
        {/* Pass the navigation prop to EventCard */}
        <EventCard navigation={navigation} />
      </View>
    </View>
  );
};

export default RosteredShiftsToggle;
