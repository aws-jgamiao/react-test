import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, FlatList, TextInput, StyleSheet, Animated, Easing } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Calendar Icon

const CustomDatePicker = () => {
  const [date, setDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [selectedDay, setSelectedDay] = useState(date.getDate());
  const [selectedMonth, setSelectedMonth] = useState(date.getMonth());
  const [selectedYear, setSelectedYear] = useState(date.getFullYear());

  // Animation State
  const animationValue = useState(new Animated.Value(0))[0]; // 0 = Normal, 1 = Collapsed

  // Array for months and years
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ];

  const years = Array.from({ length: 100 }, (_, i) => i + 1920); // Years from 1920 to current year

  // Get the days in the selected month
  const getDaysInMonth = (month: number, year: number) => {
    return new Array(new Date(year, month + 1, 0).getDate()).fill(0).map((_, i) => i + 1);
  };

  const days = getDaysInMonth(selectedMonth, selectedYear);

  // Handle day, month, and year selection
  const handleDaySelect = (day: React.SetStateAction<number>) => setSelectedDay(day);
  const handleMonthSelect = (month: React.SetStateAction<number>) => setSelectedMonth(month);
  const handleYearSelect = (year: React.SetStateAction<number>) => setSelectedYear(year);

  // Format date to "DD / MM / YYYY"
  const formattedDate = `${selectedDay < 10 ? '0' + selectedDay : selectedDay} / ${
    selectedMonth + 1 < 10 ? '0' + (selectedMonth + 1) : selectedMonth + 1} / ${
    selectedYear}`;

  // Handle selecting a date
  const handleSelectDate = () => {
    const newDate = new Date(selectedYear, selectedMonth, selectedDay);
    setDate(newDate);
    setShowModal(false);
    // Animate the date back to the text input field
    Animated.timing(animationValue, {
      toValue: 0,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  // Handle canceling the date picker
  const handleCancel = () => {
    setShowModal(false);
    // Animate the date back to the text input field
    Animated.timing(animationValue, {
      toValue: 0,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  // When clicking the calendar icon, animate the date collapsing
  const handleOpenModal = () => {
    setShowModal(true);
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  // Styles for the collapsing and expanding effect
  const dateStyle = {
    transform: [
      {
        scale: animationValue.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 0.6], // Shrink the text when collapsing
        }),
      },
      {
        translateX: animationValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 100], // Move to the top-right corner
        }),
      },
      {
        translateY: animationValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -50], // Move the text upwards
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        {/* Collapsing date input */}
        <Animated.View style={[styles.dateTextContainer, dateStyle]}>
          <Text style={styles.dateText}>{formattedDate}</Text>
        </Animated.View>
        
        {/* Calendar Icon */}
        <TouchableOpacity onPress={handleOpenModal} style={styles.calendarIcon}>
          <Ionicons name="calendar" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Modal for date picker */}
      <Modal
        transparent={true}
        visible={showModal}
        onRequestClose={handleCancel}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.title}>Select a Date</Text>

            {/* Month Picker */}
            <FlatList
              horizontal
              data={months}
              renderItem={({ item, index }) => (
                <TouchableOpacity onPress={() => handleMonthSelect(index)}>
                  <Text style={[styles.month, selectedMonth === index && styles.selected]}>{item}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={styles.listContainer}
            />

            {/* Day Picker */}
            <FlatList
              numColumns={7}
              data={days}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleDaySelect(item)}>
                  <Text style={[styles.day, selectedDay === item && styles.selected]}>{item}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.toString()}
              contentContainerStyle={styles.listContainer}
            />

            {/* Year Picker */}
            <FlatList
              horizontal
              data={years}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleYearSelect(item)}>
                  <Text style={[styles.year, selectedYear === item && styles.selected]}>{item}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.toString()}
              contentContainerStyle={styles.listContainer}
            />

            {/* Confirm and Cancel Buttons */}
            <View style={styles.buttonsContainer}>
              <TouchableOpacity onPress={handleSelectDate} style={styles.confirmButton}>
                <Text style={styles.buttonText}>Select</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleCancel} style={styles.cancelButton}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 18,
    marginRight: 10,
  },
  calendarIcon: {
    padding: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: 300,
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 10,
  },
  listContainer: {
    marginVertical: 10,
  },
  month: {
    fontSize: 18,
    padding: 10,
    textAlign: 'center',
    marginHorizontal: 5,
  },
  day: {
    fontSize: 18,
    padding: 10,
    textAlign: 'center',
    margin: 5,
  },
  year: {
    fontSize: 18,
    padding: 10,
    textAlign: 'center',
    marginHorizontal: 5,
  },
  selected: {
    backgroundColor: '#4CAF50',
    color: 'white',
    borderRadius: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  confirmButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  cancelButton: {
    backgroundColor: '#F44336',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default CustomDatePicker;
