import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import service from '@/utils/request.js'
import {
  getCookie
} from '@/utils/cookies'
Vue.use(Router)
let router = new Router({
  base: '/abstract-vue/',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/views/Login')
    },
    {
      path: '/localhost',
      name: 'login',
      component: () => import('@/views/localhost')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/views/Admin'),
      children: [
        {
          path: 'list',
          name: 'list',
          component: () => import('@/views/User/UserList')
        },
        {
          path: 'info/:id',
          name: 'info',
          component: () => import('@/views/User/UserInfo')
        },
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('@/views/Admin'),
      children: [
        {
          path: 'dataEntity',
          name: 'dataEntity',
          authority: [50],
          meta: {
            requireAuth: true // 添加需要权限的标记
          },
          component: () => import('@/views/DataModel/DataEntity')
        },
        {
          path: 'relationEntity',
          name: 'relationEntity',
          authority: [50],
          meta: {
            requireAuth: true // 添加需要权限的标记
          },
          component: () => import('@/views/DataModel/RelationEntity')
        },
        {
          path: 'dataInstance',
          name: 'dataInstance',
          authority: [50],
          meta: {
            requireAuth: true // 添加需要权限的标记
          },
          component: () => import('@/views/DataModel/DataInstance')
        },
        {
          path: 'tags',
          name: 'tags',
          authority: [50],
          meta: {
            requireAuth: true // 添加需要权限的标记
          },
          component: () => import('@/views/SystemBaseInfo/Tags')
        },
        {
          path: 'index',
          name: 'index',
          component: () => import('@/views/Index')
        },
        {
          path: 'upload',
          name: 'upload',
          component: () => import('@/views/User/Upload')
        },
        {
          path: '/order/list',
          name: 'OrderList',
          component: () => import('@/views/Order/OrderList')
        },
        {
          path: '/order/tag',
          name: 'OrderTag',
          component: () => import('@/views/Order/OrderTag')
        },
        {
          path: '/product/list',
          name: 'Product',
          component: () => import('@/views/Product/Product')
        },
        {
          path: '/sales/list',
          name: 'SalesList',
          component: () => import('@/views/Sales/SalesList')
        },
        {
          path: '/client/list',
          name: 'ClientList',
          component: () => import('@/views/Client/ClientList')
        },
        {
          path: '/client/type',
          name: 'ClientType',
          component: () => import('@/views/Client/ClientType')
        },
        {
          path: '/client/pay',
          name: 'Payment',
          component: () => import('@/views/Client/Payment')
        },
        {
          path: '/comment',
          name: 'comment',
          component: () => import('@/views/Comments/comment')
        },
        {
          path: '/downLoad',
          name: 'downLoad',
          authority: [50],
          meta: {
            requireAuth: true // 添加需要权限的标记
          },
          component: () => import('@/views/User/UserInfo')
        },
        {
          path: '/UserLists',
          name: 'UserLists',
          authority: [50],
          meta: {
            requireAuth: true // 添加需要权限的标记
          },
          component: () => import('@/views/User/UserLists')
        },
        {
          path: '/UserDetail',
          name: 'UserDetail',
          authority: [50],
          meta: {
            requireAuth: true // 添加需要权限的标记
          },
          component: () => import('@/views/User/UserDetail')
        }
      ]
    },
    {
      path: '*',
      redirect: '/admin'
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(res => res.meta.requireAuth)) { // 判读是不是要权限登录
//   if (to.path !== '/') {
//     service.get('/api/user/current').then(res => {
//       if (res.success) {
//         if (!store.state.userId) {
//           store.commit('SET_USERID', res.result._id)
//           store.commit('SET_USERNAME', res.result.username)
//           store.commit('SET_AVATAR', res.result.avatar)
//           store.commit('SET_INFOID', res.result._id)
//           store.commit('SET_ROLE', res.result.role)
//         }
//         next()
//       } else {
//         next('/')
//       }
//     })
//   } else {
//     next()
//   }
//   } else {
//       next() // 不是就直接去渲染路由
//   };
// })
export default router
