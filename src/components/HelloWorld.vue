<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="num in list" :key="num">{{ num }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      list: [1, 2, 3]
    }
  },
  computed: {
    count () {
      return this.list.length
    }
  },
  mounted () {
    // console.log(123)
    this.getSum(1, 2)
  },
  methods: {
    getSum (a, b) {
      return a + b
    },
    init () {
      return true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
