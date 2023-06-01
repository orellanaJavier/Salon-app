import React from 'react';
import { View,StyleSheet, Button,Text,} from 'react-native';
import { ScrollView } from 'react-native';
import { Card } from 'react-native-paper';



 function StylingArea  () {

  return (
    <View style = {styleSheet.container}> 
    <ScrollView contentContainerStyle={{
      flex:1,
      width:'100%',
      height:'100%',
      alignItems:'center',
      justifyContent:'center'}}>
        <Card style={{top:-65}}><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Decoloracion:</Text></Card>
        <Card style={{top:-50}}><Text  style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Tinturacion: </Text></Card>
      <Card style = {{top:-35}}><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Cortes de cabello</Text></Card>
      <Card style={{top:-25}}><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Alisados</Text></Card>
      <Card><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Tratamientos</Text></Card>
      <Card><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Planchado</Text></Card>
      <Card><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Pistoleado</Text></Card>
      <Card><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Secado</Text></Card>
      <Card><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Peinados</Text></Card>
    </ScrollView>
      
    </View>
  );
};



export default StylingArea;

const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  },
});
