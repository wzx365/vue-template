<template>
  <div>
    <nav>
      <router-link to="/system/cluster/outline">概要</router-link>
      <router-link to="/system/cluster/monitor">监控</router-link>
      <router-link to="/system/cluster/hosts">主机</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>
