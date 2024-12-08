import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from '@rneui/themed';

export default function CalendarScreen() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <Text h3 style={{ textAlign: 'center', marginBottom: 16 }}>
          Calendar
        </Text>
        <Text>Calendar content goes here.</Text>
      </View>
    </ScrollView>
  );
}

