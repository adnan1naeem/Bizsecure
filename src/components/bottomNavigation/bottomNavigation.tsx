

import React from 'react';
import {View,SafeAreaView} from 'react-native';
import { Shadow} from 'react-native-neomorph-shadows';
import { navigationStyles } from './style';
import  {LabelButton}  from './labelButton'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


/** 
 *  PropsInterface of BottomNavigation component  
*/

export interface BottomNavigationInterface{
  vaultScreen?:boolean,
  navigation:object
}

/** 
 *  adds BottomNavigation for different screen 
*/

export const BottomNavigation = ({vaultScreen,navigation}:BottomNavigationInterface) => {
  const styles=navigationStyles();
  return (
    <SafeAreaView  style={styles.container}>
      <Shadow style={styles.box} >
          <View style={styles.rowSyles}>
            <LabelButton vaultScreen={false} label="Pay" image={require('../../assets/dollar.png')} onPress={()=>null} />
          <View style={styles.buttonStyles}>
            <MaterialCommunityIcons
              name="plus"
              color="white"
              size={30}
              onPress={() => null}
            />
          </View>
          <LabelButton vaultScreen={vaultScreen} label="Vault" image={require('../../assets/wallet.png')} onPress={()=>navigation.navigate('VaultScreen')}/>
         </View>
       </Shadow>
    </SafeAreaView>
   );
 };
