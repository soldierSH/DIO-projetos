import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    cardContainer:{
        marginTop:10,
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center', 
    },
    card:{
        width:'66%',
        borderColor:'#A9A9A9',
        borderRadius:6,
        borderWidth:2,
        padding:10,
        backgroundColor:'#F8F8F8',
        marginBottom:6
      },
      cardHeader:{
        justifyContent:'center',
      },
      cardContent:{
        marginTop:8
      },
      cardContainerText:{
        color:'#515151',
        marginBottom:4
      }
});

export default styles;