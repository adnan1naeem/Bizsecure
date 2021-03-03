import React  from 'react';
import  {
  HomeImage, 
  BackgroundContainer,
  Header
}  from '../../components'

/** 
 *  PropsInterface of  HomeScreen component  
*/

export interface HomeScreenInterface{
  navigation?:object
}

/** 
 *   Home screen component
*/

export const HomeScreen=({navigation}:HomeScreenInterface)=> {

  return (
    <BackgroundContainer navigation={navigation}>
      <Header navigation={navigation}  leftIcon='menu' rightIcon='bell-outline'/>
      <HomeImage/>
    </BackgroundContainer>
  );
}


