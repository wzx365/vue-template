// 管理员的侧边栏导航
const managerNavList = [
  // 管理
  {
    icon: 'el-icon-s-management',
    title: '管理',
    linkTo: '/manage',
    name: 'manage',
    children: [
      {
        title: '主机管理',
        name: 'hosts-manage',
        linkTo: '/manage/hosts'
      },
      {
        title: '租户管理',
        name: 'tenants-manage',
        linkTo: '/manage/account'
      },
      {
        title: '存储管理',
        name: 'storage-manage',
        linkTo: '/manage/storage'
      }
    ]
  },
  // 集群
  {
    icon: 'el-icon-s-grid',
    title: '集群',
    linkTo: '/cluster',
    name: 'cluster',
    children: [
      {
        title: 'tenant1',
        name: 'tenantCluster',
        linkTo: '/cluster/tenant1/cluster1/outline',
        children: [
          {
            title: 'cluster1',
            name: 'tenant1-cluster1',
            linkTo: '/cluster/tenant1/cluster1/outline'
          },
          {
            title: 'cluster2',
            name: 'tenant1-cluster2',
            linkTo: '/cluster/tenant1/cluster2/outline'
          }
        ]
      },
      {
        title: 'tenant2',
        name: 'tenantCluster2',
        linkTo: '/cluster/tenant2/cluster1/outline',
        children: [
          {
            title: 'cluster1',
            name: 'tenant2-cluster1',
            linkTo: '/cluster/tenant2/cluster1/outline'
          },
          {
            title: 'cluster2',
            name: 'tenant2-cluster2',
            linkTo: '/cluster/tenant2/cluster2/outline'
          }
        ]
      }
    ]
  },
  // 应用仓库
  {
    icon: 'el-icon-s-home',
    title: '应用仓库',
    linkTo: '/software',
    name: 'software',
    children: [
      {
        title: '应用列表',
        name: 'softwareList',
        linkTo: '/software/list'
      },
      {
        title: '组件安装',
        name: 'softwareInstall',
        linkTo: '/software/install'
      }
    ]
  },
  // 设置
  {
    icon: 'el-icon-s-tools',
    title: '设置',
    name: 'settings',
    linkTo: '/settings',
    children: [
      {
        title: '更改密码',
        name: 'settingsChangePwd',
        linkTo: '/settings/change-pwd'
      },
      {
        title: '许可证',
        name: 'license',
        linkTo: '/settings/license'
      },
      {
        title: '告警',
        name: 'warnings',
        linkTo: '/settings/warning'
      }
    ]
  },
  // 审计日志
  {
    icon: 'el-icon-document',
    title: '日志',
    name: 'Log',
    linkTo: '/log',
    children: [
      {
        title: '审计日志',
        name: 'logAudit',
        linkTo: '/log/audit'
      },
      {
        title: '服务器日志',
        name: 'logLicense',
        linkTo: '/log/server'
      },
      {
        title: '服务日志',
        name: 'logService',
        linkTo: '/log/service'
      }
    ]
  }
]

export {
  managerNavList
}
