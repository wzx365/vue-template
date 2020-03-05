<template>
  <!-- 这里没有用select,是因为dropdown在css样式上可调整空间更大 -->
  <el-dropdown trigger="click" @command="changeLang">
    <el-button class="el-button">
      <div class="toggleWrapper">
        <cm-svg icon="international"/>
        <span>
          {{ localeText }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
      </div>
    </el-button>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        v-for="item in languages"
        :key="item.value"
        :command="item"
      >
        <cm-svg :icon="item.icon" />
        {{ item.label }}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'Locale',
  props: {},
  data () {
    return {
      languages: [
        {
          label: '简体中文',
          value: 'zh',
          icon: 'zhongwen'
        },
        {
          label: 'English',
          value: 'en',
          icon: 'yingwen'
        }
      ],
      lang: this.$i18n.locale
    }
  },
  methods: {
    changeLang (item) {
      if (this.lang === item.value) return false

      this.lang = item.value
      this.$i18n.locale = item.value
      window.localStorage.setItem('language', item.value)
    }
  },
  computed: {
    localeText () {
      for (let i in this.languages) {
        if (this.languages[i].value === this.lang) {
          return this.languages[i].label
        }
      }
      return ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.el-button {
  border: 0;
  .toggleWrapper {
    display: flex;
    justify-content: space-between;
    width: 100px;
  }
}
</style>
