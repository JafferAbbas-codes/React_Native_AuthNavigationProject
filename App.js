import Signin from './screens/Signin';
import Signup from './screens/Signup';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen'
import React,{useEffect } from 'react';
import Providers from './navigation';
// import io from 'socket.io-client'; 
// const socket = io();

const App = () => {
  useEffect(()=>{
    SplashScreen.hide();
  })
  return <Providers />;
}

export default App;

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerShown: false,
//         }}>
//         <Stack.Screen name="Signin" component={Signin} />
//         <Stack.Screen name="Signup" component={Signup} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
