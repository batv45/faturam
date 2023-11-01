const Layout = () => import('@/layout/index.vue')

export default {
  name: 'Faturalar',
  path: '/invoice',
  component: Layout,
  redirect: '/invoice/index',
  meta: {
    title: 'Faturalar',
    icon: 'majesticons:compass-line',
    order: 1,
  },
  children: [
    {
      name: 'FaturaListe',
      path: 'index',
      component: () => import('./index.vue'),
      meta: {
        title: 'Faturalar',
        icon: 'material-symbols:auto-awesome-outline-rounded',
        keepAlive: true,
      },
    },
  ],
}
