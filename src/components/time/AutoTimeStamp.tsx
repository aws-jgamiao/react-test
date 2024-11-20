import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AutoTimestamp = () => {
  const now = new Date();
  const formattedDate = now.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
  const formattedTime = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 8,
        borderRadius: 8,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View
          style={{
            paddingHorizontal: 8,
            paddingVertical: 4,
            backgroundColor: '#F3F4F6',
            borderRadius: 4,
            marginRight: 4,
          }}
        >
          <Text style={{ color: '#4b5563', fontSize: 14, fontWeight: '500' }}>
            {formattedDate} {/* Displays '01 Jan 2024' */}
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 8,
            paddingVertical: 4,
            backgroundColor: '#F3F4F6',
            borderRadius: 4,
          }}
        >
          <Text style={{ color: '#4b5563', fontSize: 14, fontWeight: '500' }}>
            {formattedTime} {/* Displays '11:00 AM' */}
          </Text>
        </View>
      </View>
      <Ionicons name="calendar-outline" size={20} color="#6b7280" />
    </TouchableOpacity>
  );
};

export default AutoTimestamp;
