<template>
    <el-color-picker v-model="mainColor" size="small" @change="changeColor"></el-color-picker>
</template>

<script>
import { changeThemeColor, curColor } from '@/utils/theme-color'

export default {
  data () {
    return {
      mainColor: curColor
    }
  },
  methods: {
    changeColor (newColor) {
      changeThemeColor(newColor)
        .then(() => this.$message.success('主题色切换成功~'))
    }
  }
}
</script>
