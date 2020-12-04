import React, {useState,useContext} from 'react';
import {StyleSheet, View, Text, TextInput, ImageBackground,TouchableWithoutFeedback,Keyboard} from 'react-native';
import {globalStyles} from '../styles/global';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Title, Caption, Button} from 'react-native-paper';
import { AuthContext } from '../navigation/AuthProvider.android';

const Signup = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {register} = useContext(AuthContext)

  const pressHandler = () => {
    // props.navigation.goBack();
    props.navigation.navigate('Signin');
  };

  return (
    <ImageBackground
      source={require('../assets/images/bgImage.jpg')}
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
        backgroundColor: 'red',
      }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View
          style={{
            borderRadius: 30,
            backgroundColor: 'white',
            paddingHorizontal: 27,
            paddingVertical: 45,
          }}>
          <Text style={{marginBottom: 10, fontSize: 20, fontWeight: 'bold'}}>
            Create an account
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: 'lightslategray',
              fontWeight: 'normal',
            }}>
            Start your career with us
          </Text>
          <View style={{marginTop: 12}}>
            <View
              style={{
                paddingLeft: 5,
                paddingBottom: 5,
                marginTop: 15,
                marginBottom: 15,
                flexDirection: 'row',
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: 'gray',
              }}>
              <View>
                <Icon2 name="person-outline" size={25} />
              </View>

              <View style={{marginLeft: 15}}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                  }}>
                  NAME
                </Text>
                <TextInput
                  style={{
                    padding: 0,
                    paddingVertical: 0,
                  }}
                  label="NAME"
                  type="text"
                  value={name}
                  placeholder="Youssef Basheer"
                  onChangeText={(text) => setName(text)}
                />
              </View>
            </View>
            <View
              style={{
                paddingLeft: 5,
                paddingBottom: 5,
                marginTop: 15,
                marginBottom: 15,
                flexDirection: 'row',
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: 'gray',
              }}>
              <View>
                <Icon name="email-outline" size={20} />
              </View>

              <View style={{marginLeft: 15}}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                  }}>
                  EMAIL
                </Text>
                <TextInput
                  style={{
                    padding: 0,
                    paddingVertical: 0,
                  }}
                  label="Email"
                  type="email"
                  value={email}
                  placeholder="bsheerwork@gmail.com"
                  onChangeText={(text) => setEmail(text)}
                />
              </View>
            </View>
            <View
              style={{
                paddingLeft: 5,
                paddingBottom: 5,
                marginTop: 15,
                marginBottom: 15,
                flexDirection: 'row',
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: 'gray',
              }}>
              <View>
                <Icon name="lock-outline" size={20} />
              </View>

              <View style={{marginLeft: 15}}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                  }}>
                  PASSWORD
                </Text>
                <TextInput
                  style={{
                    padding: 0,
                    paddingVertical: 0,
                    fontSize: 16,
                  }}
                  label="PASSWORD"
                  value={password}
                  type="password"
                  placeholder="********"
                  autoCompleteType="password"
                  secureTextEntry
                  onChangeText={(text) => setPassword(text)}
                />
              </View>
            </View>
          </View>

          <View>
            <Button
              uppercase={false}
              color="white"
              style={{
                marginTop: 12,
                marginBottom: 40,
                paddingVertical: 10,
                backgroundColor: '#f9b801',
                borderRadius: 14,
              }}
              
              onPress={()=>register(email,password)}
              >
              Sign up
            </Button>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 12,
                color: 'lightslategray',
                fontWeight: 'normal',
                textAlign: 'center',
              }}>
              Already have an account?
            </Text>
            <Button
              uppercase={false}
              onPress={pressHandler}
              color="black"
              style={{
                paddingVertical: 10,
                paddingHorizontal: 40,
                borderWidth: 1,
                borderColor: 'lightgray',
                borderRadius: 14,
              }}>
              Login
            </Button>
          </View>
        </View>
        {/* </ImageBackground> */}
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

export default Signup;
