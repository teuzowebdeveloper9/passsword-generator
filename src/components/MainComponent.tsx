import { useState } from "react";
import { Button, Pressable, Text, View } from "react-native";
import { MainStylesheet } from "../stylesheets/MainStylesheet";
import { FaTrash } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";
import Clipboard from '@react-native-clipboard/clipboard';


export default function MainComponent(){
    const [password,setPassword] = useState("");
 

    const passwordGenerator = () => {
      const lenghth = 20
      const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%"&*()_+';
      let newPassword = ""
      for(let i = 0; i < lenghth; i++){
        const randomIndex = Math.floor(Math.random() * charset.length);
          newPassword += charset[randomIndex];
      }
      setPassword(newPassword)
    }

    const copyToClipBoard = () => {
      Clipboard.setString(password)
    }
  return(
     <view >
         {password ? <View style={MainStylesheet.ViewPassword} > 
             <Text  style={MainStylesheet.password}>{password}  <Pressable onPress={copyToClipBoard}><FaCopy  /></Pressable>  </Text> 
             <Pressable style={MainStylesheet.clearButton} onPress={() => setPassword("")}>
                 limpar senha <FaTrash />
             </Pressable>
         </View>: null
         }
        <Pressable onPress={passwordGenerator}>
          <view style={MainStylesheet.viewButton}>
             <Text style={MainStylesheet.text}>gerar uma senha forte</Text>
          </view>
        </Pressable>
     </view>
  )
}