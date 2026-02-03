import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      title: '首頁',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
    meta: {
      title: '關於我們',
    },
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('@/views/ProductsView.vue'),
    meta: {
      title: '花藝禮品',
    },
  },
  {
    path: '/ordercar',
    name: 'ordercar',
    component: () => import('@/views/orderCarView.vue'),
    meta: {
      title: '購物車',
    },
  },
  {
    path: '/ordercheck',
    name: 'ordercheck',
    component: () => import('@/views/OrderCheckView.vue'),
    meta: {
      title: '詢問單',
    },
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/admin/AdminHomeView.vue'),
    meta: {
      title: '後台管理',
    },
    children: [
      {
        path: '',
        name: 'adminprotal',
        component: () => import('@/views/admin/AdminProtalView.vue'),
        props: true,
      },
      {
        path: 'producttype',
        name: 'adminproducttype',
        component: () => import('@/views/admin/AdminProductTypeView.vue'),
        props: true,
      },
      {
        path: 'adminprodut',
        name: 'adminprodut',
        component: () => import('@/views/admin/AdminProductView.vue'),
        props: true,
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const DEFAULT_TITLE = '采依花藝'
router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? `${to.meta.title}|${DEFAULT_TITLE}` : DEFAULT_TITLE
  next()
})

export default router
