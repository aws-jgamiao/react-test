import React from 'react';
import { ScrollView, View, Text, Image, Button, StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window'); 
const getCardVariant = (status: string) => {
  if (screenWidth < 400) {
    
    return status === 'Active' ? '1/5' : '1/4'; 
  } else if (screenWidth >= 400 && screenWidth < 800) {
    
    return status === 'Active' ? '1/4' : '1/3';
  } else {
    
    return status === 'Active' ? '1/3' : '1/2';
  }
};

type ShiftCardProps = {
  variant: '1/5' | '1/2' | '1/3' | '1/4';
  profileImage: string;
  userName: string;
  status: string;
  date: string;
  time: string;
  location: string;
};

const ShiftCard: React.FC<ShiftCardProps> = ({
  variant,
  profileImage,
  userName,
  status,
  date,
  time,
  location,
}) => {
  const getStatusStyle = () => {
    if (status === 'Active') {
      return styles.activeStatus;
    } else if (status === 'Upcoming') {
      return styles.upcomingStatus;
    }
    return styles.defaultStatus;
  };

  return (
    <View
      style={[styles.cardContainer, styles[variant]]} 
    >
      {/* Header with Status and other details */}
      <View style={styles.header}>
        <View style={styles.statusContainer}>
          <Text style={[styles.statusText, getStatusStyle()]}>{status}</Text>
        </View>
        <Text style={styles.dateText}>{date}</Text>
      </View>

      {/* Profile and Info */}
      <View style={styles.content}>
        <Image source={{ uri: profileImage }} style={styles.profileImage} />
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.time}>{time}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttons}>
        <Button title="Action 1" onPress={() => {}} />
        <Button title="Action 2" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    margin: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    padding: 10,
    flexDirection: 'column',
  },
  '1/5': {
    width: '16.66%', // 1/6 of the width to fit 6 cards in a row (smaller on small screens)
    marginRight: '2%', // Space between cards
  },
  '1/4': {
    width: '23.5%', // Adjusted to 1/4 width on small devices
    marginRight: '2%', // Space between cards
  },
  '1/3': {
    width: '32%', // Adjusted to one-third of the width
    marginRight: '2%', // Space between cards
  },
  '1/2': {
    width: '48%', // Adjusted to half the width
    marginRight: '2%', // Space between cards
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  statusContainer: {
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
  },
  statusText: {
    fontWeight: 'bold',
  },
  activeStatus: {
    color: '#4CAF50',
  },
  upcomingStatus: {
    color: '#FFC107',
  },
  defaultStatus: {
    color: '#000',
  },
  dateText: {
    color: '#888',
    fontSize: 12,
  },
  content: {
    alignItems: 'center',
    marginVertical: 10,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  time: {
    fontSize: 14,
    color: '#555',
  },
  location: {
    fontSize: 12,
    color: '#777',
  },
  buttons: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ShiftCard;
