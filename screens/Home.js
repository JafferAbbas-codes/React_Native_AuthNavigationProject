import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Title, Caption, Button} from 'react-native-paper';

import {AuthContext} from '../navigation/AuthProvider.android';
import {globalStyles} from '../styles/global';

const Home = (props) => {
  const {user, logout} = useContext(AuthContext);

  const pressHandler = () => {
    props.navigation.navigate('About');
  };

  return (
    <View styles={globalStyles.container}>
      <Text>Hello {user.email}, You're logged in</Text>
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
              About Screen
            </Button>
      <Button title="About Screen" onPress={pressHandler} />
    </View>
  );
};

export default Home;
