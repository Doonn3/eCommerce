import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';
import { authController } from '@/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const requiresGuest = to.matched.some((record) => record.meta.requiresGuest);
  const isLoggedIn = authController.AuthMonitor.IsAuthorized;

  if (requiresAuth && !isLoggedIn.value) {
    next(from.path); // если роут требует авторизации и пользователь не авторизован, перенаправляем на страницу /catalog
  } else if (requiresGuest && isLoggedIn.value) {
    next(from.path); // если роут требует гостя и пользователь авторизован, перенаправляем на страницу /catalog
  } else {
    next(); // в остальных случаях разрешаем переход
  }
});

export default router;
