<template>
  <div>
    <div class="primay-color" @click="visible = !visible">租户管理</div>
    <el-date-picker v-model="value1" type="date" :placeholder="$t('date.placeholder')"></el-date-picker>
  </div>
</template>
<script>
export default {
  name: 'account-index',
  data () {
    return {
      visible: false,
      value1: ''
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
