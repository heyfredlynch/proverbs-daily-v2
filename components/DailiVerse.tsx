import React from 'react';
import { View } from 'react-native';
import { Text, Card } from '@rneui/themed';

export default function DailyVerse() {
  return (
    <View>
      <Text h3 style={{ textAlign: 'center', marginBottom: 16 }}>
        Thursday, November 14
      </Text>
      <Card containerStyle={{ backgroundColor: 'rgba(0,0,0,0.6)', padding: 16 }}>
        <Card.Title style={{ color: 'white' }}>Today's Verse</Card.Title>
        <Text style={{ color: 'white', textAlign: 'center', marginBottom: 8 }}>
          The heart knows its own bitterness and joy;
          he will not share these with a stranger.
        </Text>
        <Text style={{ color: 'gray', textAlign: 'center' }}>Proverbs 14:10 (WEB)</Text>
      </Card>
    </View>
  );
}

