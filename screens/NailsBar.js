import React from 'react';
import {View,StyleSheet,Button,Text, ScrollView } from 'react-native';


 function NailsBar() {
  return(
    <View style = {styleSheet.container}>
    <ScrollView contentContainerStyle = {{
      flex:1,
      width:'100%',
      height:'100%',
      alignItems:'center',
      justifyContent:'center'}}>
        <Card><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Uñas acrilicas</Text></Card>
        <Card><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Manicure</Text></Card>
        <Card><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Limado</Text></Card>
      </ScrollView>

  </View>
  )
  
}

export default NailsBar;

const styleSheet = StyleSheet.create({
    container:{
      flex: 1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
    }  
});

