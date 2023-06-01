import React from 'react';
import { View,StyleSheet, Button,Text,} from 'react-native';
import { ScrollView } from 'react-native';
import { Card } from 'react-native-paper';



 function StylingArea  ({navigation}) {

  return (
    <View style = {styleSheet.container}> 
    <ScrollView contentContainerStyle={{
      flex:1,
      width:'220%',
      height:'220%',
      alignItems:'center',
      justifyContent:'center'}}>
        <Card style={{top:-60}}><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Decoloracion:</Text>
        <Text>precio: $50</Text>
        </Card>
        <Card style={{top:-45}}><Text  style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Tinturacion: </Text></Card>
      <Card style={{top:-30}}><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Corte de cabello</Text></Card>
      <Card style={{top:-20}}><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Alisados</Text></Card>
      <Card style={{top:-9}}><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Tratamientos</Text></Card>
      <Card><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Planchado</Text></Card>
      <Card><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Pistoleado</Text></Card>
      <Card style={{top:15}}><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Secado</Text></Card>
      <Card style={{top:30}}><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Peinados</Text></Card>
      <Card style={{top:45}}>
      <Button title='Agendar Cita' onPress={()=> navigation.navigate('Agenda')}/>
      </Card>
      
    </ScrollView>
      
    </View>
  );
};



export default StylingArea;

const styleSheet = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  },
  buttonn:{
    top:30
  },
});
