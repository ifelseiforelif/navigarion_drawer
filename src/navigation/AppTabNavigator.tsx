import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/tab-screens/HomeScreen";
import ProfileScreen from "../screens/tab-screens/ProfileScreen";
import DetailsStackNavigator from "./DetailsStackNavigator";

export type RootTabParamList = {
  Home: undefined;
  Profile: undefined;
  Details: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export const AppTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/icons/home.png")}
              style={{
                width: 34,
                height: 34,
                opacity: focused ? 1 : 0.5,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/icons/profile.png")}
              style={{
                width: 34,
                height: 34,
                opacity: focused ? 1 : 0.5,
              }}
            />
          ),
        }}
        listeners={() => ({
          tabPress: () => {
            console.log("Pressed -> Profile");
          },
        })}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/icons/details.png")}
              style={{
                width: 34,
                height: 34,
                opacity: focused ? 1 : 0.5,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
