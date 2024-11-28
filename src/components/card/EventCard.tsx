import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const EventCard = () => {
  const startTime = 6;
  const duration = 4;
  const event = 'Meeting with Client';

  const cardHeight = duration * 50;
  const cardTopPosition = (startTime - 6) * 50;

  return (
    <View
      className="absolute left-24 bg-white rounded-lg shadow-md p-2 border border-gray-300"
      style={{
        top: cardTopPosition,
        height: cardHeight,
        width: '70%',
      }}
    >
      <Text className="font-semibold">{event}</Text>
    </View>
  );
};

const Schedule = () => {
  const [currentTime, setCurrentTime] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const current = new Date();
      const hours = current.getHours();
      const minutes = current.getMinutes();
      
      setCurrentTime(hours + minutes / 60);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View className="relative p-4 bg-gray-100 h-screen">
      <View className="absolute left-4 top-0">
        {[6, 7, 8, 9, 10, 11, 12].map((time) => (
          <View key={time} className="flex-row justify-between items-center mb-12">
            <Text className="text-sm font-medium bg-white border border-gray-300 rounded-full px-2 py-1">
              {time} AM
            </Text>
          </View>
        ))}
      </View>

      <EventCard />

      {currentTime && (
        <View
          className="absolute left-0 bg-gray-400 w-2"
          style={{
            top: (currentTime - 6) * 50 + 12,
            height: 1,
          }}
        />
      )}
    </View>
  );
};

export default Schedule;
