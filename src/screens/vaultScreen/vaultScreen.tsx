import React  from 'react';
import  {
  BackgroundContainer,
  Header,
  VaultTabs,
}  from '../../components'

/** 
 *  PropsInterface of  HomeScreen component  
*/

export interface VaultScreenInterface{
  navigation?:object
}

/** 
 *   VaultScreen screen component
*/

export const VaultScreen=({navigation}:VaultScreenInterface)=> {
  return (
    <BackgroundContainer vaultScreen={true} navigation={navigation}>
      <Header leftIcon='menu' rightIcon='home' navigation={navigation}/>
        <VaultTabs/>
    </BackgroundContainer>
  );
}


