import React from 'react';
import {View} from 'react-native';
import { Neomorph} from 'react-native-neomorph-shadows';
import { navigationStyles } from '../bottomNavigation/style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
 
/** 
 *  PropsInterface of  screen Header component  
*/

export interface HeaderInterface{
  navigation:object,
  leftIcon:string;
  rightIcon:string;
}

/** 
 * Adds a tab in bottom navigation component   
*/

export const Header = ({navigation,leftIcon,rightIcon}:HeaderInterface) => {
  const styles= navigationStyles()
  return (
    <View style={styles.headerStyles}>
        <Neomorph style={styles.neuomorphStyles}>
          <MaterialCommunityIcons
            name={leftIcon}
            color="#2F80ED"
            size={20}
            onPress={() => null}
          />
        </Neomorph>
        <Neomorph style={styles.neuomorphStyles}>
          <MaterialCommunityIcons
            name={rightIcon}
            color="#2F80ED"
            size={20}
            onPress={() => navigation.navigate('Home')}
          />
        </Neomorph>
    </View>
   );
 };