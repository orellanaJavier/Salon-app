import { Card } from 'react-native-paper';
import { StyleSheet, View,Button,Image ,TextInput,Text,ScrollView} from 'react-native';
import  React from 'react';
import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NailsBar from './screens/NailsBar';
import StylingArea from './screens/StylingArea';
import CabinaArea from './screens/CabinaArea';
import Registro from './navigation/Registro';
import { Analytics } from 'firebase/analytics';
import Agenda from './navigation/Agenda';
import Servicios from './navigation/Servicios';


const Stack = createNativeStackNavigator();

function HomeScreen({navigation}){
  return(
     <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'aqua'}}>
      <Image resizeMode='cover' source={require('./assets/imagen1.png')} style={styleSheet.imagen2}/>
      <Card>
        <Button title='Agenda' onPress={()=> navigation.navigate('Agenda')}/>
      </Card>
      <Card style={{top:50}}>
        <Button title='Servicios' onPress={()=> navigation.navigate('Servicios')}/>
      </Card>
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
    <Stack.Screen name='Registro' component={Registro}/>
    <Stack.Screen name='Agenda' component={Agenda}/>
    <Stack.Screen name='Servicios' component={Servicios}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styleSheet = StyleSheet.create({
  imagen2:{
    position:'absolute',
    width:365,
    height:200,
    borderRadius:10,
    left:5,paddingTop:8,paddingRight:19,paddingLeft:18,paddingBottom:8,top:0,right:5,
  },
  
});
