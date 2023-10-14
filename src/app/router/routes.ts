// import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { HomePage } from '@pages/HomePage';
import { CatalogPage } from '@pages/CatalogPage';
import { ProductPage } from '@pages/ProductPage';
import { SignupPaga } from '@pages/SignUpPage';

export const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: HomePage
  },
  {
    path: '/catalog/:id',
    name: 'catalog',
    component: CatalogPage
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: SignupPaga
  },
  {
    path: '/product-page',
    name: 'product-page',
    component: ProductPage
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
