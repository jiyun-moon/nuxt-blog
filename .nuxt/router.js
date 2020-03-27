import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6ae96470 = () => interopDefault(import('..\\client\\pages\\404.vue' /* webpackChunkName: "pages_404" */))
const _62fb089d = () => interopDefault(import('..\\client\\pages\\about\\index.vue' /* webpackChunkName: "pages_about_index" */))
const _12afc8ca = () => interopDefault(import('..\\client\\pages\\admin\\index.vue' /* webpackChunkName: "pages_admin_index" */))
const _88242ed2 = () => interopDefault(import('..\\client\\pages\\posts\\index.vue' /* webpackChunkName: "pages_posts_index" */))
const _7d0bbe9a = () => interopDefault(import('..\\client\\pages\\admin\\auth\\index.vue' /* webpackChunkName: "pages_admin_auth_index" */))
const _f7fb2ec2 = () => interopDefault(import('..\\client\\pages\\admin\\create\\index.vue' /* webpackChunkName: "pages_admin_create_index" */))
const _01629d9f = () => interopDefault(import('..\\client\\pages\\admin\\_postId\\index.vue' /* webpackChunkName: "pages_admin__postId_index" */))
const _d1f1aa3a = () => interopDefault(import('..\\client\\pages\\posts\\_id\\index.vue' /* webpackChunkName: "pages_posts__id_index" */))
const _79d7bf0a = () => interopDefault(import('..\\client\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/404",
    component: _6ae96470,
    name: "404"
  }, {
    path: "/about",
    component: _62fb089d,
    name: "about"
  }, {
    path: "/admin",
    component: _12afc8ca,
    name: "admin"
  }, {
    path: "/posts",
    component: _88242ed2,
    name: "posts"
  }, {
    path: "/admin/auth",
    component: _7d0bbe9a,
    name: "admin-auth"
  }, {
    path: "/admin/create",
    component: _f7fb2ec2,
    name: "admin-create"
  }, {
    path: "/admin/:postId",
    component: _01629d9f,
    name: "admin-postId"
  }, {
    path: "/posts/:id",
    component: _d1f1aa3a,
    name: "posts-id"
  }, {
    path: "/",
    component: _79d7bf0a,
    name: "index"
  }, {
    path: "*",
    component: _6ae96470,
    name: "pageNotFound"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
