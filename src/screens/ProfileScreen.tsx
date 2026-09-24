import React from "react";
import { View, Text, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../navigation/DetailsStackNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Profile">;

export default function ProfileScreen({ navigation }: Props) {
  return (
    <View>
      <Text>Профиль</Text>

      <Button
        title="Открыть детали"
        onPress={() =>
          navigation.navigate("Details", {
            userId: 123,
          })
        }
      />
    </View>
  );
}
