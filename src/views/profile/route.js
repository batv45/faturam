const Layout = () => import('@/layout/index.vue')

export default {
  name: 'Profile',
  path: '/profile',
  isHidden: true,
  component: Layout,
  redirect: '/profile/index',
  children: [
    {
      name: 'ProfileIndex',
      path: 'index',
      component: () => import('./index.vue'),
      meta: {
        title: 'Hesabım',
        icon: 'mdi:user',
        order: 0,
      },
    },
  ],
}
