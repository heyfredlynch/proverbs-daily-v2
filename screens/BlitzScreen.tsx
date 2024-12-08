import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Card, Button } from '@rneui/themed';

export default function BlitzScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Button
          icon={{ name: 'arrow-back', type: 'ionicon', color: 'white' }}
          onPress={() => navigation.goBack()}
          type="clear"
        />
        <Text h4 style={styles.title}>PROVERBS DAILY BLITZ</Text>
        <Button
          icon={{ name: 'ellipsis-vertical', type: 'ionicon', color: 'white' }}
          type="clear"
        />
      </View>
      <Card containerStyle={styles.videoCard}>
        <View style={styles.videoPlaceholder}>
          <Text>YouTube Video Embed</Text>
        </View>
      </Card>
      <Card containerStyle={styles.verseCard}>
        <Card.Title>Today's Verse</Card.Title>
        <Text style={styles.verseText}>
          The heart knows its own bitterness and joy;
          he will not share these with a stranger.
        </Text>
        <Text style={styles.verseReference}>Proverbs 14:10 (WEB)</Text>
      </Card>
      <Card containerStyle={styles.prayerCard}>
        <Card.Title>Morning Prayer</Card.Title>
        <Text style={styles.prayerText}>
          Lord help me develop wisdom through self-observation and Your guidance.
        </Text>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#1E1E1E',
  },
  title: {
    color: 'white',
    textAlign: 'center',
  },
  videoCard: {
    backgroundColor: '#1E1E1E',
    borderWidth: 0,
    padding: 0,
    margin: 16,
  },
  videoPlaceholder: {
    height: 200,
    backgroundColor: '#2C2C2C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  verseCard: {
    backgroundColor: '#1E1E1E',
    borderWidth: 0,
    margin: 16,
  },
  verseText: {
    textAlign: 'center',
    marginBottom: 8,
    color: 'white',
  },
  verseReference: {
    color: 'gray',
    textAlign: 'center',
  },
  prayerCard: {
    backgroundColor: '#1E1E1E',
    borderWidth: 0,
    margin: 16,
  },
  prayerText: {
    textAlign: 'center',
    color: 'white',
  },
});

