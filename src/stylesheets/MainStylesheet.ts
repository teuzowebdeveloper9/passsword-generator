import { StyleSheet } from "react-native";

export const MainStylesheet = StyleSheet.create({
  ViewPassword : {
      justifyContent : 'center',
      alignItems : 'center'
  },
  clearButton : {
     display : 'flex',
     flexDirection: 'row',
     gap : 10,
     width : 160,
     height : 40,
     backgroundColor : 'red',
     borderRadius : 15,
     justifyContent : 'center',
     alignItems : 'center',
     textAlign : 'center',
     color : 'white',
     marginRight : 40,
     marginBottom : 30,
  },
  password : {
    fontSize : 20,
    fontWeight : 'bold',
    color : 'black',
    marginBottom : 40,
    marginLeft : 10,
  },
  viewButton : {
    marginLeft : 30,
    width : 160,
    height: 80,
    display : 'flex',
    justifyContent : 'center',
    alignContent :'center',
    textAlign : 'center',
    padding : 10,
    backgroundColor: '#121212',
    borderRadius : 15,
  },
  text : {
    display : 'flex',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'gray',
    marginBottom: 20,
    alignContent : 'center',
    justifyContent : 'center'
  }
})