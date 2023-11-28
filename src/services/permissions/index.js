import {PermissionsAndroid} from 'react-native';

export async function requestLocationPermission() {
  const checkLocationPermission = PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );

  if (checkLocationPermission === PermissionsAndroid.RESULTS.GRANTED) {
    return true;
  }

  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Необходим доступ к геолокации',
        message: 'Приложению нужен доступ к Вашему местоположению.',
        buttonNeutral: 'Позже',
        buttonNegative: 'Отмена',
        buttonPositive: 'OK',
      },
    );

    return granted === PermissionsAndroid.RESULTS.GRANTED;
  } catch (err) {
    console.warn(err);
  }
}
