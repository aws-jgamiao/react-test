import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import RadioButton from './src/components/buttons/RadioButton';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.section}>
          {/* Radio button for "Active" - always in active state */}
          <RadioButton
            label="Active"
            status="active" // Always active
            onPress={() => {}}
          />

          {/* Radio button for "Pressed" - always in pressed state */}
          <RadioButton
            label="Pressed"
            status="pressed" // Always pressed
            onPress={() => {}}
          />

          {/* Radio button for "Inactive" - always in inactive state */}
          <RadioButton
            label="Inactive"
            status="inactive"
            onPress={() => {}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    padding: 16,
  },
  section: {
    marginTop: 16,
  },
});
