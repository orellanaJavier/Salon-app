import { Card } from 'react-native-paper';
import { StyleSheet, View,Button,Image ,} from 'react-native';
import  React from 'react';
import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NailsBar from './screens/NailsBar';
import StylingArea from './screens/StylingArea';
import CabinaArea from './screens/CabinaArea';


const Stack = createNativeStackNavigator();

function HomeScreen({navigation}){
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Image resizeMode='cover' source={require('./assets/homescreen.png')} style = {styleSheet.styleImage9}/>
      <Card><Button title='Nails Bar'  onPress={()=> navigation.navigate('NailsBar')}>
        </Button></Card>
        <Card><Button title='Styling Area' onPress={()=> navigation.navigate('StylingArea')}>
          </Button></Card>
          <Card><Button title='Cabina Area'  onPress={()=> navigation.navigate('CabinaArea')}>
        </Button></Card>
    </View>
  );
};

function Registro({navigation}){
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Card><Button style={{po}} title='Aceptar' onPress={()=> navigation.navigate('Home')}></Button></Card>
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
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styleSheet = StyleSheet.create({
  styleImage9:{
    position:'absolute',
    borderRadius:10,
    width:324,
    height:563,
    flex:1,
    justifyContent:'center',
  },
});
