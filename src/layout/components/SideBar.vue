<template>
  <el-aside width="200px">
    <el-menu
      :default-active="activeMenu"
      class="el-menu-vertical-wrap"
      :unique-opened="false"
      router
      :collapse="false"
    >
      <template v-for="nav in navList">
        <el-submenu
          v-if="nav.children && nav.children.length"
          :key="nav.linkTo"
          :index="nav.linkTo"
        >
          <div slot="title" class="menu-item-lc">
            <i :class="nav.icon"></i>
            <span>{{ nav.title || $t(nav.titleKey) }}</span>
          </div>
          <template v-for="sub in nav.children">
            <el-submenu
              v-if="sub.children && sub.children.length"
              :key="sub.linkTo"
              :index="sub.linkTo"
            >
              <div slot="title" class="menu-item-sub-lc">
                <i v-if="sub.icon" :class="sub.icon"></i>
                <span slot="title">{{ sub.title || $t(sub.titleKey) }}</span>
              </div>
              <el-menu-item v-for="third in sub.children" :key="third.linkTo" :index="third.linkTo">
                <template slot="title">
                  <i v-if="third.icon" :class="third.icon"></i>
                  <span slot="title">{{ third.title || $t(third.titleKey) }}</span>
                </template>
              </el-menu-item>
            </el-submenu>
            <el-menu-item v-else :key="sub.linkTo" :index="sub.linkTo">
              <template slot="title">
                <i v-if="sub.icon" :class="sub.icon"></i>
                <span slot="title">{{ sub.title || $t(sub.titleKey) }}</span>
              </template>
            </el-menu-item>
          </template>
        </el-submenu>
        <el-menu-item v-else :key="nav.linkTo" :index="nav.linkTo">
          <template slot="title">
            <i :class="nav.icon"></i>
            <span>{{ nav.title || $t(nav.titleKey) }}</span>
          </template>
        </el-menu-item>
      </template>
    </el-menu>
  </el-aside>
</template>

<script>
import { mapState } from 'vuex'
import { managerNavList } from '../side-bar-menus.js'

export default {
  name: 'sidBar',

  data () {
    return {
      navList: []
    }
  },
  computed: {
    ...mapState(['projectList']),
    activeMenu () {
      const { path, meta } = this.$route
      return meta.activeMenu || path
    }
  },

  created () {
    this.setNavList()
  },

  methods: {
    setNavList () {
      this.navList = managerNavList
    }
  }
}
</script>

<style lang="scss" scoped>
.el-aside {
  height: calc(100vh - 60px);
  overflow-x: hidden;
  overflow-y: auto;
  background: #f2f6fc;

  .el-menu-vertical-wrap {
    height: 100%;
  }

  .el-menu {
    background-color: #f2f6fc;
  }

  .menu-item-lc {
    width: 100px;
    text-align: left;
  }

  .menu-item-sub-lc {
    width: 60px;
    text-align: left;
    text-indent: 20px;
  }

  .el-menu-item {
    font-size: 13px;
    background-color: #f2f6fc;
    // &.is-active {
    //   border-right: 2px solid #78c9cf;
    //   color: #78c9cf;
    //   background: rgba($color: #78c9cf, $alpha: 0.2)
    // }
  }
}
</style>
