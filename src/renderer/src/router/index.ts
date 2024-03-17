import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/home/remoteControl' },
    { path: '/login', component: () => import('../views/login/index.vue') },
    { path: '/loading', component: () => import('../views/loading/index.vue') },
    { path: '/linking', component: () => import('../views/linking/index.vue') },
    {
      path: '/home',
      redirect: '/home/remoteControl',
      component: () => import('../views/home/index.vue'),
      children: [
        {
          path: 'remoteControl',
          redirect: '/home/remoteControl/manualConn',
          component: () => import('../views/remoteControl/index.vue'),
          children: [
            {
              path: 'manualConn',
              component: () => import('../views/remoteControl/manualConn.vue')
            },
            {
              path: 'deviceListConn',
              component: () => import('../views/remoteControl/deviceListConn.vue')
            }
          ]
        },
        { path: 'terminalConn', component: () => import('../views/terminalConn/index.vue') },
        { path: 'settings', component: () => import('../views/settings/index.vue') }
      ]
    }
  ]
})

export default router
