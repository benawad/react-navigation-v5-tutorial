import React from "react";
import { View } from "react-native";

interface CenterProps {}

export const Center: React.FC<CenterProps> = ({ children }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {children}
    </View>
  );
};
