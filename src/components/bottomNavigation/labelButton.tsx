import React from 'react';
import {Text,View} from 'react-native';
import { Neomorph} from 'react-native-neomorph-shadows';
import { navigationStyles } from './style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

/** 
 *  PropsInterface of LabelButton component  
*/

export interface LabelButtonInterface{
  vaultScreen?:boolean,
  navigation?:object,
  onPress:()=>void;
  label:string;
  icon:string;
}

/** 
 * Adds a tab in bottom navigation component   
*/

export const LabelButton = ({vaultScreen,onPress,label,icon}:LabelButtonInterface) => {
  const  styles=navigationStyles(vaultScreen);

  return (
    <View style={styles.labelColumnStyles}>
        <Neomorph style={styles.neuomorphStyles}>
          <MaterialCommunityIcons
            name={icon}
            color="#16B1FF"
            size={20}
            onPress={onPress }
          />
        </Neomorph>
        <Text style={styles.labelStyles}>{label}</Text>
    </View>
   );
 };
