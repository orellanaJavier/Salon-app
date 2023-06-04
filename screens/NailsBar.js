import React from 'react';
import {View,StyleSheet,Text,SafeAreaView} from 'react-native';
import { Card } from 'react-native-paper';
import { ScrollView } from 'react-native';

 function NailsBar({navigation}) {
  return(
    <SafeAreaView>
      <ScrollView>
        <Card style={{top:-95}}><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Uñas acrilicas</Text></Card>
        <Card style={{top:-70}}><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Esmalte</Text></Card>
        <Card style={{top:-40}}><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Manicura</Text></Card>
        <Card style={{top:-25}}><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Pedicure Spa</Text></Card>
        <Card><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Terapia de ozono</Text></Card>
      </ScrollView>
    </SafeAreaView>
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

