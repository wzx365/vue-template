<template>
  <div class="home">
    <img alt="Vue logo" src="~@/assets/img/logo.png">
    <hello-world msg="Welcome to Your Vue.js App"/>
    <h2>{{ $t('home.helloworld') }}</h2>
    <h1>{{ hi }}</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import { loginApi } from '@/service'
// import axios from 'axios'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed: {
    hi () {
      return this.$t('home.helloworld')
    }
  },
  methods: {
    changeLanguage () {
      const pre = this.$i18n.locale
      const curr = pre === 'en' ? 'zh' : 'en'
      window.localStorage.setItem('language', curr)
      this.$i18n.locale = curr
    },
    connectWebsocket () {
      const host = window.location.host
      const socket = new WebSocket(`wss://${host}/v3/subscribe?sockId=1`)
      console.log(socket)
      socket.onopen = function (...args) {
        console.log('onopen', ...args)
      }
      socket.onmessage = function (...args) {
        console.log('onmessage', ...args)
      }
      socket.onerror = function (...args) {
        console.log('onerror', ...args)
      }
      socket.onclose = function (...args) {
        console.log('onclose', ...args)
      }
    },
    axiosCancel () {
      // const CancelToken = axios.CancelToken
      // let cancel
      // const source = axios.CancelToken.source()
      // 方案一
      // loginApi.getUiPl(null, {
      // // cancelToken: source.token,
      //   cancelToken: new CancelToken(function executor(c) {
      //   // An executor function receives a cancel function as a parameter
      //     cancel = c
      //   })
      // })
      //   .then(res => console.log(1, res))
      //   .catch(err => {
      //     console.log('取消了', err)
      //   })
      // cancel()
      // 方案二
      // axios.get('/v3/settings/ui-pl', {
      //   cancelToken: source.token
      // })
      // console.log(source, 111)
      // Promise.resolve().then(() => {
      //   source.cancel()
      // })
    }
  },
  mounted () {
    // this.axiosCancel()
  }
}
</script>
