
import React from 'react';
import  {HomeScreen,VaultScreen}  from './src/screens';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

const App=()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen  options={{ header:()=>null }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{ header:()=>null }} name="VaultScreen" component={VaultScreen} />
      </Stack.Navigator>
    </NavigationContainer>  
  );
}

export default App;
