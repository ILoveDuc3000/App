import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import StarScreen from "../Screen/StarScreen/Index.js"
import Loign from "../Screen/Sign_in_up/index.js"
import Forgotpassword from "../Screen/ForgotPassword/index.js"


export default function App() {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="StarScreen" component={StarScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Loign" component={Loign} options={{ headerShown: false }} />
            <Stack.Screen name="Forgotpassword" component={Forgotpassword} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}