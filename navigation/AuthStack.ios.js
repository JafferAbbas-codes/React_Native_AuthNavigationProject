import React,{useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Signin from '../screens/Signin';
import Signup from '../screens/Signup';


const Stack = createStackNavigator();


const AuthStack = () => {

return(
    <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
)
}

export default AuthStack;