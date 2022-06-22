/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Alert,
  TouchableOpacity
} from 'react-native';
import Card from './components/card/index.js';
import {GitHub} from 'react-native-vector-icons/Feather';
import imagem from '../src/assets/fulano.jpg';
import github from '../src/assets/github.png';
import facebook from '../src/assets/facebook.png';
import instagram from '../src/assets/instagram.png';

const App = () => {
  
  function handleRedeSocial(redeSocial){
    switch (redeSocial) {
      case 'instagram':
        Alert.alert('https://www.instagram.com/');
        break;
      case 'github':
        Alert.alert('https://github.com/');
        break;
      case 'facebook':
        Alert.alert('https://www.facebook.com/');
        break;
      default:
        break;
    }
  }

  return (
    <>
    <SafeAreaView style={styles.page}>
      <View style={styles.containerCabecalho}>
        <Image style={styles.imagem} source={imagem}/>
        <Text style={styles.nomeCabecalho}>Fulano de Tal</Text>
        <Text style={styles.descricaoCabecalho}>Desenvolvedor Mobile</Text>
      </View>
      <View style={styles.redesSociais}>
        <TouchableOpacity onPress={()=>handleRedeSocial('github')}>
          <Image style={styles.iconsRedes} source={github}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>handleRedeSocial('facebook')}>
          <Image name='' style={styles.iconsRedes} source={facebook}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>handleRedeSocial('instagram')}>
          <Image style={styles.iconsRedes} source={instagram}/>
        </TouchableOpacity>
      </View>
      <Card titulo='Experiências Profissionais' children={['VASP','Médico na empresa medicina','LMS Desenvolvimento'].join("\n")}/>
      <Card titulo='Formação Acadêmica' children={['SENAC','IFPA','FATEC'].join("\n")}/>
    </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  page: {
    flex:1,
    marginTop: 32,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#d9d9d9'
  },
  imagem: {
    borderRadius:150,
    width:190,
    height:190
  },
  containerCabecalho: {
    marginTop:20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  nomeCabecalho: {
    marginTop:6,
    fontSize:24,
    fontWeight: 'bold',
  },
  descricaoCabecalho: {
    color:'#939393',
    fontSize:16,
  },redesSociais:{
    marginBottom:10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconsRedes: {
    marginTop: 14,
    margin: 4,
    width: 32,
    height: 32
  },
  
});

export default App;
