export const front_routes = [
  {
    path: '/',
    component: () => import('./Layout/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('./Pages/HomePage.vue')
      },
      {
        path: 'events',
        name: 'events',
        component: () => import('./Pages/EventsPage.vue')
      },
      {
        path: 'events/:slug',
        name: 'event-details',
        component: () => import('./Pages/EventDetailsPage.vue')
      },
      {
        path: 'events/:slug/register',
        name: 'event-registration',
        component: () => import('./Pages/EventRegistrationPage.vue'),
        meta: { navbarTheme: 'light' }
      },
      {
        path: 'rooms',
        name: 'rooms',
        component: () => import('./Pages/RoomsPage.vue')
      },
      {
        path: 'rooms/:slug',
        name: 'room-details',
        component: () => import('./Pages/RoomDetailsPage.vue'),
        meta: { navbarTheme: 'light' }
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('./Pages/AboutPage.vue')
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('./Pages/ContactPage.vue'),
        meta: { navbarTheme: 'light' }
      }
    ]
  }
];
