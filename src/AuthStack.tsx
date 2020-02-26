import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthParamList, AuthNavProps } from "./AuthParamList";
import { AuthContext } from "./AuthProvider";
import { Center } from "./Center";
import { Button, Text } from "react-native";

interface AuthStackProps {}

const Stack = createStackNavigator<AuthParamList>();

function Login({ navigation }: AuthNavProps<"Login">) {
  const { login } = useContext(AuthContext);
  return (
    <Center>
      <Text>I am a login screen</Text>
      <Button
        title="log me in"
        onPress={() => {
          login();
        }}
      />
      <Button
        title="go to register"
        onPress={() => {
          navigation.navigate("Register");
        }}
      />
    </Center>
  );
}

function Register({ navigation, route }: AuthNavProps<"Register">) {
  return (
    <Center>
      <Text>route name: {route.name}</Text>
      <Button
        title="go to login"
        onPress={() => {
          navigation.navigate("Login");
          // navigation.goBack()
        }}
      />
    </Center>
  );
}

export const AuthStack: React.FC<AuthStackProps> = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null
      }}
      initialRouteName="Login"
    >
      <Stack.Screen
        options={{
          headerTitle: "Sign In"
        }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{
          headerTitle: "Sign Up"
        }}
        name="Register"
        component={Register}
      />
    </Stack.Navigator>
  );
};
