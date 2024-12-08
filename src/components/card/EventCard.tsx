import React from 'react';
import { View, Text, Button } from 'react-native';

type EventCardProps = {
  navigation: any; // Accept the navigation prop here
};

const EventCard = ({ navigation }: EventCardProps) => {
  const startTime = 6;
  const duration = 4;
  const name = 'Sample Name';

  const cardHeight = duration * 50;
  const cardTopPosition = (startTime - 6) * 50;

  return (
    <View className="bg-white rounded-lg shadow-md p-2 border border-gray-300 mb-2">
      <Text className="font-semibold">{name}</Text>

      <View className="flex-1 justify-end">
        <Button
          title="More"
          onPress={() => {
            // Navigate to ShiftCardDetails screen and pass name data
            navigation.navigate('ShiftCardDetails', {
              name: name,
              startTime: startTime,
              duration: duration,
            });
          }}
        />
      </View>
    </View>
  );
};

export default EventCard;
