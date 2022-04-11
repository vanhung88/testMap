// Converts numeric degrees to radians
function toRad(Value) {
  return (Value * Math.PI) / 180;
}

//This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
// (vido,kinhdo.vodo2,kinhdo2)
function isDistant(lat1, lon1, lat2, lon2) {
  let R = 6371; // km
  let dLat = toRad(lat2 - lat1);
  let dLon = toRad(lon2 - lon1);
  let lat01 = toRad(lat1);
  let lat02 = toRad(lat2);

  let a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat01) * Math.cos(lat02);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let d = R * c * 1000;
  return d;
}

export default isDistant;
