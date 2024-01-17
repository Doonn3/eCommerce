import { NAV_CATALOG } from '@entities/Navigation';
import { CatalogPage } from '@pages/CatalogPage';
import { ProductPage } from '@pages/ProductPage';
import { SignupPage } from '@pages/SignUpPage';
import { LoginPage } from '@pages/LoginPage';
import { DevelopingPage } from '@pages/DevelopingPage';
import { NotFoundPage } from '@pages/404';

export const routes = [
  {
    path: '/',
    redirect: NAV_CATALOG.PATH_DEFAULT
  },

  {
    path: NAV_CATALOG.PATH,
    name: NAV_CATALOG.NAME,
    component: CatalogPage
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: SignupPage,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/product-page/:id',
    name: 'product-page',
    component: ProductPage
  },
  {
    path: '/profile',
    name: 'profile',
    component: DevelopingPage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/home',
    name: 'home',
    component: DevelopingPage
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFoundPage',
    component: NotFoundPage
  }
];

// export const routes = [
//   {
//     path: '/',
//     redirect: '/home'
//   },
//   {
//     path: '/home',
//     name: 'home',
//     component: HomePage
//   },
//   {
//     path: '/catalog',
//     name: 'catalog',
//     component: CatalogPage
//   },

//   {
//     path: '/cart',
//     name: 'cart',
//     component: CartPageRefact
//   },

//   {
//     path: '/product/:id',
//     name: 'product',
//     component: ProductPage
//   },
//   {
//     path: '/profile',
//     name: 'profile',
//     component: ProfilePage,
//     beforeEnter: (
//       to: RouteLocationNormalized,
//       from: RouteLocationNormalized,
//       next: NavigationGuardNext
//     ) => {
//       if (
//         stateTokenStore().getToken() === null ||
//         stateTokenStore().getToken()?.accessTokenType === 'anonymous'
//       ) {
//         // Если у пользователя нет токен, перенаправляем его на главную страницу
//         next('/home');
//       } else {
//         next();
//       }
//     }
//   },
//   {
//     path: '/registration',
//     name: 'registration',
//     component: PageRegistrationVue,
//     beforeEnter: (
//       to: RouteLocationNormalized,
//       from: RouteLocationNormalized,
//       next: NavigationGuardNext
//     ) => {
//       if (stateTokenStore().getToken()?.accessTokenType === 'client') {
//         // Если у пользователя есть токен, перенаправляем его на главную страницу
//         next('/');
//       } else {
//         // Если у пользователя нет токена, разрешаем ему перейти на страницу входа
//         next();
//       }
//     }
//   },
//   {
//     path: '/login',
//     name: 'login',
//     component: LoginPage,
//     beforeEnter: (
//       to: RouteLocationNormalized,
//       from: RouteLocationNormalized,
//       next: NavigationGuardNext
//     ) => {
//       if (stateTokenStore().getToken()?.accessTokenType === 'client') {
//         // Если у пользователя есть токен, перенаправляем его на главную страницу
//         next('/');
//       } else {
//         // Если у пользователя нет токена, разрешаем ему перейти на страницу входа
//         next();
//       }
//     }
//   },
//   {
//     path: '/:pathMatch(.*)*',
//     name: 'NotFoundPage',
//     component: NotFoundPage
//   },
//   {
//     path: '/about-us',
//     name: 'aboutUs',
//     component: AboutUs
//   }
// ];
