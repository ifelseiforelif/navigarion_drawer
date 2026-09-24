import React from "react";
import { View, Text, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../navigation/DetailsStackNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View>
      <Text>Главная</Text>

      <Button
        title="Открыть профиль"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}
