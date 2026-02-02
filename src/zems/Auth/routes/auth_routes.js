export const auth_routes = [
  {
    path: '/auth',
    component: () => import('../Layout/AuthLayout.vue'),
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('../Pages/LoginPage.vue')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('../Pages/RegisterPage.vue')
      }
    ]
  }
];
