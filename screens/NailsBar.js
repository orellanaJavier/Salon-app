import React from 'react';
import {View,StyleSheet,Button,Text, ScrollView } from 'react-native';


 function NailsBar() {
  return(
    <View style = {styleSheet.container}>
    <ScrollView contentContainerStyle = {{
      flex:1,
      width:'100%',
      height:'100%'
    }}></ScrollView>

  </View>
  )
  
}

export default NailsBar;

const styleSheet = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#'


    }  
});

