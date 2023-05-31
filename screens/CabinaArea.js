import  React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Card } from 'react-native-paper';


function CabinaArea() {
  return (
    <View style={styleSheet.container}>
      <Card><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Cortes de cabello</Text></Card>
      <Card><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Alisados</Text></Card>
      <Card><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Tratamientos</Text></Card>
      <Card><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Planchado</Text></Card>
      <Card><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Pistoleado</Text></Card>

    </View>
  )
}

export default CabinaArea;

const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  },
})
