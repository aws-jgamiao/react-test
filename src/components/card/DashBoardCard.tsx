import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const DashboardCard = () => {
  return (
    <View>
      {/* Shift Note */}
      <View className="mb-4">
        <View className="flex-row justify-between items-center m-4">
          <View className="flex-row items-center">
            <Text className="text-gray-800 font-semibold">Shift Note</Text>
            <Text className="ml-2 text-gray-600 bg-gray-200 px-2 py-1 rounded-full">0</Text>
          </View>
          <TouchableOpacity>
            <Text className="text-blue-600 font-bold">+</Text>
          </TouchableOpacity>
        </View>
        {/* Separator Line */}
        <View className="h-[1px] bg-gray-300 w-full" />
      </View>

      {/* Area */}
      <View className="flex-row justify-between items-center m-4">
        <Text className="text-gray-800 font-semibold">Area</Text>
        <Text className="text-gray-600">Head Office</Text>
      </View>

      {/* Participants */}
      <View className="flex-row justify-between items-center m-4">
        <View className="flex-row items-center">
          <Text className="text-gray-800 font-semibold">Participants</Text>
          <Text className="ml-2 text-gray-600 bg-gray-200 px-2 py-1 rounded-full">1</Text>
        </View>
        <View className="flex-row items-center">
          <View className="relative">
            <Image
              source={{ uri: 'https://avatar.iran.liara.run/public/5' }}
              className="w-8 h-8 rounded-full"
            />
            <View className="absolute -top-1 -right-1 bg-red-500 w-5 h-5 rounded-full items-center justify-center">
              <Text className="text-white text-xs">2</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Staff */}
      <View className="flex-row justify-between items-center m-4">
        <View className="flex-row items-center">
          <Text className="text-gray-800 font-semibold">Staff</Text>
          <Text className="ml-2 text-gray-600 bg-gray-200 px-2 py-1 rounded-full">1</Text>
        </View>
        <View className="flex-row items-center">
          <Image
            source={{ uri: 'https://avatar.iran.liara.run/public/5' }}
            className="w-8 h-8 rounded-full"
          />
        </View>
      </View>
    </View>
  );
};

export default DashboardCard;
