<template>
  <el-form class="form" status-icon :model="form" :rules="rules" ref="form">
    <el-form-item label=" " prop="oldPassword">
      <el-input
        prefix-icon="iconfont iconmima1"
        v-model="form.oldPassword"
        :placeholder="$t('changePassword.oldPasswordPlaceholder')"
        show-password
      ></el-input>
    </el-form-item>
    <el-form-item label=" " prop="newPassword">
      <el-input
        prefix-icon="iconfont iconmima"
        v-model="form.newPassword"
        :placeholder="$t('changePassword.newPasswordPlaceholder')"
        show-password
      ></el-input>
    </el-form-item>
    <el-form-item label=" " prop="confirmPassword">
      <el-input
        prefix-icon="iconfont iconmimaqueren"
        v-model="form.confirmPassword"
        :placeholder="$t('changePassword.confirmPasswordPlaceholder')"
        show-password
      ></el-input>
    </el-form-item>

    <el-button class="submitBtn">{{
      $t('changePassword.submitText')
    }}</el-button>
  </el-form>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'DoChangePwd',
  data () {
    return {
      form: {
        oldPassWord: '',
        newPassword: '',
        confirmPassword: ''
      },
      rules: {
        oldPassword: [
          {
            required: true,
            message: this.$i18n.t('changePassword.oldPasswordPlaceholder'),
            trigger: 'blur'
          }
        ],
        newPassword: [
          {
            required: true,
            validator: this.validatePwd,
            trigger: 'blur'
          }
        ],
        confirmPassword: [
          {
            required: true,
            validator: this.validateConfirmPwd,
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    ...mapMutations(['setChangePwd']),
    /* eslint-disable brace-style */
    validatePwd (rule, value, callback) {
      let msg = ''
      let i18n = this.$i18n
      let regLength = /^.{8,20}$/
      let regUnit = /(?!^(\d+|[a-zA-Z]+|[_~!@#$%^&*?]+)$)^[\w~!@#$%^&*?]{8,20}$/
      if (value === '') {
        msg = i18n.t('changePassword.newPasswordValidate')
      } else if (!regLength.test(value)) {
        msg = i18n.t('changePassword.newPasswordLengthValidate')
      } else if (!regUnit.test(value)) {
        msg = i18n.t('changePassword.newPasswordUnitValidate')
      }
      callback(msg)
    },
    validateConfirmPwd (rule, value, callback) {
      let i18n = this.$i18n
      if (value === '') {
        callback(new Error(i18n.t('changePassword.confirmPasswordValidate')))
      } else if (value !== this.form.newPassword) {
        callback(new Error(i18n.t('changePassword.passwordDiffValidate')))
      } else {
        callback()
      }
    }
    /* eslint-enable brace-style */
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/variables.scss';
.form {
  line-height: 50px;
  width: 70%;
  margin-top: 50px;
}
.el-form {
  padding-right: 0;
}
.submitBtn {
  margin-top: 20px;
  width: 100%;
  background: $theme;
  color: $white;
}
// /deep/ .el-form-item--medium .el-form-item__label {
//   display: none;
// }
</style>
