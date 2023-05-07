
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
        <Button title='Nails Bar' style ={{}} onPress={()=> navigation.navigate('NailsBar')}>
        </Button>
        <Button title='Styling Area' style={{}} onPress={()=> navigation.navigate('StylingArea')}>
        </Button>
        <Button title='Cabina Area' style={{}} onPress={()=> navigation.navigate('CabinaArea')}>
        </Button>
    </View>
  );
};

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name='NailsBar' component={NailsBar}/>
    <Stack.Screen name='StylingArea' component={StylingArea}/>
    <Stack.Screen name='CabinaArea' component={CabinaArea}/>
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
