import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/home/remoteControl' },
    { path: '/login', component: () => import('../views/login/index.vue') },
    { path: '/loading', component: () => import('../views/loading/index.vue') },
    {
      path: '/home',
      component: () => import('../views/home/index.vue'),
      children: [
        { path: 'remoteControl', component: () => import('../views/remoteControl/index.vue') },
        { path: 'deviceList', component: () => import('../views/deviceList/index.vue') },
        { path: 'settings', component: () => import('../views/settings/index.vue') }
      ]
    },
    { path: '/linking', component: () => import('../views/linking/index.vue') }
  ]
})

export default router
