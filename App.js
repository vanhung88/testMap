import React, { useEffect } from "react";
import GetLocation from "./components/getLocation1";
import { View } from "react-native";
import * as Location from "expo-location";
export default function App() {
  useEffect(async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      await Location.requestForegroundPermissionsAsync();
    }
  }, []);

  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <GetLocation />
    </View>
  );
}
