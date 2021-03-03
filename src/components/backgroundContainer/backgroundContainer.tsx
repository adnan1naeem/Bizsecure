import React from 'react';
import {View} from 'react-native';
import  {styles}  from  './styles';
import  {BottomNavigation} from '../bottomNavigation';

/** 
 *  PropsInterface of BackgroundContainer component  
*/

export interface BackgroundContainerInterface{
  vaultScreen?:boolean,
  children:React.ReactNode
  navigation:object
}

/** 
 *  adds a geneal layout for different screen 
*/

export const BackgroundContainer= ({vaultScreen,children,navigation}:BackgroundContainerInterface) => {
  return (
    <View style={styles.container}>
        {children}
       <BottomNavigation navigation={navigation} vaultScreen={vaultScreen}/>
    </View>
  );
};


