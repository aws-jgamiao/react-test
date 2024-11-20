import React, { useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import { RichEditor, RichToolbar } from 'react-native-pell-rich-editor';

const RichTextBox = () => {
  const richText = useRef(null);

  return (
    <View style={styles.container}>
      <RichEditor
        ref={richText}
        initialContentHTML="<p>Some string</p>"
        style={styles.richEditor}
      />

      <RichToolbar
        editor={richText}
        actions={['bold', 'italic', 'underline', 'insertOrderedList', 'insertUnorderedList']}
        iconTint="#000"
        selectedIconTint="#2095F2"
        onPressAddImage={() => alert('Add Image Pressed')}
        style={styles.toolbar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    padding: 12,
    backgroundColor: '#f8f8f8',
  },
  richEditor: {
    height: 250,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    color: '#374151',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  toolbar: {
    backgroundColor: '#F1F5F9',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    paddingVertical: 8,
  },
});

export default RichTextBox;
