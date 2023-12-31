import React from "react";
import { View,Text,SafeAreaView,StyleSheet } from "react-native"
import { Feather } from '@expo/vector-icons';

const CurrentWeather = ()=> {
return(
  <SafeAreaView  style={styles.wrapper}>
  <View style={styles.container}>
   
    <Feather name="sun" size={100} color="black" />

    <Text style={styles.temp}>6</Text>
    <Text style={styles.feels}>feels like 5</Text>
    <View style={styles.highLowWrapper}>
    <Text style={styles.highLow}>High:8</Text>
  <Text style={styles.highLow}>Low:6</Text>
  </View>
  </View>
<View style={styles.bodyWrapper}>
  <Text style={styles.description}>It's sunny</Text>
  <Text style={styles.message}>It's perfect t-shirt Weather</Text>
</View>

  </SafeAreaView>
)
}
const styles= StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapper:{
    flex: 1,
    backgroundColor: 'pink',

  },
  temp:{
   fontSize: 48,
   color: 'black'
  },
  feels:{
    fontSize: 30,
   color: 'black'
  },
  highLow:{
    fontSize: 20,
   color: 'black'
  },
  highLowWrapper:{
    flexDirection: 'row'
  },
  bodyWrapper:{
    justifyContent: 'flex-end',
    alignItems:'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description:{
    fontSize: 48
  },
  message:{
    fontSize: 30
  }
})
export default CurrentWeather