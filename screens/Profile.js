import React,{useContext} from 'react';
import {StyleSheet, View, Text,Button} from 'react-native';
import { AuthContext } from '../navigation/AuthProvider.android';
import {globalStyles} from "../styles/global"

const Profile = () => {
  const {user,logout}= useContext(AuthContext)
  return (
    <View styles={globalStyles.container}>
      <Text>Profile Screen</Text>
    </View>
   

  );
};

export default Profile;
