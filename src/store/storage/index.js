import Storage from 'react-native-sensitive-info';

export const StorageOptions = {
  sharedPreferencesName: 'mySharedPrefs',
  keychainService: 'myKeychain',
};

export const getItem = async (storageKey) => {
  return Storage.getItem(storageKey, StorageOptions);
};

export const setItem = async (storageKey, value) => {
  return Storage.setItem(storageKey, value, StorageOptions);
};

export const deleteItem = async (storageKey) => {
  return Storage.deleteItem(storageKey, StorageOptions);
};

export const getAllItems = async () => {
  return Storage.getAllItems(StorageOptions);
};
