import  React from 'react';
import { View, Text, Button, StyleSheet,SafeAreaView} from 'react-native';
import { ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import { BlurView } from 'expo-blur';


function CabinaArea() {
  return (
    <SafeAreaView style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'rgba(23, 240, 238, 0.52)'}}>
      <View style={{backgroundColor:'rgba(2, 11, 10, 0.51)'}}>
      <BlurView intensity={90}>
        <View style={{width:300,height:380,borderColor:'black',borderWidth:2,borderRadius:10,padding:10,alignItems:'center'}}>
        <Card style={{top:15}}>
          <Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:10}}>Limpieza Facial</Text>
        </Card>
        <Card style={{top:30}}>
          <Text  style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:10}}>Peeling facial</Text>
        </Card>
        <Card style={{top:45}}>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:10}}>Masajes</Text>
        </Card>
        <Card style={{top:65}}>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:10}}>Depilaciones</Text>
        </Card>
        <Card style={{top:85}}>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,margin:10}}>Maquillajes</Text>
        </Card>
        </View>
    </BlurView>
    </View>
   </SafeAreaView>
  )
}

export default CabinaArea;