import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainComponent from './src/components/MainComponent';
import { AppStyles } from './src/stylesheets/AppStylesheet';

export default function App() {
  return (
    <View style={AppStyles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <MainComponent />
    </View>
  );
}

