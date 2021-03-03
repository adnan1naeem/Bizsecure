import React from "react";
import {View,Image} from 'react-native';
import {styles}  from './styles'

/** 
 *  PropsInterface of  HomeImage component  
*/

export interface HomeImageInterface{}

/** 
 * Adds a lottieImage in home screen   
*/

export const  HomeImage =(_props:HomeImageInterface)=> {
    return (
      <View style={styles.container}>
        <Image source={require("../../assets/homeImage.gif")} />
      </View>
    );
  }


