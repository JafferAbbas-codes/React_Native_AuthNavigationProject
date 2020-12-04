import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        login: async (email, password) => {
          try {
            setLoading(true);
            await auth().signInWithEmailAndPassword(email, password);
            setLoading(false);
          } catch (e) {
            setLoading(false);
            console.log(e);
          }
        },
        register: async (email, password) => {
          try {
            setLoading(true);
            await auth().createUserWithEmailAndPassword(email, password);
            setLoading(false);
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
