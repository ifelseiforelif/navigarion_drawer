import React from "react";
import { View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../navigation/AppNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export default function DetailsScreen({ route }: Props) {
  const { userId } = route.params;

  return (
    <View>
      <Text>Детали пользователя</Text>
      <Text>ID: {userId}</Text>
    </View>
  );
}
