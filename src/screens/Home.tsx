import { StatusBar } from "expo-status-bar";
import { AppStyles } from "../stylesheets/AppStylesheet";
import MainComponent from "../components/MainComponent";
import { Text, View } from "react-native";

export default function Home(){
  return(
    <View >
        <Text style={AppStyles.text} >Open up App.tsx to start working on your app!</Text>
          <StatusBar style="auto" />
          <MainComponent />
    </View>
  )
}