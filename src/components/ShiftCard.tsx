import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as AvatarPrimitive from '@rn-primitives/avatar';
import Svg, { Path } from 'react-native-svg';

interface ShiftCardProps {
  status: string;
  duration: string;
  distance: string;
  userName: string;
  date: string;
  time: string;
  location: string;
  profileImage: string;
  notificationCount: number;
}

const ShiftCard: React.FC<ShiftCardProps> = ({
  status,
  duration,
  distance,
  userName,
  date,
  time,
  location,
  profileImage,
  notificationCount,
}) => {
  return (
    <View style={{ backgroundColor: '#FFF7F0', borderRadius: 10, padding: 15, shadowColor: 'black', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 8 }}>
      {/* Shift Header */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FF8A47', padding: 5, borderRadius: 5 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {/* Status and Duration */}
          <View style={{ backgroundColor: 'white', borderRadius: 5, paddingVertical: 3, paddingHorizontal: 10, marginRight: 10, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: '#FF8A47', fontSize: 14, marginRight: 5 }}>{status}</Text>
            <Text style={{ backgroundColor: '#FFECB3', color: '#FF8A47', fontSize: 12, borderRadius: 15, paddingVertical: 3, paddingHorizontal: 8 }}>
              {duration}
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {/* Car Icon */}
          <Svg width="48" height="40" viewBox="0 0 48 48" style={{ marginLeft: 10 }}>
          <Path d="M 6.59375 6 C 5.257813 6 4.023438 6.667969 3.28125 7.78125 L 0.5 11.9375 C 0.171875 12.429688 0 13 0 13.59375 L 0 20.21875 C 0 21.132813 0.613281 21.933594 1.5 22.15625 L 4.09375 22.8125 C 4.46875 24.628906 6.078125 26 8 26 C 9.851563 26 11.398438 24.71875 11.84375 23 L 21.15625 23 C 21.601563 24.71875 23.148438 26 25 26 C 26.851563 26 28.398438 24.71875 28.84375 23 L 30 23 C 31.09375 23 32 22.09375 32 21 L 32 17.34375 C 32 15.511719 30.746094 13.910156 28.96875 13.46875 L 23.5625 12.09375 L 19.65625 7.4375 C 18.894531 6.527344 17.78125 6 16.59375 6 Z M 6.59375 8 L 11 8 L 11 12 L 2.875 12 L 4.9375 8.90625 L 4.9375 8.875 C 5.308594 8.316406 5.921875 8 6.59375 8 Z M 13 8 L 16.59375 8 C 17.1875 8 17.746094 8.261719 18.125 8.71875 L 20.875 12 L 13 12 Z M 2 14 L 22.875 14 L 28.5 15.40625 C 29.394531 15.628906 30 16.421875 30 17.34375 L 30 21 L 28.84375 21 C 28.398438 19.28125 26.851563 18 25 18 C 23.148438 18 21.601563 19.28125 21.15625 21 L 11.84375 21 C 11.398438 19.28125 9.851563 18 8 18 C 6.226563 18 4.738281 19.171875 4.21875 20.78125 L 2 20.21875 Z M 8 20 C 9.117188 20 10 20.882813 10 22 C 10 23.117188 9.117188 24 8 24 C 6.882813 24 6 23.117188 6 22 C 6 20.882813 6.882813 20 8 20 Z M 25 20 C 26.117188 20 27 20.882813 27 22 C 27 23.117188 26.117188 24 25 24 C 23.882813 24 23 23.117188 23 22 C 23 20.882813 23.882813 20 25 20 Z" fill="white" />
          </Svg>
          <Text style={{ color: 'white', fontSize: 14, }}>{distance}</Text>

          {/* New Sun Icon */}
          <Svg x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" style={{ marginLeft: 10 }}>
            <Path d="M 23.976562 3.9785156 A 1.50015 1.50015 0 0 0 22.5 5.5 L 22.5 8.5 A 1.50015 1.50015 0 1 0 25.5 8.5 L 25.5 5.5 A 1.50015 1.50015 0 0 0 23.976562 3.9785156 z M 10.902344 9.4042969 A 1.50015 1.50015 0 0 0 9.8574219 11.980469 L 11.978516 14.101562 A 1.5012202 1.5012202 0 0 0 14.101562 11.978516 L 11.980469 9.8574219 A 1.50015 1.50015 0 0 0 10.902344 9.4042969 z M 37.050781 9.4042969 A 1.50015 1.50015 0 0 0 36.019531 9.8574219 L 33.898438 11.978516 A 1.5012202 1.5012202 0 0 0 36.021484 14.101562 L 38.142578 11.980469 A 1.50015 1.50015 0 0 0 37.050781 9.4042969 z M 24 13 C 17.942632 13 13 17.942636 13 24 C 13 30.057364 17.942632 35 24 35 C 30.057368 35 35 30.057364 35 24 C 35 17.942636 30.057368 13 24 13 z M 24 16 C 28.436049 16 32 19.563954 32 24 C 32 28.436046 28.436049 32 24 32 C 19.563951 32 16 28.436046 16 24 C 16 19.563954 19.563951 16 24 16 z M 5.5 22.5 A 1.50015 1.50015 0 1 0 5.5 25.5 L 8.5 25.5 A 1.50015 1.50015 0 1 0 8.5 22.5 L 5.5 22.5 z M 39.5 22.5 A 1.50015 1.50015 0 1 0 39.5 25.5 L 42.5 25.5 A 1.50015 1.50015 0 1 0 42.5 22.5 L 39.5 22.5 z M 13.009766 33.445312 A 1.50015 1.50015 0 0 0 11.978516 33.898438 L 9.8574219 36.019531 A 1.501221 1.501221 0 1 0 11.980469 38.142578 L 14.101562 36.021484 A 1.50015 1.50015 0 0 0 13.009766 33.445312 z M 34.943359 33.445312 A 1.50015 1.50015 0 0 0 33.898438 36.021484 L 36.019531 38.142578 A 1.5012209 1.5012209 0 1 0 38.142578 36.019531 L 36.021484 33.898438 A 1.50015 1.50015 0 0 0 34.943359 33.445312 z M 23.976562 37.978516 A 1.50015 1.50015 0 0 0 22.5 39.5 L 22.5 42.5 A 1.50015 1.50015 0 1 0 25.5 42.5 L 25.5 39.5 A 1.50015 1.50015 0 0 0 23.976562 37.978516 z" fill="white" />
          </Svg>
        </View>
      </View>

      {/* User Info */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
        <View style={{ position: 'relative' }}>
          <AvatarPrimitive.Root alt={userName + "'s Avatar"} style={{ marginRight: 10 }}>
            <AvatarPrimitive.Image source={{ uri: profileImage }} style={{ width: 40, height: 40, borderRadius: 20 }} />
            <AvatarPrimitive.Fallback>              
              <Text style={{ color: 'white', fontWeight: 'bold' }}>{userName[0]}</Text>
            </AvatarPrimitive.Fallback>
          </AvatarPrimitive.Root>
          
          {notificationCount > 0 && (
            <View
              style={{
                position: 'absolute', 
                top: -2, 
                right: -2, 
                backgroundColor: 'red',
                width: 16, 
                height: 16, 
                borderRadius: 8, 
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
                {notificationCount}
              </Text>
            </View>
          )}
        </View>

        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{userName}</Text>
      </View>

      {/* Shift Details */}
      <View style={{ marginBottom: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ color: '#333', fontSize: 14 }}>📅 {date}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
          <Text style={{ color: '#333', fontSize: 14 }}>⏰ {time}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
          <Text style={{ color: '#333', fontSize: 14 }}>📍 {location}</Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
        <TouchableOpacity style={{ backgroundColor: 'white', borderWidth: 1, borderColor: '#FF8A47', borderRadius: 5, padding: 8 }}>
          <Text style={{ color: '#FF8A47', fontSize: 14 }}>Shift Note</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: 'white', borderWidth: 1, borderColor: '#FF8A47', borderRadius: 5, padding: 8 }}>
          <Text style={{ color: '#FF8A47', fontSize: 14 }}>More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ShiftCard;