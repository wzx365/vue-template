<template>
  <el-button
    type="primary"
    class="refresh-btn"
    :title="title"
    :loading="loading"
    icon="el-icon-refresh"
    @click="onRefresh"
  >{{title}}</el-button>
</template>
<script>
/**
 * @author wangzhixiang
 * @description 同步资源
 *  */
export default {
  name: 'cm-refresh',
  props: {
    // title
    title: {
      type: String,
      default: '同步资源'
    },
    // loading状态
    loading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onRefresh () {
      this.$emit('refresh')
    }
  }
}
</script>
