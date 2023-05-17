<template>
  <NavBar />
  <router-view />
  <Footer/>
  <Whatsapp />
  <!-- <router-view /> -->
</template>
<script>
  import NavBar from "@/components/NavBar.vue"
  import Footer from "@/components/Footer.vue"
  import Whatsapp from "@/components/Whatsapp.vue"
  import LoginView from "@/views/LoginView.vue"
  import HomeView from "@/views/HomeView.vue"
  import PerrosView from "@/views/PerrosView.vue"
  import GatosView from "@/views/GatosView.vue"
  
  
  export default {
    name: 'App',
    components: {
      NavBar,
      Footer,
      Whatsapp,
      LoginView,
      HomeView,
      PerrosView,
      GatosView
    }
  }
</script>
<style>
</style>
