import { View, Text } from "react-native";
import React from "react";

export default function AuthenticationPage() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Sign up</Text>
    </View>
  );
}
