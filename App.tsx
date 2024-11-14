import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import ShiftCard from './src/components/card/ShiftCard';

const App = () => {
  const shiftCards = [
    { id: 1, profileImage: 'https://example.com/image1.jpg', userName: 'Donald Duck', status: 'Active', date: '14 October 2024', time: '6am - 9am', location: 'CC - Newcastle Cluster 1' },
    { id: 2, profileImage: 'https://example.com/image2.jpg', userName: 'Mickey Mouse', status: 'Upcoming', date: '15 October 2024', time: '9am - 5pm', location: '5678 Elm Street, Town' },
    { id: 3, profileImage: 'https://example.com/image3.jpg', userName: 'Goofy Goof', status: 'Active', date: '16 October 2024', time: '7am - 4pm', location: 'Walt Disney Studios' },
    { id: 4, profileImage: 'https://example.com/image4.jpg', userName: 'Pluto', status: 'Active', date: '17 October 2024', time: '10am - 6pm', location: 'CC - Downtown' },
    { id: 5, profileImage: 'https://example.com/image5.jpg', userName: 'Daisy Duck', status: 'Active', date: '18 October 2024', time: '8am - 12pm', location: 'Sydney, Australia' },
    { id: 6, profileImage: 'https://example.com/image6.jpg', userName: 'Goofy', status: 'Active', date: '19 October 2024', time: '7am - 4pm', location: 'Paris, France' },
    { id: 7, profileImage: 'https://example.com/image7.jpg', userName: 'Mini Mouse', status: 'Upcoming', date: '20 October 2024', time: '9am - 5pm', location: 'Tokyo Disneyland' },
  ];

  const sortedShiftCards = shiftCards.sort((a, b) => {
    if (a.status === 'Active' && b.status !== 'Active') return -1;
    if (a.status !== 'Active' && b.status === 'Active') return 1;
    return 0;
  });

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.cardContainer}>
        <View style={styles.cardRow}>
          {sortedShiftCards.map((card, index) => {
            let variant = '1/5';
            if (index === 0 || card.status === 'Active') variant = '1/2'; 

            return (
              <ShiftCard
                key={card.id}
                variant={variant as "1/5" | "1/2" | "1/3" | "1/4"}
                profileImage={card.profileImage}
                userName={card.userName}
                status={card.status}
                date={card.date}
                time={card.time}
                location={card.location}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', 
  },
  cardRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', 
  },
});

export default App;
