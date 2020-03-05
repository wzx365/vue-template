<template>
  <el-header class="header bg-primay">
    <div class="logo-wrapper">
      <img class="logo" src="@/assets/img/logo.png" alt="logo">
    </div>
    <div class="change-language-wrapper">
      <locale/>
    </div>
    <div class="color-picker-wrapper">
      <color-picker class=""/>
    </div>
    <div class="fullscreen-wrapper">
      <cm-svg
        @click="toggleFullScreen"
        :title="isFullscreen ? $t('top.fullscreen.exist') : $t('top.fullscreen.open')"
        :icon="isFullscreen ? 'esc-fullscreen' : 'fullscreen'"
        class="full-screen-btn hover"
      />
    </div>
  </el-header>
</template>
<script>
import { mapState } from 'vuex'
import Locale from '@/components/common/Locale'
import ColorPicker from '@/components/common/ChangeColor.vue'

export default {
  name: 'TopBar',
  components: {
    Locale,
    ColorPicker
  },
  data () {
    return {
      isFullscreen: !!document.fullscreenElement
    }
  },
  computed: {
    // 当前集群的项目列表
    ...mapState(['projectList'])
  },
  mounted () {
    this.addKeyPressListener()
  },
  beforeDestroy () {
    this.removeKeyPressListener()
  },
  methods: {
    changeLanguage () {
      const pre = this.$i18n.locale
      const curr = pre === 'en' ? 'zh' : 'en'
      window.localStorage.setItem('language', curr)
      this.$i18n.locale = curr
    },
    handleLanguage (lang) {
      window.localStorage.setItem('language', lang)
      this.$i18n.locale = lang
    },
    toggleFullScreen () {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen()
        this.isFullscreen = true
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen()
          this.isFullscreen = false
        }
      }
    },
    handleKeyCode (e) {
      if (e.keyCode === 13) {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen()
          this.isFullscreen = true
        }
      }
    },
    onFullscreenChange () {
      const isFullscreen = !!document.fullscreenElement
      console.log(isFullscreen)
      this.isFullscreen = isFullscreen
    },
    addKeyPressListener () {
      document.addEventListener('keydown', this.handleKeyCode)
      document.addEventListener('fullscreenchange', this.onFullscreenChange)
    },
    removeKeyPressListener () {
      document.removeEventListener('keydown', this.handleKeyCode)
      document.removeEventListener('fullscreenchange', this.onFullscreenChange)
    }
  }
}
</script>
<style scoped lang='scss'>
.el-header {
  // background-color: $theme;
  color: #fff;
  min-width: 650px;
  position: relative;
  padding: 0;

  .logo-wrapper {
    width: 180px;
    height: 60px;
    padding: 5px 0;
    box-sizing: border-box;
    float: left;
    .logo {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .color-picker-wrapper {
    float: right;
    margin-right: 24px;
    height: 100%;
    padding: 14px 0;
    box-sizing: border-box;
    cursor: pointer;
  }

  .change-language-wrapper {
    float: right;
    height: 100%;
    padding: 13px 0;
    box-sizing: border-box;
    cursor: pointer;
    margin-right: 40px;
  }

  .fullscreen-wrapper {
    float: right;
    margin-right: 24px;
    height: 100%;
    padding: 20px 0;
    box-sizing: border-box;
    cursor: pointer;
  }
}
</style>
<style lang="scss">
/* 修改密码 */
.change-pwd-dialog .el-dialog {
  min-width: 600px;
  .el-input {
    width: 320px;
  }
}

.full-screen-btn {
  font-size: 20px;
}

.change-language-wrapper {
  // .el-dropdown {
  //   transition: all 0.5s;
  // }
  .el-button {
    // background: #34495e;
    // color: #fff;
    transition: all 0.3s;
  }
  .el-button:hover {
    // background: #34495e;
    // color: #fff;
  }
}
</style>
