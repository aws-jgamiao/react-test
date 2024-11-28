import React from 'react';
import { View, ScrollView, Text } from 'react-native';

interface Day {
  day: string;
  date: string;
}

interface HorizontalCalendarProps {
  days: Day[];
}

const HorizontalCalendar: React.FC<HorizontalCalendarProps> = ({ days }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row space-x-4 py-2">
      {days.map((day) => (
        <View
          key={day.date}
          className="bg-white rounded-md border border-gray-200 p-3 items-center justify-center"
        >
          <Text className="text-sm font-semibold">{`${day.day} ${day.date}`}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default HorizontalCalendar;
