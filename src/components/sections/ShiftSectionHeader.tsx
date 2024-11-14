// src/components/ShiftSectionHeader.tsx

import React from 'react';
import { Text, View } from 'react-native';

interface ShiftSectionHeaderProps {
  userName: string;
  shiftsCount: number;
}

const ShiftSectionHeader: React.FC<ShiftSectionHeaderProps> = ({ userName, shiftsCount }) => {

  return (
    <View className="p-4 bg-blue-100 border-b border-gray-300">
      <Text className="text-xl font-semibold text-gray-800">
        Good morning, {userName}
      </Text>
      <Text className="text-lg text-gray-600">
        You have {shiftsCount} shift{shiftsCount > 1 ? 's' : ''} today ({}).
      </Text>
    </View>
  );
};

export default ShiftSectionHeader;
