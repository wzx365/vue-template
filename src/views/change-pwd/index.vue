<template>
  <login-wrapper>
    <do-change-pwd/>
  </login-wrapper>
</template>

<script>
import LoginWrapper from '@/components/login/Wrapper.vue'
import DoChangePwd from './DoChangePwd.vue'

export default {
  name: 'ChangePwd',
  components: {
    LoginWrapper,
    DoChangePwd
  }
}
</script>
