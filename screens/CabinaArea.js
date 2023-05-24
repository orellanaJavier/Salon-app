import  React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import { ScrollView } from 'react-native';
import { Card } from 'react-native-paper';


function CabinaArea() {
  return (
    <View>
      <Card><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Cortes de cabello</Text></Card>
      <Card><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Alisados</Text></Card>
      <Card><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Tratamientos</Text></Card>
      <Card><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Planchado</Text></Card>
      <Card><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Pistoleado</Text></Card>
      <Card><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Secado</Text></Card>
      

    </View>
  )
}

export default CabinaArea;

