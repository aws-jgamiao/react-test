import React from 'react';
import { View, Image, SafeAreaView, Platform, StyleSheet, useWindowDimensions } from 'react-native';
import Logo from '../icons/Logo';

interface HeaderProps {
  userProfileImage: string;
}

const Header: React.FC<HeaderProps> = ({ userProfileImage }) => {
  const { height, width } = useWindowDimensions(); // Get the current window size
  const isMobile = Platform.OS === 'ios' || Platform.OS === 'android';

  // Safe area height calculation for iPhone with Dynamic Island
  const topSafeAreaPadding = isMobile ? 20 : 0; // Adjust based on safe area

  return (
    // If mobile, use SafeAreaView to handle notches/Dynamic Island
    isMobile ? (
      <SafeAreaView style={[styles.safeAreaContainer, { paddingTop: topSafeAreaPadding }]}>
        <View style={styles.container}>
          {/* Left: App Logo */}
          <Logo />
          
          {/* Right: User Profile */}
          <Image 
            source={{ uri: userProfileImage }} 
            style={styles.profileImage}
            resizeMode="cover"
          />
        </View>
      </SafeAreaView>
    ) : (
      // On Web, we do not need SafeAreaView but still use the container style
      <View style={styles.container}>
        <Logo />
        <Image 
          source={{ uri: userProfileImage }} 
          style={styles.profileImage}
          resizeMode="cover"
        />
      </View>
    )
  );
};

// Styles
const styles = StyleSheet.create({
  // Safe Area Container
  safeAreaContainer: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16, // Horizontal padding for mobile
    backgroundColor: 'transparent', // No background color
    height: 80, // Default header height
    zIndex: 1,
    // No shadow or border
  },
  profileImage: {
    width: 48, // Profile image size
    height: 48,
    borderRadius: 24, // Circular profile picture
  },
});

export default Header;
