import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from '@rneui/themed';
import { Icon } from '@rneui/base';

import HomeScreen from './screens/HomeScreen';
import BlitzScreen from './screens/BlitzScreen';
import ObserveScreen from './screens/ObserveScreen';
import PrayScreen from './screens/PrayScreen';
import ChallengeScreen from './screens/ChallengeScreen';
import CalendarScreen from './screens/CalendarScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import SettingsScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Blitz" component={BlitzScreen} />
      <Stack.Screen name="Observe" component={ObserveScreen} />
      <Stack.Screen name="Pray" component={PrayScreen} />
      <Stack.Screen name="Challenge" component={ChallengeScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Today') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Calendar') {
                iconName = focused ? 'calendar' : 'calendar-outline';
              } else if (route.name === 'Favorites') {
                iconName = focused ? 'heart' : 'heart-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings-outline';
              }

              return <Icon name={iconName} type="ionicon" size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Today" component={HomeStack} />
          <Tab.Screen name="Calendar" component={CalendarScreen} />
          <Tab.Screen name="Favorites" component={FavoritesScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

