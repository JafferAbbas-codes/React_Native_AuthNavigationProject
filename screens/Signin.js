import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ActivityIndicator,
} from 'react-native';
import {globalStyles} from '../styles/global';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Title, Caption, Button, Card} from 'react-native-paper';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import {AuthContext} from '../navigation/AuthProvider.android';
import {
  FacebookSocialButton,
  GoogleSocialButton,
} from 'react-native-social-buttons';
const Signin = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login, googleLogin, fbLogin} = useContext(AuthContext);

  const pressHandler = () => {
    props.navigation.navigate('Signup');
  };

  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  const Auth = async (type) => {
    console.log('type', type);
    if (type === 'google') {
      await googleLogin();
    } else if (type === 'facebook') {
      await fbLogin();
    } else {
      await login(email, password);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/images/bgImage.jpg')}
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
        backgroundColor: '#f9b801',
      }}>
      {/* <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        // onPress={signIn}
        // disabled={this.state.isSigninInProgress}
      /> */}
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View
          style={{
            borderRadius: 30,
            backgroundColor: 'white',
            paddingHorizontal: 27,
            paddingVertical: 45,
          }}>
          <Text style={{marginBottom: 10, fontSize: 20, fontWeight: 'bold'}}>
            Welcome Fashionista!
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: 'lightslategray',
              fontWeight: 'normal',
            }}>
            Sign in to continue
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
                marginVertical: 12,
                paddingVertical: 10,
                backgroundColor: '#f9b801',
                borderRadius: 14,
              }}
              onPress={() => Auth('emailPassword')}>
              Log in
            </Button>
            <Text
              style={{
                marginTop: 5,
                fontSize: 12,
                color: 'lightslategray',
                fontWeight: 'normal',
                textAlign: 'center',
              }}>
              Forgot password?
            </Text>
          </View>
          {Platform.OS === 'android' ? (
            <View style={{alignItems: 'center'}}>
              <GoogleSocialButton onPress={() => Auth('google')} />
              <FacebookSocialButton onPress={() => Auth('facebook')} />
            </View>
          ) : null}
          <Button
            uppercase={false}
            onPress={pressHandler}
            color="black"
            style={{
              marginTop: 30,
              paddingVertical: 10,
              borderWidth: 1,
              borderColor: 'lightgray',
              borderRadius: 14,
            }}>
            Sign up
          </Button>
        </View>

        {/* </ImageBackground> */}
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

export default Signin;
