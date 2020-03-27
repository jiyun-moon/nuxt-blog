import Vuex from 'vuex'
import axios from 'axios'

// 스토어 생성 함수 정의
const createStore = () => {
  // Vuex.Store 객체 생성 반환
  return new Vuex.Store({
    // 상태(데이터)
    state: {
      loadedPosts: [],
      token: null
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
      token(state) {
        return state.token
      }
    },
    // 쓰기(동기 처리)
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },
      createPost(state, createdPost) {
        state.loadedPosts.push(createdPost)
      },
      updatePost(state, updatePost) {
        const idx = state.loadedPosts.findIndex(
          post => post.id === updatePost.id
        )
        state.loadedPosts[idx] = updatePost
      },
      setToken(state, token) {
        // console.log('토큰저장', token)
        state.token = token
      }
    },
    // 액션(비동기 처리 ⟹ 쓰기 커밋)
    actions: {
      // 액션에 nuxtServerInit 메서드를 추가하면
      // 서버에서 전달 받은 데이터를 초기화 과정에서 처리
      async nuxtServerInit({ commit }, { app }) {
        try {
          const data = await app.$axios.$get('/posts.json')
          const postsList = []
          for (let key in data) {
            postsList.push({ ...data[key], id: key })
          }
          // console.log('postsList', postsList)
          commit('setPosts', postsList)
        } catch (e) {
          console.error(e)
        }
      },
      setPosts({ commit }, posts) {
        commit('setPosts', posts)
      },
      createPost({ commit }, createdPost) {
        createdPost.createdDate = new Date().toLocaleString()
        createdPost.updatedDate = createdPost.createdDate
        // Firebase 데이터베이스와 통신
        return this.$axios
          .$post(`/posts.json?auth=${this.getters.token}`, createdPost)
          .then(res => {
            // 통신이 성공하면 뮤테이션에 커밋
            commit('createPost', { ...createdPost, id: data.name })
          })
          .catch(e => console.error(e))
      },
      updatePost({ commit }, updatePost) {
        updatePost.updatedDate = new Date().toLocaleString()

        return this.$axios
          .$put(
            `/posts/${updatePost.id}.json?auth=${this.getters.token}`,
            updatePost
          )
          .then(data => {
            commit('updatePost', updatePost)
          })
          .catch(e => console.error(e))
      },
      authUser({ commit }, authData) {
        const API_KEY = process.env.APIKey
        // this.isLogin ⟹ authData.isLogin 변경
        const authURL = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/${
          !authData.isLogin ? 'signupNewUser' : 'verifyPassword'
        }?key=${API_KEY}`

        // axios 프로미스(Promise) 반환
        return this.$axios
          .$post(authURL, {
            // this.email ⟹ authData.email 변경
            email: authData.email,
            // this.password ⟹ authData.password 변경
            password: authData.password,
            returnSecureToken: true
          })
          .then(res => {
            // 통신에 성공하면 토큰을 저장하는 setToken 뮤테이션 메서드를 실행
            commit('setToken', res.idToken)
            // console.log('통신성공')
          })
          .catch(e => console.error(e))
      }
    }
  })
}

// createStore 함수 모듈 기본으로 내보내기
export default createStore
