import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Account from '../screens/account/Account';
import ChangeName from '../screens/account/ChangeName';
import colors from '../styles/colors';
import ChangeEmail from '../screens/account/ChangeEmail';
import ChangeUsername from '../screens/account/ChangeUsername';
import ChangePassword from '../screens/account/ChangePassword';
import Addresses from '../screens/account/Addresses';
import AddAddress from '../screens/account/AddAddress';



const Stack =  createStackNavigator();

export default function AccountStack() {

    return (
    <Stack.Navigator
    screenOptions={{
        headerTintColor: colors.fontLight,
        headerStyle: {backgroundColor: colors.bgDark},
        cardStyle: {
            backgroundColor: colors.bgLight
        }
    }}
    >

        <Stack.Screen
        name="account"
        component={Account}
        options={{title: "Cuenta", headerShown: false}}
        />
        <Stack.Screen 
        name="change-name"
        component={ChangeName}
       options={{
            title: "Cambiar nombre y apellido"
        }}
        />

        <Stack.Screen
        name="change-email"
        component={ChangeEmail}
        options={{
            title: "Cambiar Email"
        }} 
        />

        <Stack.Screen
        name="change-username"
        component={ChangeUsername}
        options={{
            title: "Cambiar Username"
        }} 
        />


        <Stack.Screen
        name="change-password"
        component={ChangePassword}
        options={{
            title: "Cambiar Username"
        }} 
        />


        <Stack.Screen
        name="addresses"
        component={Addresses}
        options={{
            title: "Addresses"
        }} 
        />

        <Stack.Screen
        name="add-address"
        component={AddAddress}
        options={{
          title: "Nueva dirección",
        }}
      />
    </Stack.Navigator>
    )
}
