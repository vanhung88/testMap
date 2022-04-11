import * as Location from "expo-location";
import { Alert } from "react-native";
const checkHadAlowGPS = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    Alert.alert("You need alow gps");
    return;
  }
};

export default checkHadAlowGPS;
