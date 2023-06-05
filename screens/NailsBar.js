import React from 'react';
import {View,Text,SafeAreaView} from 'react-native';
import { Card } from 'react-native-paper';
import { ScrollView } from 'react-native';
import { BlurView } from 'expo-blur';

 function NailsBar({navigation}) {
  return(
    <SafeAreaView style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'rgba(23, 240, 238, 0.52)'}}>
      <BlurView intensity={400}>
      <Card style={{top:-95}}><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Uñas acrilicas</Text></Card>
        <Card style={{top:-70}}><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Esmalte</Text></Card>
        <Card style={{top:-40}}><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Manicura</Text></Card>
        <Card style={{top:-25}}><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Pedicure Spa</Text></Card>
        <Card><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Terapia de ozono</Text></Card>
      </BlurView>
    </SafeAreaView>
  );
};

export default NailsBar;


