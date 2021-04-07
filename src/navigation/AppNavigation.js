import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

import colors from '../styles/colors'


import Home from '../screens/Home';
import Favorites from '../screens/Favorites';
import Cart from '../screens/Cart';
// import Account from '../screens/Account';
import AccountStack from './AccountStack';




const Tab = createMaterialBottomTabNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                barStyle={styles.navigation}
                screenOptions={({ route }) => ({
                    tabBarIcon: (routeStatus) => {
                        return setIcon(route, routeStatus)
                    },
                })}
            >
                <Tab.Screen name="Home"
                    component={Home}
                    options={{
                        title: 'Home'
                    }}
                />
                <Tab.Screen 
                    name="favorites"
                    component={Favorites}
                    options={{
                        title: 'Favorites'
                    }}
                />

                <Tab.Screen name="Cart"
                    component={Cart}
                    options={{
                        title: 'Carrito'
                    }}
                />

                <Tab.Screen name="Account"
                    component={AccountStack}
                    options={{
                        title: 'cuenta'
                    }}
                />

            </Tab.Navigator>
        </NavigationContainer>
    );
}

const setIcon = (route, routeStatus) => {
    let iconName = "";
    switch (route.name) {
        case "Home":
            iconName = "home"
            break;
        case "favorites":
            iconName = "heart"
            break;
        case "Cart":
            iconName = "shopping-cart"
            break;
        case "Account":
            iconName = "bars"
            break;

        default:
            break;
    }
    return <AwesomeIcon name={iconName} style={styles.icon} />
}



const styles = StyleSheet.create({
    navigation: {
        backgroundColor: colors.bgDark
    },
    icon: {
        fontSize: 20,
        color: colors.fontLight,
    }
})