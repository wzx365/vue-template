
import Layout from '@/layout/index.vue'
import Login from '@/views/login/index.vue'
// import ClusterManageLayout from '@/views/system/cluster/Layout.vue'

export default [
  // 主页重定向到login, 检验是否登录或是否登录过期
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue')
  },
  // 登录页面
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/change-pwd',
    name: 'ChangePwd',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "change-pwd" */ '@/views/change-pwd/index.vue')
  },
  {
    path: '/manage',
    name: 'manage',
    component: Layout,
    redirect: '/manage/hosts',
    meta: { title: '管理' },
    children: [
      {
        path: '/manage/hosts',
        name: 'manage-hosts',
        // component: ClusterManageLayout,
        // redirect: '/system/cluster/outline',
        meta: { title: '主机管理' },
        component: () => import(/* webpackChunkName: "manage-hosts" */ '@/views/manage/hosts/index.vue')
      },
      {
        path: '/manage/account',
        name: 'manage-account',
        component: () => import(/* webpackChunkName: "manage-account" */ '@/views/manage/account/index.vue'),
        meta: { title: '账号管理' }
      },
      {
        path: '/manage/storage',
        name: 'manage-storage',
        component: () => import(/* webpackChunkName: "manage-storage" */ '@/views/manage/storage/index.vue'),
        meta: { title: '存储管理' }
      }
    ]
  },
  // 项目 重定向到第一个项目下的第一个服务的概要
  {
    path: '/cluster',
    name: 'cluster',
    component: Layout,
    redirect: '/cluster/:tenantName?/:clusterName?/outline',
    meta: { title: '集群' },
    children: [
      {
        path: '/cluster/:tenantName?/:clusterName?/outline',
        name: 'cluster-tenantName',
        component: () => import(/* webpackChunkName: "cluster-outline" */ '@/views/cluster/Outline.vue'),
        // meta: { title: '集群概况', activeMenu: '/cluster/outline' }
        meta: { title: '集群概况' }
      },
      {
        path: '/cluster/:tenantName?/:clusterName?/configs',
        name: 'cluster-configs',
        component: () => import(/* webpackChunkName: "cluster-configs" */ '@/views/cluster/Configs.vue'),
        // meta: { title: '集群配置历史', activeMenu: '/cluster/configs' }
        meta: { title: '集群配置历史' }
      }
    ]
  },
  // 软件栈
  {
    path: '/software',
    name: 'software',
    component: Layout,
    redirect: '/software/list',
    children: [
      {
        path: '/software/list',
        name: 'software-list',
        component: () => import(/* webpackChunkName: "software-list" */ '@/views/software/List.vue')
      },
      {
        path: '/software/install',
        name: 'software-install',
        component: () => import(/* webpackChunkName: "software-install" */ '@/views/software/Install.vue')
      }
    ]
  },
  // 设置
  {
    path: '/settings',
    name: 'settings',
    component: Layout,
    redirect: '/settings/change-pwd',
    children: [
      {
        path: '/settings/change-pwd',
        name: '/settings/change-pwd',
        component: () => import(/* webpackChunkName: "/settings/change-pwd" */ '@/views//settings/ChangePwd.vue')
      },
      {
        path: '/settings/license',
        name: 'settings-license',
        component: () => import(/* webpackChunkName: "settings-license" */ '@/views/settings/License.vue')
      },
      {
        path: '/settings/warning',
        name: 'settings-warning',
        component: () => import(/* webpackChunkName: "settings-warning" */ '@/views/settings/Warning.vue')
      }
    ]
  },
  // 日志
  {
    path: '/log',
    name: 'log',
    component: Layout,
    redirect: '/log/audit',
    children: [
      {
        path: '/log/audit',
        name: 'logAudit',
        component: () => import(/* webpackChunkName: "log-audit" */ '@/views//log/AuditLog.vue')
      },
      {
        path: '/log/server',
        name: 'logServer',
        component: () => import(/* webpackChunkName: "log-server" */ '@/views/log/ServerLog.vue')
      },
      {
        path: '/log/service',
        name: 'logService',
        component: () => import(/* webpackChunkName: "log-service" */ '@/views//log/ServiceLog.vue')
      }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
]
