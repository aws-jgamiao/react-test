import React from 'react';
import { View, Text, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons';

type ShiftDetailsCardProps = {
  profileImage: string;
  name: string;
  shiftDate: string;
  startTime: number;
  endTime: number;
  duration: number;
};

const ShiftDetailsCard = ({
  profileImage,
  name,
  shiftDate,
  startTime,
  endTime,
  duration,
}: ShiftDetailsCardProps) => {
  return (
    <View className="border border-gray-400 rounded-lg p-4 m-4 shadow-lg">
      {/* Shift Status */}
      <View className="flex-row justify-between items-center mb-3">
        <Text className="text-green-500 font-semibold">Active</Text>
        <Text className="text-gray-500">{duration}Hrs</Text>
      </View>

      {/* Profile Image and name Info */}
      <View className="flex-row items-center mb-3">
        <Image
          source={{ uri: profileImage }}
          style={{ width: 40, height: 40, borderRadius: 20 }}
        />
        <Text className="ml-3 text-lg font-semibold">{name}</Text>
      </View>

      {/* Calendar and Time */}
      <View className="flex-row items-center mb-3">
        <FontAwesomeIcon icon={faCalendarAlt} size={20} color="#4A90E2" />
        <Text className="ml-2 text-gray-700">{shiftDate}</Text>
      </View>

      <View className="flex-row items-center">
        <FontAwesomeIcon icon={faClock} size={20} color="#F39C12" />
        <Text className="ml-2 text-gray-700">{startTime}am - {endTime}pm</Text>
      </View>
    </View>
  );
};

export default ShiftDetailsCard;
