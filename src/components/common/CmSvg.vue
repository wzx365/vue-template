<template>
  <svg @click="handleClick" class="icon svg-icon" aria-hidden="true">
    <use :xlink:href="'#icon-' + icon"></use>
  </svg>
</template>

<script>
export default {
  name: 'CmSvg',
  props: {
    icon: {
      type: String,
      isRequired: true
    }
  },
  methods: {
    handleClick () {
      this.$emit('click', ...arguments)
    }
  }
}
</script>

<style>

</style>
