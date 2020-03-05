<template>
  <main class="login-wrapper">
    <div class="login-form">
      <div class="logo bg-primay">
        <img src="@/assets/img/logo.png" />
      </div>
      <slot></slot>
    </div>
  </main>
</template>

<script>
export default {
  name: 'LoginWrapper'
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.login-wrapper {
  width: 100vw;
  height: 100vh;
  background: url(~@/assets/img/login-banner.svg) center center no-repeat;
  background-size: cover;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .login-form {
    background-color: $white;
    color: $dark;
    // margin: calc((100vh - 500px) / 2) auto 0;  避免使用计算函数
    padding: 40px;
    max-width: 500px;
    box-shadow: 0 0 10px rgba(61, 61, 61, 0.25);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    transform: translateY(-5%);
    width: 50vw;
    .logo {
      width: 100%;
      border-radius: 5px;
    }
  }
}
</style>
