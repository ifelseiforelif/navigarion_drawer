import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import DetailsScreen from "../screens/DetailsScreen";

//Home:undefined - екран без параметрів
export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Details: {
    //цей екран з параметрами
    userId: number;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Главная" }}
      />

      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: "Профиль" }}
      />

      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: "Детали" }}
      />
    </Stack.Navigator>
  );
}
