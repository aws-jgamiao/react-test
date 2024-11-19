import React from 'react';
import { SafeAreaView } from 'react-native';
import MultiSelectComponent from './src/components/selects/MultiSelectDropdown';

type Item = {
  id: string;
  name: string;
};

const App = () => {
  const items: Item[] = [
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
    { id: '4', name: 'Item 4' },
  ];

  const handleSelectionChange = (selectedItems: Item[]) => {
    console.log('Selected items:', selectedItems);
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <MultiSelectComponent items={items} onSelectionChange={handleSelectionChange} />
    </SafeAreaView>
  );
};

export default App;
