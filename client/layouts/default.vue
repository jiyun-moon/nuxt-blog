<template>
  <div>
    <section class="intro" />
    <header-nav
      :nav-links="navLinks"
      @onNavMenuToggle="toggleMenu"
    />
    <header-nav-menu
      :nav-links="navLinks"
      :display="displayMenu"
      @onClose="closeMenu"
    />
    <nuxt/>
  </div>
</template>
<script>
import headerNav from '@/components/navigation/headerNav'
import headerNavMenu from '@/components/navigation/headerNavMenu'

export default {
  components: {
    headerNav,
    headerNavMenu
  },
  data() {
    return {
      displayMenu: false,
      navLinks: [
        {
          route: '/posts',
          text: 'posts'
        },
        {
          route: '/about',
          text: 'about'
        },
        {
          route: '/admin',
          text: 'admin'
        }
      ]
    }
  },
  methods: {
    toggleMenu() {
      this.displayMenu = !this.displayMenu
    },
    closeMenu() {
      this.displayMenu = false
    }
  }
}
</script>
<style lang="sass" scoped>
  @import "~assets/styles/config"

  .intro
    position: relative
    height: 200px
    margin-bottom: 20px
    padding: 30px
    background: darken($color, 40%) url("~assets/images/_bg.jpg") center
    background-size: cover
</style>
