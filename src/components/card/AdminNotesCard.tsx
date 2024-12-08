import React from 'react';
import { View, Text } from 'react-native';

// AdminNotesCard Component
const AdminNotesCard = () => {
  return (
    <View className="m-4">

      {/* Title */}
      <Text className="text-lg font-bold mb-2">Admin Notes</Text>

      {/* Rectangle for the Lorem Ipsum Text */}
      <View className="border-2 border-gray-300 rounded-lg p-4">
        <Text className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum interdum ipsum, a blandit risus condimentum at. Curabitur tincidunt est ut velit volutpat, ac lobortis neque facilisis. Mauris a condimentum felis, id auctor dui. Sed tincidunt purus non libero aliquet, vitae scelerisque augue pretium. Integer nec tortor nec turpis hendrerit varius.
        </Text>
      </View>
    </View>
  );
};

export default AdminNotesCard;
