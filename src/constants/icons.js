import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FA from 'react-native-vector-icons/FontAwesome5';

const defaultSize = 20;

export const chevronRight = (props) => (
  <Icon name="chevron-triple-right" size={defaultSize} {...props} />
);
export const user = (props) => (
  <Icon name="account" size={defaultSize} {...props} />
);
export const password = (props) => (
  <Icon name="key-variant" size={defaultSize} {...props} />
);
export const hidePassword = (props) => (
  <Icon name="eye-off" size={defaultSize} {...props} />
);
export const showPassword = (props) => (
  <Icon name="eye" size={defaultSize} {...props} />
);
export const signIn = (props) => (
  <Icon name="login" size={defaultSize} {...props} />
);
export const update = (props) => (
  <Icon name="update" size={defaultSize} {...props} />
);
export const exit = (props) => (
  <Icon name="logout" size={defaultSize} {...props} />
);

export const waybills = (props) => (
  <Icon name="car-info" size={defaultSize} {...props} />
);
export const goods = (props) => (
  <Icon name="package" size={defaultSize} {...props} />
);
export const acts = (props) => (
  <Icon name="folder-alert-outline" size={defaultSize} {...props} />
);
export const actsEmpty = (props) => (
  <Icon name="folder-outline" size={defaultSize} {...props} />
);
export const actsAdded = (props) => (
  <Icon name="folder-sync-outline" size={defaultSize} {...props} />
);
export const addToAct = (props) => (
  <FA name="folder-plus" size={defaultSize} {...props} />
);

export const map = (props) => <Icon name="map" size={defaultSize} {...props} />;
export const mapOff = (props) => <Icon name="map-marker-multiple" size={defaultSize} {...props} />;
export const gps = (props) => (
  <Icon name="crosshairs-gps" size={defaultSize} {...props} />
);
export const zoomIn = (props) => (
  <Icon name="plus" size={defaultSize} {...props} />
);
export const zoomOut = (props) => (
  <Icon name="minus" size={defaultSize} {...props} />
);
export const region = (props) => (
  <Icon name="map-marker-radius" size={defaultSize} {...props} />
);
export const mapPath = (props) => (
  <Icon name="map-marker-path" size={defaultSize} {...props} />
);
export const menu = (props) => (
  <Icon name="menu" size={defaultSize} {...props} />
);

export const settings = (props) => (
  <Icon name="cog" size={defaultSize} {...props} />
);

export const plus = (props) => <FA name="plus" size={defaultSize} {...props} />;
export const minus = (props) => (
  <FA name="minus" size={defaultSize} {...props} />
);

export const traffic = (props) => (
  <Icon name="traffic-light" size={defaultSize} {...props} />
);
export const dist = (props) => (
  <Icon name="map-marker-distance" size={defaultSize} {...props} />
);

export const check = (props) => (
  <Icon name="check" size={defaultSize} {...props} />
);

export const truck = (props) => (
  <Icon name="truck" size={defaultSize} {...props} />
);
