import { DeviceTypes } from "@/types";
import { DEVICE_TYPES } from "../constants";

export const getDeviceType = (): DeviceTypes => {
  if (window.matchMedia("(min-width: 1200px)").matches) {
    return DEVICE_TYPES.LAPTOP;
  } else if (window.matchMedia("(min-width: 992px)").matches) {
    return DEVICE_TYPES.TABLET_LANDSCAPE;
  } else if (window.matchMedia("(min-width: 768px)").matches) {
    return DEVICE_TYPES.TABLET_PORTRAIT;
  } else if (window.matchMedia("(min-width: 480px)").matches) {
    return DEVICE_TYPES.MOBILE_LANDSCAPE;
  } else {
    return DEVICE_TYPES.MOBLE_PORTRAIT;
  }
};


//Coordinates of the Destinations 
const coordinates = [
{ lat: 27.174744430178972, lng: 78.04203403226907 },//Taj Mahal.
{ lat: 28.65597024783754,  lng: 77.23850376943301 },//Red Fort.
{ lat: 28.59370415372406,  lng: 77.25071214922312 },//Humayun Tomb.
{ lat: 28.524437251379716, lng: 77.18516199734238 },//Qutab Minar.
{ lat: 12.305239512334511, lng: 76.65514132448565 },//Mysore Palace.
{ lat: 15.492302072032448, lng: 73.77385071582754 },//Aguada Fort.
{ lat: 18.92227791920884,  lng: 72.83432012986894 },//Gateway Of India.
{ lat: 18.519478298894512, lng: 73.85521232418277 },//Shaniwar Wada.
{ lat: 20.027730476600006, lng: 75.17745776619151 },//Ellora Caves.
{ lat: 17.36187343984017,  lng: 78.47472170757136 },//Charminar.
{ lat: 22.545558786459893, lng: 88.34262145003817 },//Victoria Memorial.
{ lat: 27.09683759326152,  lng: 77.66589150858019 },//Fatehpur Sikhri.
{ lat: 28.626818477847056, lng: 77.21661640749555 },//Jantar Mantar.
{ lat: 26.987300847786223, lng: 75.85051352726069},//Amer Fort.
{ lat: 26.923851737939337, lng: 75.8271484915815},//Hawa Mahal.
{ lat: 28.613006761931167, lng: 77.22799119095785},//India Gate.
{ lat: 21.837902967151518, lng: 73.7202344776466},//Statue Of Unity.
{ lat: 22.337018808537074, lng: 69.08675121913451},//Nageshwar Temple.
{ lat: 18.956789086492034, lng: 72.80558994054562},//Hanging Gardens.
{ lat: 26.894789932236062, lng: 75.8165445729158},//Dungri Temple.
];

export const getRandomLatLng = (
  LatLng: typeof google.maps.LatLng
): google.maps.LatLng => 
{
  const randomLocationIndex = Math.floor(Math.random() * coordinates.length);

  const lat = coordinates[randomLocationIndex].lat;
  const lng = coordinates[randomLocationIndex].lng;
  console.log(lat,lng);
  return new LatLng(lat, lng);
};

// @see https://stackoverflow.com/a/71135980/11043317
export const getIconUrl = (icon: string) => {
  return new URL(
    `/src/assets/images/material-symbols/${icon}.svg`,
    import.meta.url
  ).href;
};
