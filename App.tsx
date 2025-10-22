import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import HomeScreen from './screens/HomeScreen';
import { theme } from './styles/theme';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <StatusBar barStyle='dark-content' />
      <HomeScreen />
    </SafeAreaView>
  );
}