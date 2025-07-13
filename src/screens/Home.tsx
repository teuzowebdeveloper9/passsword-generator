import { StatusBar } from "expo-status-bar";
import { AppStyles } from "../stylesheets/AppStylesheet";
import MainComponent from "../components/MainComponent";
import { Text, View } from "react-native";

export default function Home(){
  return(
    <View >
        <Text style={AppStyles.text} >password generator</Text>
          <StatusBar style="light" />
          <MainComponent />
    </View>
  )
}