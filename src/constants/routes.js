export const routes = {
  root: {
    name: 'Root',
  },
  login: {
    name: 'Login',
    title: 'Вход в систему',
    forgot: {
      name: 'Forgot',
      title: 'Восстановление пароля',
    },
  },
  waybills: {
    name: 'indexWaybill',
    title: 'Путевые листы',
    view: {
      name: 'viewWaybill',
      title: 'Путевой лист',
    },
  },
  cargo: {
    name: 'Cargo',
    title: 'Товары',
  },
  acts: {
    name: 'indexActs',
    title: 'Список актов',
    add: {
      name: 'addAct',
      title: 'Создание акта',
    },
    view: {
      name: 'viewAct',
      title: 'Информация об акте',
    },
  },
  map: {
    name: 'Map',
    title: 'Карта',
    waypoint: {
      name: 'WayPoint',
      title: 'Информация',
    },
  },
};

global.APP_MAP = routes;
