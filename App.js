import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import "react-native-gesture-handler";
import SignInScreen from "./screens/SignInScreen";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style="auto" />

            <Stack.Navigator initialRouteName="Sign In">
                <Stack.Screen name="Sign In" component={SignInScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
