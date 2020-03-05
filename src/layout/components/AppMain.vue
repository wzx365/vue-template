<template>
  <section class="app-main">
    <div class="app-main-content">
      <router-view :key="key"/>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'AppMain',
  computed: {
    ...mapState(['loginerName']),
    key () {
      return this.$route.path
    }
  }
}
</script>

<style scoped lang="scss">
.app-main {
  height: calc(100vh - 60px);
  width: calc(100% - 65px);
  padding: 20px 0 20px 20px;
  box-sizing: border-box;
  position: relative;
  background: rgba($color: #f2f6fc, $alpha: 0.3);
  min-width: 450px;
  overflow-y: hidden;
  overflow-x: auto;

  .app-main-content {
    height: 100%;
    padding-right: 20px;
    overflow-y: auto;
  }
}
</style>
