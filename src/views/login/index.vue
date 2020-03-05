<template>
  <login-wrapper>
    <locale class="locale"/>
    <do-login/>
  </login-wrapper>
</template>

<script>
import { mapState } from 'vuex'
import LoginWrapper from '@/components/login/Wrapper.vue'
import Locale from '@/components/common/Locale'
import DoLogin from './DoLogin'

export default {
  name: 'Login',
  components: {
    LoginWrapper,
    DoLogin,
    Locale
  },
  computed: {
    ...mapState(['needChangePwd'])
  },
  watch: {
    needChangePwd (val) {
      this.checkNeedChangePwd()
    }
  },
  mounted () {
    this.checkNeedChangePwd()
  },
  methods: {
    checkNeedChangePwd () {
      if (this.needChangePwd) {
        this.$router.push('/change-pwd')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.locale {
  margin: 20px;
}
</style>
