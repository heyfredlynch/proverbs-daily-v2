import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from '@rneui/themed';

export default function ChallengeScreen() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <Text h3 style={{ textAlign: 'center', marginBottom: 16 }}>
          Challenge
        </Text>
        <Text>Challenge content goes here.</Text>
      </View>
    </ScrollView>
  );
}
