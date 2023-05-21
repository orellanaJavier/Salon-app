import React from 'react';
import { View, Text,Button,StyleSheet,TextInput,ScrollView,Image,TouchableOpacity, Alert } from 'react-native';
import { FirebaseAp } from 'firebase/app';
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebaseConfig';
import { useNavigation } from '@react-navigation/native';

function Registro()  {
  const [email,setEmail] = React.useState('')
  const [password,setPassword] = React.useState('')
  const navigation = useNavigation();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth,email,password,)
    .then((userCredential) =>{
      console.log('Cuenta Creada')
      const user = userCredential.user;
      console.log(user)
    })
    .catch(error =>{
      console.log(error)
      Alert.alert(error.message)
    })
  }

  const handleSignIn = () =>{
    signInWithEmailAndPassword(auth,email,password,)
    .then((userCredential) =>{
      console.log('Iniciar En')
      const user = userCredential.user;
      console.log(user)
      navigation.navigate('Home')
    })
    .catch(error =>{
      console.log(error)
    })
  };

  return (
    <View style={{flex:1,backgroundColor:'rgba(157,228,244,1)'}}>
        <Image resizeMode='contain'  source={require('../assets/registro.png')} style={styleSheet.imagen1} />
      <Text style={styleSheet.text1}>Email</Text>
      <TextInput style={styleSheet.input1} placeholder='example@gmail.com' 
        value={email}
        onChangeText={setEmail}/>
      <Text style={styleSheet.text2}>Contraseña</Text>
      <TextInput style={styleSheet.input2} placeholder='21212828' secureTextEntry value={password} onChangeText={setPassword}/>
      <TouchableOpacity onPress={handleCreateAccount} style={{position:'absolute',left:90,width:170,top:450,borderRadius:10}}>
        <Text style={{backgroundColor:'white',textAlign:'center',fontSize:25,fontWeight:'400',borderRadius:10}}>Registrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignIn} style={{position:'absolute',left:120,width:130,top:520,}}>
        <Text style={{backgroundColor:'white',textAlign:'center',fontSize:25,fontWeight:'400',borderRadius:10}}>Iniciar</Text>
      </TouchableOpacity>
    </View>
    
  );
}

export default Registro;

const styleSheet = StyleSheet.create({
      input1:{
        position:'absolute',
        width:285,
        height:48,
        borderRadius:10,
        backgroundColor:'rgba(239,236,236,1)',
        top:235,
        left:18,
      },
      input2:{
        position:'absolute',
        width:285,
        height:48,
        borderRadius:10,
        backgroundColor:'rgba(239,236,236,1)',
        left:18,
        top:360,
      },
      imagen1:{
        position:'absolute',
        width:128,
        height:128,
        borderRadius:10,
        left:120,paddingTop:8,paddingRight:19,paddingLeft:18,paddingBottom:8,top:40,right:5,
      },
      text1:{
        position:'absolute',
        textAlign:'left',
        fontWeight:'400',
        fontSize:17,
        left:18,
        top:210,
        width:43,
      },
      text2:{
        position:'absolute',
        textAlign:'left',
        fontWeight:'400',
        fontSize:17,
        left:18,
        top:330,
        width:90,
      },
      error: {
        color: 'red',
        marginBottom: 16,
      },
});

