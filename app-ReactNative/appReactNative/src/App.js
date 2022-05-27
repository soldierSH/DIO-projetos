//eas build -p android gerar apk
import React, {useState,useEffect} from 'react';
import {
    View,
    Image,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    TouchableOpacity,
} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';


function App() {
   const [toggle,setToggle]  = useState(false);
   const handleChangeToggle = ()=> setToggle(oldToggle => !oldToggle);
   useEffect(()=>{
    Torch.switchState(toggle);
   },[toggle]);
   useEffect(()=>{
       //subscription
    const subs = RNShake.addListener(()=>{
        setToggle(oldToggle => !oldToggle);
    });
    return () => subs.remove();
},[]);
    return (
        <SafeAreaView style={toggle ? style.containerLight : style.containerDark}>
            <StatusBar barStyle={'light-content'} />
            <View>
                <TouchableOpacity onPress={handleChangeToggle}>
                <Image style={toggle ? style.lightingOn : style.lightingOff} source={toggle ? require('../assets/icons/eco-light.png') : require('../assets/icons/eco-light-off.png')}/>
            <Image style={style.dio} source={toggle ? require('../assets/icons/logo-dio.png') : require('../assets/icons/logo-dio-white.png')}/>
                </TouchableOpacity>
            
            </View >
           
        </SafeAreaView>
    );
}
export default App;

//folha de estilo do app
const style = StyleSheet.create({
  containerDark: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },
  containerLight: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },
  lightingOn: {
    resizeMode: 'contain',
    alignSelf:'center',
    width:150,
    height:150,
  },
  lightingOff: {
    resizeMode: 'contain',
    alignSelf:'center',
    width:150,
    height:150,
    tintColor:'white',
  },
  dio: {
    resizeMode: 'contain',
    alignSelf:'center',
    width:150,
    height:150,
  },
  content:{
      alignItems:'center',
  }
});
