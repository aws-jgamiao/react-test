import React from 'react';
import { View, Image, SafeAreaView, Platform } from 'react-native';
import Logo from '../icons/Logo';

interface HeaderProps {
  userProfileImage: string;
}

const Header: React.FC<HeaderProps> = ({ userProfileImage }) => {
  const isMobile = Platform.OS === 'ios' || Platform.OS === 'android';

  return (
    isMobile ? (
      <SafeAreaView className="flex-1">
        <View className="flex-row justify-between items-center px-4 h-20 z-10">
          <Logo />
          <Image 
            source={{ uri: userProfileImage }} 
            className="w-12 h-12 rounded-full"
            resizeMode="cover"
          />
        </View>
      </SafeAreaView>
    ) : (
      <View className="flex-row justify-between items-center px-4 h-20 z-10">
        <Logo />
        <Image 
          source={{ uri: userProfileImage }} 
          className="w-12 h-12 rounded-full"
          resizeMode="cover"
        />
      </View>
    )
  );
};

export default Header;
