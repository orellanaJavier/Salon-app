import React, { useState } from 'react';
import {View,StyleSheet,Button,Text, ScrollView, Modal } from 'react-native';
import { Card } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-web';


 function NailsBar() {
const [open, setOpen] = useState(false)

function handleOnPress (){
  setOpen(open);
}

  return(
    <View style = {styleSheet.container}>
    <ScrollView contentContainerStyle = {{
      flex:1,
      width:'100%',
      height:'100%',
      alignItems:'center',
      justifyContent:'center'}}>
        <Card><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Uñas acrilicas</Text></Card>
        <Card><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Esmalte</Text></Card>
        <Card><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Manicura</Text></Card>
        <Card><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Pedicure Spa</Text></Card>
        <Card><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Terapia de ozono</Text></Card>
        <TouchableOpacity onPress={handleOnPress}>
          <Text>Agendar</Text>
        </TouchableOpacity>

      </ScrollView>

  </View>
  );
};

export default NailsBar;

const styleSheet = StyleSheet.create({
    container:{
      flex: 1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
    },
});

