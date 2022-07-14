import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./src/screen/MainScreen";
import Login from "./src/screen/LoginScreen";
import Signup from "./src/screen/SignupScreen";
import Menu from "./src/screen/MenuScreen";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{headerShown: false,}}/>
        <Stack.Screen name="Main" component={Main} options={{headerShown: false,}}/>
        <Stack.Screen name="Signup" component={Signup} options={{headerShown: false,}}/>
        <Stack.Screen name="Menu" component={Menu} options={{headerShown: false,}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}