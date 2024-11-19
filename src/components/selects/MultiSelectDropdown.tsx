import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal } from 'react-native';

type Item = {
  id: string;
  name: string;
};

type MultiSelectProps = {
  items: Item[];
  onSelectionChange: (selectedItems: Item[]) => void;
};

const MultiSelectDropdown: React.FC<MultiSelectProps> = ({ items, onSelectionChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);

  const toggleDropdown = () => setIsOpen(prev => !prev);

  const handleItemToggle = (item: Item) => {
    const isSelected = selectedItems.some(selectedItem => selectedItem.id === item.id);
    if (isSelected) {
      setSelectedItems(prev => prev.filter(selectedItem => selectedItem.id !== item.id));
    } else {
      setSelectedItems(prev => [...prev, item]);
    }
  };

  const handleRemoveItem = (item: Item) => {
    setSelectedItems(prev => prev.filter(selectedItem => selectedItem.id !== item.id));
  };

  const handleAdd = () => {
    onSelectionChange(selectedItems);
    setIsOpen(false); 
  };

  const renderItem = ({ item }: { item: Item }) => {
    const isSelected = selectedItems.some(selectedItem => selectedItem.id === item.id);
    return (
      <TouchableOpacity onPress={() => handleItemToggle(item)} style={{ padding: 10 }}>
        <Text style={{ fontSize: 16 }}>
          {isSelected ? '☑' : '☐'} {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ width: '80%', marginVertical: 20, backgroundColor: 'white' }}>
      
      <TouchableOpacity
        onPress={toggleDropdown}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 12,
          borderWidth: 1,
          borderColor: 'black',
        }}>
        <Text style={{ fontSize: 16 }}>{selectedItems.length > 0 ? `${selectedItems.length} item(s) selected` : 'Select items'}</Text>
        <Text>{isOpen ? '▲' : '▼'}</Text>
      </TouchableOpacity>

      {isOpen && (
        <Modal
          transparent={true}
          animationType="fade"
          visible={isOpen}
          onRequestClose={() => setIsOpen(false)}>
          <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onPress={toggleDropdown}>
            <View style={{
              backgroundColor: 'white',
              width: '80%',
              padding: 20,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: 'black',
            }}>
              <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
              <TouchableOpacity onPress={toggleDropdown} style={{ marginTop: 10 }}>
                <Text style={{ color: 'black' }}>Close</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
      )}

      <View style={{ borderWidth: 1, borderColor: 'black', marginTop: 20, padding: 12 }}>
        {selectedItems.length > 0 && (
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10 }}>
            {selectedItems.map((item) => (
              <View
                key={item.id}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 8,
                  marginBottom: 8,
                  paddingVertical: 6,
                  paddingHorizontal: 12,
                  borderWidth: 1,
                  borderColor: 'black',
                  borderRadius: 20,
                }}>
                <Text style={{ color: 'skyblue', marginRight: 6 }}>{item.name}</Text>
                <TouchableOpacity onPress={() => handleRemoveItem(item)}>
                  <Text style={{ color: 'red' }}>X</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
        <TouchableOpacity onPress={handleAdd}>
          <Text style={{ color: 'skyblue' }}>+ Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MultiSelectDropdown;
