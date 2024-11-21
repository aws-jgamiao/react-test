import React from 'react';
import { ScrollView, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import EditableInput from './src/components/inputs/EditableInput';
import VirtualInput from './src/components/inputs/VirtualInput';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.section}>
          <EditableInput label="Input" placeholder="Some string" />
          <VirtualInput
            label="Input - Virtual"
            value="Some string"
            helperText="Locked by default"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  scrollView: {
    padding: 16,
  },
  section: {
    marginBottom: 16,
  },
});
