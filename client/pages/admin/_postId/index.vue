<template lang="pug">
  .page-admin-create.container
    section.create-post-form
      h2.page-title 포스트 수정
      p 작성된 글을 수정합니다.
      post-form(:post="loadedPost", @submit="onSubmitted")
</template>
<script>
import axios from 'axios'
import postForm from '@/components/admin/postForm'

export default {
  head() {
    const postTitle = this.loadedPost
    return {
      title: postTitle.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${postTitle.title} - 포스트 수정 화면`
        }
      ]
    }
  },
  layout: 'admin',
  name: 'SinglePost',
  components: {
    postForm
  },
  computed: {
    loadedPost() {
      const id = this.$route.params.postId
      return this.$store.getters.loadedPosts.find(
        post => post.title.replace(/\?/, '') === id
      )
    }
  },
  methods: {
    onSubmitted(editedPost) {
      this.$store.dispatch('updatePost', editedPost).then(res => {
        this.$notify({
          group: 'admin-noti',
          title: '수정 성공!',
          text: '포스트 수정에 성공했습니다.',
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

.page-title
  margin-bottom: 0
  font-family: Changa, Sans-Serif
  letter-spacing: -0.03em

p
  margin-top: 0
  color: rgba(#000, 0.5)
  font-size: 13px
  letter-spacing: -0.06em
</style>
