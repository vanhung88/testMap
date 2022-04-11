import React, { useState, useEffect, useRef } from "react";
import { Button, Text, View } from "react-native";
import * as Location from "expo-location";
import isDistant from "./radius";
import checkHadAlowGPS from "./checkHadAlowGPS";

export default function GetLocation() {
  const [gpsStop, setGbsStop] = useState(true);

  let GPStimer = useRef();
  let radiusDefault = useRef(0);
  let locationGPS = useRef({});

  useEffect(() => {}, []);
  const handleStopLocation = () => {
    setGbsStop(true);
    locationGPS.current = {};
    clearInterval(GPStimer.current);
  };

  const getLocationFirst = async () => {
    checkHadAlowGPS;

    let locationCurrent1 = await Location.getCurrentPositionAsync({});
    console.log("chay lan 1");
    const coords = {
      lat: locationCurrent1.coords.latitude,
      lon: locationCurrent1.coords.longitude,
    };

    console.log(coords);
    console.log("-----------------");
    locationGPS.current = coords;
  };

  const handleLocation = () => {
    setGbsStop(false);
    getLocationFirst();
    GPStimer.current = setInterval(() => {
      (async () => {
        let locationCurrent = await Location.getCurrentPositionAsync({});

        const lat1 = locationGPS.current.lat;
        const lon1 = locationGPS.current.lon;
        const lat2 = locationCurrent.coords.latitude;
        const lon2 = locationCurrent.coords.longitude;

        // check radius
        const radius = isDistant(lat1, lon1, lat2, lon2);
        console.log("khoảng cách thay đổi: " + radius + " m");
        if (radius > radiusDefault.current) {
          const coords = {
            lat: lat2,
            lon: lon2,
          };
          console.log(coords);
          console.log("-----------------");
          locationGPS.current = coords;
        } else {
          console.log("=> Khong thay doi vi tri");
          console.log("-----------------");
        }
      })();
    }, 3000);
  };

  useEffect(async () => {
    checkHadAlowGPS;
  }, []);

  return (
    <View>
      {gpsStop ? (
        <Button title="get location" onPress={handleLocation} />
      ) : (
        <Button title="Stop" onPress={handleStopLocation} />
      )}
      {locationGPS.current && (
        <>
          <Text>{locationGPS.current.lati}</Text>
          <Text>{locationGPS.current.long}</Text>
        </>
      )}
    </View>
  );
}
