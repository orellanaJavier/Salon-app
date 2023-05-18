import React from 'react';
import { View, Text,Button,StyleSheet,TextInput,ScrollView,Image,TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { FirebaseAp } from 'firebase/app';
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import {firebaseConfig} from 'firebase-config'; 

function Registro({navigation})  {
  const [email,setEmail] = React.useState('')
  const [password,setPassword] = React.useState('')
  const [name,setName] = React.useState('')

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth,email,password,name)
    .then(() =>{
      console.log('Cuenta Creada')
      const user = userCredential.user;
    })
    .catch(error =>{
      console.log(error)
    })
  }

  const handleSignIn = () =>{
    signInWithEmailAndPassword(auth,email,password,name)
    .then(() =>{
      console.log('Iniciar Con')
      const user = userCredential.user;
      console.log(error)
    })
  }

  return (
    <View style={{flex:1,backgroundColor:'rgba(157,228,244,1)'}}>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Image resizeMode='contain'  source={require('../assets/registro.png')} style={styleSheet.imagen1} />
      <Text style={styleSheet.text3}>Usuario</Text>
      <TextInput style={styleSheet.input3} placeholder='fulano123' value={name} onChangeText={setName}/>
      <Text style={styleSheet.text1}>Email</Text>
      <TextInput style={styleSheet.input1} placeholder='example@gmail.com' keyboardType="email-address"
        value={email}
        onChangeText={setEmail}/>
      <Text style={styleSheet.text2}>Contraseña</Text>
      <TextInput style={styleSheet.input2} placeholder='21212828' secureTextEntry value={password}
        onChangeText={setPassword}/>
      <Card style={{position:'absolute',left:96,paddingTop:8,paddingRight:19,paddingLeft:18,paddingBottom:8,width:150,top:520,}}>
      <Button title='Ingresar' onPress={()=> navigation.navigate('Login')}/></Card>
      <TouchableOpacity onPress={}/>
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
      error: {
        color: 'red',
        marginBottom: 16,
      },
});
