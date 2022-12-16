const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('pages/Login.vue'),
    meta: {
      guest: true,
    },
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('pages/Index.vue'),
        meta: {
          auth: true,
        },
      },
      {
        path: 'vehicle',
        name: 'vehicle',
        component: () => import('pages/Vehicle.vue'),
        meta: {
          auth: true,
        },
      },
      {
        path: 'vehicle/:id_chassis',
        name: 'vehicle.detail',
        component: () => import('pages/ListVehicle.vue'),
        meta: {
          auth: true,
        },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
