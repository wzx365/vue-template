<template>
  <div>集群概要(含集群监控)</div>
</template>
<script>
export default {
  name: 'ClusterOutline',
  data () {
    return {
      service: '',
      projectId: ''
    }
  },
  created () {
    const { params } = this.$route
    this.service = params.service || ''
    this.projectId = params.projectId || ''
  }
}
</script>
<style lang="scss" scoped>
</style>