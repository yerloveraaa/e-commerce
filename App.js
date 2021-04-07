
import React, {useMemo, useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, } from 'react-native';
import jwtDecode from 'jwt-decode'

import {  Provider as PaperProvider } from 'react-native-paper';
import { setTokenApi,  getTokenApi, removeTokenApi } from './src/api/token';
import AuthContext from './src/context/AuthContext';

import  AuthScreen from './src/screens/Auth'
import AppNavigation from './src/navigation/AppNavigation';



export default function App() {
const [auth, setAuth] = useState(undefined)

  useEffect(() => {
   (async() => {
     const token = await getTokenApi();

     if(token){
       console.log('estoy logueado')
      // console.log(token)
      console.log(jwtDecode(token).id);
      setAuth({
        token,
        idUser: jwtDecode(token).id,
      });
     }else{
       setAuth(null)
     }

   }) ();
  }, [])

const login = (user) => {
  console.log('LOGIN APP.JS')
  setTokenApi(user.jwt);
  setAuth({
    token: user.jwt,
    idUser: user.user._id,
  })
}

  const logout = () => {
    if(auth){
      removeTokenApi();
      setAuth(null);
    }
  }

 const authData =  useMemo(() => ({
    auth,
    login,
    logout,
  }), [auth]);

  if(auth === undefined) return null;
  return (
    <AuthContext.Provider value={authData}>
    <PaperProvider>
      { auth ? <AppNavigation />: <AuthScreen />}
    </PaperProvider>
    </AuthContext.Provider>
  );
}



const styles = StyleSheet.create({});
