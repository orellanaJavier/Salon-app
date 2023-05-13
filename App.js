import { Card } from 'react-native-paper';
import { StyleSheet, View,Button,Image ,TextInput,Text,ScrollView} from 'react-native';
import  React from 'react';
import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NailsBar from './screens/NailsBar';
import StylingArea from './screens/StylingArea';
import CabinaArea from './screens/CabinaArea';
import Registro from './navigation/Registro';


const Stack = createNativeStackNavigator();

function HomeScreen({navigation}){
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Image resizeMode='cover' source={require('./assets/homescreen.png')} style = {styleSheet.styleImage9}/>
      <Card style={{top:-100}} ><Button title='Nails Bar'  onPress={()=> navigation.navigate('NailsBar')}>
        </Button></Card>
        <Card><Button title='Styling Area' onPress={()=> navigation.navigate('StylingArea')}>
          </Button></Card>
          <Card style={{top:100}}><Button  title='Cabina Area'  onPress={()=> navigation.navigate('CabinaArea')}>
        </Button></Card>
    </View>
  );
};

function Login({navigation}){
  return(
    <View style={{flex:1,backgroundColor:'rgba(157,228,244,1)'}}>
      <Image resizeMode='cover' source={require('./assets/imagen1.png')} style = {styleSheet.imagen1}/>
      <Text style={styleSheet.text3}>!Bienvenido de nuevo!</Text>
      <Text style={styleSheet.text1}>Email</Text>
      <TextInput style={styleSheet.input1} placeholder='example@gmail.com'/>
      <Text style={styleSheet.text2}>Contraseña</Text>
      <TextInput style={styleSheet.input2} placeholder='21212828'/>
      <Card style={{position:'absolute',left:96,paddingTop:8,paddingRight:19,paddingLeft:18,paddingBottom:8,width:150,top:474,}}>
        <Button title='Ingresar' onPress={()=> navigation.navigate('Home')}/></Card>
    </View>
  );
};

function App() {
  return (
    <NavigationContainer >
    <Stack.Navigator initialRouteName='Registro'>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name='NailsBar' component={NailsBar}/>
    <Stack.Screen name='StylingArea' component={StylingArea}/>
    <Stack.Screen name='CabinaArea' component={CabinaArea}/>
    <Stack.Screen name='Login' component={Login}/>
    <Stack.Screen name='Registro' component={Registro}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styleSheet = StyleSheet.create({
  styleImage9:{
    position:'absolute',
    borderRadius:10,
    width:326,
    height:563,
    alignItems:'center',
  },
  imagen1:{
    position:'absolute',
    width:365,
    height:202,
    borderRadius:10,
  },
  text1:{
    position:'absolute',
    textAlign:'left',
    fontWeight:'400',
    fontSize:14,
    left:18,
    top:267,
    width:43,
  },
  text2:{
    position:'absolute',
    textAlign:'left',
    fontWeight:'400',
    fontSize:14,
    left:18,
    top:385,
    width:75,
  },
  text3:{
    position:'absolute',
    textAlign:'left',
    fontWeight:'700',
    fontSize:14,
    left:18,
    top:225,
    width:225,
  },
  input1:{
    position:'absolute',
    width:285,
    height:48,
    borderRadius:10,
    backgroundColor:'rgba(239,236,236,1)',
    top:294,
    left:18,
  },
  input2:{
    position:'absolute',
    width:285,
    height:48,
    borderRadius:10,
    backgroundColor:'rgba(239,236,236,1)',
    left:18,
    top:412,
  },
});
