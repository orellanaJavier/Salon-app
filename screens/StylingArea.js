import React from 'react';
import { View, Button,Text,SafeAreaView} from 'react-native';
import { ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import { BlurView } from 'expo-blur';

 function StylingArea  ({navigation}) {

  return (
     <SafeAreaView style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'rgba(23, 240, 238, 0.52)'}}>
      <View style={{backgroundColor:'rgba(2, 11, 10, 0.51)'}}>
      <BlurView intensity={1000} style={{height:500}}>
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
    </View>
   </SafeAreaView>
 );
};



export default StylingArea;
