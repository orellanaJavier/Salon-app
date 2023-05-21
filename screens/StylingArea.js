import React, { useState } from 'react'
import { View,StyleSheet, Button,Text,TouchableOpacity,Modal} from 'react-native';
import { ScrollView } from 'react-native';
import { Card } from 'react-native-paper';

 function StylingArea  () {
const [open, setOpen] = useState(false)

function handleOnPress (){
  setOpen(open);
}

  return (
    <View style = {styleSheet.container}> 
    <ScrollView contentContainerStyle={{
      flex:1,
      width:'100%',
      height:'150%',
      alignItems:'center',
      justifyContent:'center'}}>
        <Card><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,}}>Decoloracion:</Text></Card>
        <Card><Text  style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14, top: 50}}>Tinturacion: </Text></Card>
      <Card><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Cortes de cabello</Text></Card>
      <Card><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Alisados</Text></Card>
      <Card><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Tratamientos</Text></Card>
      <Card><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Planchado</Text></Card>
      <Card><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Pistoleado</Text></Card>
      <Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Secado</Text>
      <Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Peinados</Text>
      <TouchableOpacity onPress={handleOnPress}>
        <Text>Agendar</Text>
      </TouchableOpacity>
      <Modal animationType='slide' transparent={true} visible={open}>
        <View>
          <View>
            
          </View>
        </View>
      </Modal>
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
