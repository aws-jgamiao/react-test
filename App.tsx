import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from 'react-native';
import Checkbox from './src/components/buttons/Checkbox';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.section}>
          {/* Checkbox for "Active" */}
          <Checkbox
            label="Active"
            status="active" // Static active state
            onPress={() => {}}
          />

          {/* Checkbox for "Intermediate" */}
          <Checkbox
            label="Intermediate"
            status="intermediate" // Static intermediate state
            onPress={() => {}}
          />

          {/* Checkbox for "Inactive" */}
          <Checkbox
            label="Inactive"
            status="inactive" // Static inactive state
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
    backgroundColor: '#fff',
  },
  container: {
    padding: 16,
  },
  section: {
    marginTop: 16,
  },
});
