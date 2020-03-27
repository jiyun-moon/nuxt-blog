<template lang="pug">
.page-admin-auth.container
  form.auth-form(@submit.prevent="onSubmit")
    ui-input(
      type="email",
      uniqueId="email",
      v-model="email") 이메일 주소
    ui-input(
      type="password",
      uniqueId="password",
      v-model="password") 비밀번호
    .button-group(role="group")
      ui-button(style="margin-right: 10px")
        | {{ isLogin ? '로그인' : '회원가입' }}
      //- ui-button(
      //-   type="button",
      //-   styles="inverted",
      //-   @click="isLogin = !isLogin"
      //- )
      //-   | {{ '"' + (isLogin ? '회원가입' : '로그인') + '" 폼으로 변경"' }}
</template>

<script>
export default {
  head: {
    title: '인증페이지 - 바나나케찹의 기술블로그',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '사용자 인증화면입니다.'
      }
    ]
  },
  layout: 'admin',
  data() {
    return {
      isLogin: true,
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch('authUser', {
          isLogin: this.isLogin,
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$notify({
            group: 'admin-noti',
            title: '로그인 성공!',
            type: 'success',
            text: '사용자 로그인에 성공했습니다.',
            duration: 2000,
            speed: 400
          })
          setTimeout(() => {
            this.$router.push('/admin')
          }, 1000)
        })
    }
  }
}
</script>

<style lang="sass" scoped>
.auth-form
  width: 80%
  margin:
    left: auto
    right: auto

.button-group
  margin-top: 30px
</style>
