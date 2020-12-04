import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { Button} from 'react-native-paper';

import {AuthContext} from '../navigation/AuthProvider.android';
import {globalStyles} from '../styles/global';

const About = (props) => {
  const {user, logout} = useContext(AuthContext);

  const pressHandler = () => {
    props.navigation.navigate('Home');
  };

  return (
    <View styles={globalStyles.container}>
      <Text>About Screen</Text>
      <Button
              uppercase={false}
              onPress={pressHandler}
              color="black"
              style={{
                marginVertical:20,
                paddingVertical: 10,
                paddingHorizontal: 40,
                borderWidth: 1,
                borderColor: 'lightgray',
                borderRadius: 14,
              }}>
              Back to home
            </Button>
      <Button title="About Screen" onPress={pressHandler} />
    </View>
  );
};

export default About;
