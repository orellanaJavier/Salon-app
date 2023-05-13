import React from 'react';
import { View, Text,Button,StyleSheet,TextInput,ScrollView,Image } from 'react-native';
import { Card } from 'react-native-paper';



function Registro({navigation})  {
  return (
    <View style={{flex:1,backgroundColor:'rgba(157,228,244,1)'}}>
      <Image resizeMode='contain'  source={require('../assets/registro.png')} style={styleSheet.imagen1} />
      <Text style={styleSheet.text3}>Usuario</Text>
      <TextInput style={styleSheet.input3} placeholder='fulano123'/>
      <Text style={styleSheet.text1}>Email</Text>
      <TextInput style={styleSheet.input1} placeholder='example@gmail.com'/>
      <Text style={styleSheet.text2}>Contraseña</Text>
      <TextInput style={styleSheet.input2} placeholder='21212828'/>
      <Card style={{position:'absolute',left:96,paddingTop:8,paddingRight:19,paddingLeft:18,paddingBottom:8,width:150,top:520,}}>
      <Button title='Ingresar' onPress={()=> navigation.navigate('Login')}/></Card>
    </View>
    
  );
}

export default Registro;

const styleSheet = StyleSheet.create({
    input3:{
        position:'absolute',
        width:285,
        height:48,
        borderRadius:10,
        backgroundColor:'rgba(239,236,236,1)',
        top:260,
        left:18,
      },
      input1:{
        position:'absolute',
        width:285,
        height:48,
        borderRadius:10,
        backgroundColor:'rgba(239,236,236,1)',
        top:360,
        left:18,
      },
      input2:{
        position:'absolute',
        width:285,
        height:48,
        borderRadius:10,
        backgroundColor:'rgba(239,236,236,1)',
        left:18,
        top:450,
      },
      imagen1:{
        position:'absolute',
        width:128,
        height:128,
        borderRadius:10,
        left:120,paddingTop:8,paddingRight:19,paddingLeft:18,paddingBottom:8,top:60,right:5,
      },
      text1:{
        position:'absolute',
        textAlign:'left',
        fontWeight:'400',
        fontSize:14,
        left:18,
        top:335,
        width:43,
      },
      text2:{
        position:'absolute',
        textAlign:'left',
        fontWeight:'400',
        fontSize:14,
        left:18,
        top:420,
        width:75,
      },
      text3:{
        position:'absolute',
        textAlign:'left',
        fontWeight:'400',
        fontSize:14,
        left:18,
        top:235,
        width:75,
      },
});
