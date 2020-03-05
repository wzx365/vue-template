<template>
  <div>
    <top-bar/>
    <el-container>
      <side-bar/>
      <app-main/>
    </el-container>
  </div>
</template>
<script>
import TopBar from './components/TopBar'
import SideBar from './components/SideBar'
import AppMain from './components/AppMain'

export default {
  name: 'layout',

  components: {
    TopBar,
    SideBar,
    AppMain
  }
}
</script>

<style lang="scss" scoped>
</style>
