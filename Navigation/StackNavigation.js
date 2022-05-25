import { View, Text } from "react-native";
import { React, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthScreen from "../screens/AuthScreen";
import HomeScreen from "../screens/HomeScreen";
import { auth } from "../firebase-config";
import ForgotPassword from "../screens/ForgotPassword";

const Stack = createStackNavigator();

function MyStack() {
  const [currentUser, setCurrentUser] = useState(null);

  auth.onAuthStateChanged((user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(null);
    }
  });
  return (
    <Stack.Navigator>
      {!currentUser && <Stack.Screen name="Auth" component={AuthScreen} />}
      {!currentUser && (
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      )}
      {currentUser && (
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerLeft: null,
          }}
        />
      )}
    </Stack.Navigator>
  );
}

export default MyStack;
