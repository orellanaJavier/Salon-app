import React from 'react'
import { View,StyleSheet, Button,Text} from 'react-native';
import { ScrollView } from 'react-native';
import { BlurView } from 'expo-blur';
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
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Decoloracion:</Text> 
        <Card><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Tinturacion:
        servicio que se trata de cambiar el tono del cabello</Text></Card>
      <Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Cortes de cabello</Text>
      <Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Alisados</Text>
      <Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Tratamientos</Text>
      <Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Planchado</Text>
      <Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Pistoleado</Text>
      <Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Secado</Text>
      <Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Peinados</Text>
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
})
