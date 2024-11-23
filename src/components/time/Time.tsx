import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const TimePicker = () => {
  const [time, setTime] = useState('01:55:00');
  const [isVisible, setIsVisible] = useState(false);

  const handleConfirm = (date: { toTimeString: () => string; }) => {
    const formattedTime = date.toTimeString().split(' ')[0];
    setTime(formattedTime);
    setIsVisible(false);
  };

  const handleCancel = () => {
    setIsVisible(false);
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 8,
          borderRadius: 8,
          width: 160,
          backgroundColor: 'white',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
        }}
        onPress={() => setIsVisible(true)}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: 8,
            paddingHorizontal: 12,
            paddingVertical: 6,
            backgroundColor: '#F3F4F6',
          }}
        >
          <Text style={{ color: '#4b5563', fontSize: 12, fontWeight: '500' }}>{time}</Text>
        </View>

        <Ionicons name="time-outline" size={20} color="#6b7280" style={{ marginLeft: 8 }} />
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        is24Hour={true}
      />
    </View>
  );
};

export default TimePicker;
