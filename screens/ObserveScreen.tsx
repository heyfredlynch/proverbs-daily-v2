import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from '@rneui/themed';

export default function ObserveScreen() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <Text h3 style={{ textAlign: 'center', marginBottom: 16 }}>
          Observe
        </Text>
        <Text>Observation content goes here.</Text>
      </View>
    </ScrollView>
  );
}

