const Layout = () => import('@/layout/index.vue')

export default {
  name: 'Dashboard',
  path: '/',
  component: Layout,
  redirect: '/home',
  children: [
    {
      name: 'Home',
      path: 'home',
      component: () => import('./index.vue'),
      meta: {
        title: 'Ana Sayfa',
        icon: 'mdi:home',
        order: 0,
      },
    },
  ],
}
