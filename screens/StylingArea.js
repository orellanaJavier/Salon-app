import React from 'react';
import { View,StyleSheet, Button,Text,SafeAreaView} from 'react-native';
import { ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import { BlurView } from 'expo-blur';

 function StylingArea  ({navigation}) {

  return (
    <SafeAreaView style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'rgba(125, 219, 237, 0.28)'}}>
      <ScrollView>
        <BlurView intensity={400}>
        <Card style={{top:15}}>
          <Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:10}}>Decoloracion:</Text>
        </Card>
        <Card style={{top:30}}>
          <Text  style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:10}}>Tinturacion:</Text>
        </Card>
      <Card style={{top:45}}>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:10}}>Corte de cabello</Text>
      </Card>
      <Card style={{top:65}}>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:10}}>Alisados</Text>
      </Card>
      <Card style={{top:85}}>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:10}}>Tratamientos</Text>
      </Card>
      <Card style={{top:105}}>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:10}}>Planchado</Text>
      </Card>
      <Card style={{top:125}}>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:10}}>Pistoleado</Text>
      </Card>
      <Card style={{top:145}}>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:10}}>Secado</Text>
      </Card>
      <Card style={{top:165}}>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:10}}>Peinados</Text>
      </Card>
        </BlurView>
    </ScrollView>
    </SafeAreaView>
    
  );
};



export default StylingArea;

const styleSheet = StyleSheet.create({
  buttonn:{
    top:30
  },
});
