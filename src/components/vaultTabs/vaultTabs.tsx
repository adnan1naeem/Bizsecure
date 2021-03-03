import React from "react";
import {Text,View,button} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import  {styles}  from './styles'

/** 
 *  PropsInterface of  HomeImage component  
*/

export interface VaultTabs{}

/** 
 *   adds the tabs in vault screen 
*/

export const  VaultTabs =(_props:VaultTabs)=> {
    return (
      <View  style={styles.TabsContainer}>
        <View  style={styles.ButtonStyles}>
          <TouchableOpacity>
            <Text style={styles.buttonColor}>Connection</Text>
          </TouchableOpacity>
          <Text style={styles.border}>|</Text>
          <TouchableOpacity>
            <Text style={styles.buttonColor}>Credentials</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }


