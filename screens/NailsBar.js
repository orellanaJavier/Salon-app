import React from 'react';
import {View,Text,SafeAreaView} from 'react-native';
import { Card } from 'react-native-paper';
import { ScrollView } from 'react-native';
import { BlurView } from 'expo-blur';

 function NailsBar({navigation}) {
  return(
    <SafeAreaView style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'rgba(23, 240, 238, 0.52)'}}>
      <View style={{backgroundColor:'rgba(2, 11, 10, 0.51)'}}>
      <BlurView intensity={90}>
        <View style={{width:300,height:400,borderColor:'black',borderWidth:2,borderRadius:10,padding:10,alignItems:'center'}}>
        <Card style={{top:30}}><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Uñas acrilicas</Text></Card>
        <Card style={{top:50}}><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Esmalte</Text></Card>
        <Card style={{top:85}}><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Manicura</Text></Card>
        <Card style={{top:120}}><Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Pedicure Spa</Text></Card>
        <Card style={{top:150}}>
          <Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:14}}>Terapia de ozono</Text></Card>
        </View>
      </BlurView>
      </View>
    </SafeAreaView>
  );
};

export default NailsBar;


