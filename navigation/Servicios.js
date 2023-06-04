import { Card } from 'react-native-paper';
import { StyleSheet, View,Button,Image} from 'react-native';
import  React from 'react';

function Servicios({navigation}){
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Image resizeMode='cover' source={require('../assets/homescreen.png')} style = {styleSheet.styleImage9}/>
      <Card style={{top:-100}} ><Button title='Nails Bar'  onPress={()=> navigation.navigate('NailsBar')}>
        </Button></Card>
        <Card><Button title='Styling Area' onPress={()=> navigation.navigate('StylingArea')}>
          </Button></Card>
          <Card style={{top:100}}><Button  title='Cabina Area'  onPress={()=> navigation.navigate('CabinaArea')}>
        </Button>
        </Card>
    </View>
    )
}

export default Servicios;

const styleSheet = StyleSheet.create({
    styleImage9:{
        position:'absolute',
        borderRadius:10,
        width:326,
        height:563,
        alignItems:'center',
      },
})