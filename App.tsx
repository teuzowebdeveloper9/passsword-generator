import {  View } from 'react-native';
import { AppStyles } from './src/stylesheets/AppStylesheet';
import Home from './src/screens/Home';

export default function App() {
  return (
    <View style={AppStyles.container}>
       <Home />
    </View>
  );
}