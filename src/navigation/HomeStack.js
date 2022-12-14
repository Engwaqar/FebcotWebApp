import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { routeName } from "../constants/routeName";
import Home from "../screens/Home/Home";

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={routeName.HOME_SCREEN}
    >
      <Stack.Screen name={routeName.HOME_SCREEN} component={Home} />
     
    </Stack.Navigator>
  );
}

export default HomeStack;
