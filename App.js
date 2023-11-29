import React from 'react'
import Home from './src/screens/Home';
import Cart from './src/screens/Cart';
import LoginScreen from './src/screens/LoginScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ProductScreen from './src/screens/ProductScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider } from 'react-redux';
import store from './src/redux/store';


export default function App() {

    const Stack = createNativeStackNavigator();

    return (
        <Provider store={store} >

            <NavigationContainer>
                <Stack.Navigator>

                    {/* <Stack.Screen
                        name="LoginScreen"
                        component={LoginScreen}
                        options={{ headerShown: false }}
                    /> */}

                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="ProductScreen"
                        component={ProductScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Cart"
                        component={Cart}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="ProfileScreen"
                        component={ProfileScreen}
                        options={{ headerShown: false }}
                    />


                </Stack.Navigator>
            </NavigationContainer>
        </Provider>

    );
}
