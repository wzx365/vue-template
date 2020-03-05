<template>
  <el-form class="form" status-icon :model="form" :rules="rules" ref="form">
    <el-form-item prop="loginName">
      <el-input v-model="form.loginName" :placeholder="$t('login.loginNamePlaceholder')">
        <cm-svg slot="prefix" icon="user"/>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        prefix-icon="el-icon-key"
        v-model="form.password"
        :placeholder="$t('login.passwordPlaceholder')"
        show-password
      ></el-input>
    </el-form-item>
    <el-form-item prop="imgCode">
      <el-input v-model="form.imgCode" :placeholder="$t('login.imgCodePlaceholder')">
        <cm-svg slot="prefix" icon="qrcode"/>
      </el-input>
    </el-form-item>
    <el-checkbox v-model="form.remember" class="remember">
      {{
      $t('login.remember')
      }}
    </el-checkbox>
    <el-button type="primary" class="submit-btn" @click="handleSubmit">
      {{
      $t('login.loginText')
      }}
    </el-button>
  </el-form>
</template>

<script>
export default {
  name: 'doLogin',
  data () {
    return {
      remember: false,
      form: {
        loginName: '',
        password: '',
        imgCode: ''
      },
      rules: {
        loginName: [
          {
            required: true,
            message: this.$i18n.t('login.loginNameValidate'),
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: this.$i18n.t('login.passwordValidate'),
            trigger: 'blur'
          }
        ],
        imgCode: [
          {
            required: true,
            message: this.$i18n.t('login.imgCodeValidate'),
            trigger: 'blur'
          },
          {
            min: 4,
            max: 4,
            message: this.$i18n.t('login.imgCodeLengthValidate'),
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$refs['form'].validate(valid => {
        if (valid) {
          // 校验通过执行登录
        }
      })
      this.$router.push('/manage')
    }
  },
  watch: {
    '$i18n.locale': function (val) {
      this.rules = {
        loginName: [
          {
            required: true,
            message: this.$i18n.t('login.loginNameValidate'),
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: this.$i18n.t('login.passwordValidate'),
            trigger: 'blur'
          }
        ],
        imgCode: [
          {
            required: true,
            message: this.$i18n.t('login.imgCodeValidate'),
            trigger: 'blur'
          },
          {
            min: 4,
            max: 4,
            message: this.$i18n.t('login.imgCodeLengthValidate'),
            trigger: 'blur'
          }
        ]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/variables.scss';
.form {
  line-height: 50px;
  width: 70%;
}
.el-form {
  padding-right: 0;
}
.submit-btn {
  margin-top: 20px;
  width: 100%;
}
.remember {
  text-align: left;
}
// /deep/ .el-form-item--medium .el-form-item__label {
//   display: none;
// }
</style>