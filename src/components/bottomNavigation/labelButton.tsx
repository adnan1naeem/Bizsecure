import React from 'react';
import {TouchableOpacity, Image,Text} from 'react-native';
import { Neomorph} from 'react-native-neomorph-shadows';
import { navigationStyles } from './style';

/** 
 *  PropsInterface of LabelButton component  
*/

export interface LabelButtonInterface{
  vaultScreen?:boolean,
  navigation?:object,
  onPress:()=>void;
  label:string;
  image:string;
}

/** 
 * Adds a tab in bottom navigation component   
*/

export const LabelButton = ({vaultScreen,onPress,label,image}:LabelButtonInterface) => {
  const  styles=navigationStyles(vaultScreen);

  return (
    <TouchableOpacity disabled={vaultScreen}   onPress={onPress} style={styles.labelColumnStyles}>
        <Neomorph style={styles.neuomorphStyles}>
          <Image   style={{width:25,height:20}} source={image}/>
        </Neomorph>
        <Text style={styles.labelStyles}>{label}</Text>
    </TouchableOpacity>
   );
 };
