<template lang="pug">
.page-admin-create.container
  section.create-post-form
    h2.page-title 포스트 생성
    p 새로운 글을 작성합니다.
    post-form(@submit="onSubmitted")
</template>

<script>
import axios from 'axios'
import postForm from '@/components/admin/postForm'

export default {
  head: {
    title: '관리자: 포스트생성 - 바나나케찹의 기술블로그',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '블로그 메인화면 - 블로그 글 목록입니다.'
      }
    ]
  },
  layout: 'admin',
  components: {
    postForm
  },
  methods: {
    onSubmitted(newPost) {
      this.$store.dispatch('createPost', newPost).then(() => {
        this.$notify({
          group: 'admin-noti',
          title: '등록 성공!',
          text: '새 포스트 등록에 성공했습니다.',
          duration: 2000,
          speed: 400,
          position: 'bottom right'
        })
        // 1초 뒤, 관리자 메인 페이지로 이동
        setTimeout(() => {
          this.$router.push('/admin')
        }, 1000)
      })
    }
  }
}
</script>

<style lang="sass" scoped>
@import "~assets/styles/config"

.page-admin
  padding: 20px

.create-post
  border-bottom: 1px solid rgba(#000, 0.2)
  padding-bottom: 30px
</style>
