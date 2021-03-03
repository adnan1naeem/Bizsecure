import React from "react";
import {Text,View} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import  {styles}  from './styles'

/** 
 *  PropsInterface of ChangeMode component  
*/

export interface LabelButtonInterface{}

/** 
 * hides and show the graphs and  chart
 * this needs to be impelemented as it is 3rd screen  
*/

export const ChangeMode =(_props:LabelButtonInterface)=> {
    return (
      <View style={styles.TabsContainer}>
        <View  style={styles.ButtonStyles}>
          <TouchableOpacity>
            <Text style={styles.buttonColor}>hide</Text>
          </TouchableOpacity>
          <Text style={styles.border}>|</Text>
          <TouchableOpacity>
            <Text style={styles.buttonColor}>show</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }


