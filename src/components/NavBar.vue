<template>
   <!-- Barra de navegación -->
   <!-- <div class="navbar">
     <div class="container-fluid d-flex align-items-center"> -->
       <!-- Logo -->
       <!-- <div class="me-5 py-4 px-5">
         <a href="../HomeView"><img src="../assets/logo.png" alt="" width="60"></a>
       </div> -->
 
       <!-- Mensaje de bienvenida -->
       <!-- <div class="d-flex flex-column" v-if="(loginTrue)">
         <p class="mb-0 ms-4"> ¡Bienvenido!</p>
         <p class="mb-0"> {{$store.state.usuarioConectado}}</p>
       </div> -->
 
       <!-- Menú de navegación -->
       <!-- <div class="d-flex ms-auto me-3">
         <nav>
           <ul id="list-contenedor" class="d-flex justify-content-around align-items-center">
             <router-link class="link-nav px-3" to="/HomeView" v-if="(loginTrue)">Inicio</router-link>
             <router-link class="link-nav px-3" to="/PerrosView" v-if="(loginTrue)">Perros</router-link>
             <router-link class="link-nav px-3" to="/GatosView" v-if="(loginTrue)">Gatos</router-link>
             <router-link class="link-nav px-3" to="/CasosView" v-if="(loginTrue)">Voluntario</router-link>
             <router-link class="link-nav px-3" to="/" v-if="(!loginTrue)">Login</router-link> -->
 
             <!-- Botón de logout -->
             <!-- <button type="button" class="btn-logout" data-bs-toggle="modal" data-bs-target="#exampleModal" v-if="(loginTrue)">
               Logout
             </button>
           </ul>
         </nav>
       </div>
     </div>
   </div> -->

  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid ">
      <!-- Logo -->
      <div class="py-3">
        <a href="../HomeView"><img src="../assets/logo.png" alt="" width="60"></a>
      </div>
      <!-- Mensaje de bienvenida -->
      <div id="mensaje--bienvenida" class="ms-lg-5" v-if="(loginTrue)">
        <p class="mb-0 text-center"> ¡Bienvenido!</p>
        <p class="mb-0 text-center"> {{$store.state.usuarioConectado}}</p>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav me-3  ms-auto">
          <router-link class="link-nav px-3" to="/HomeView" v-if="(loginTrue)">Inicio</router-link>
          <router-link class="link-nav px-3" to="/PerrosView" v-if="(loginTrue)">Perros</router-link>
          <router-link class="link-nav px-3" to="/GatosView" v-if="(loginTrue)">Gatos</router-link>
          <router-link class="link-nav px-3" to="/CasosView" v-if="(loginTrue)">Voluntario</router-link>
          <router-link class="link-nav px-3" to="/" v-if="(!loginTrue)">Login</router-link>
 
          <!-- Botón de logout -->
          <button type="button" class="btn-logout" data-bs-toggle="modal" data-bs-target="#exampleModal" v-if="(loginTrue)">Logout</button>
        </div>
      </div>
    </div>
  </nav>
   <!-- Modal de confirmación de logout -->
   <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
     <div class="modal-dialog">
       <div class="modal-content">
         <div class="modal-header">
           <h1 class="modal-title fs-5" id="exampleModalLabel">Logout</h1>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div class="modal-body">
           ¿Esta seguro que desea cerrar la sesión?
           <p>{{$store.state.usuarioConectado}}</p>
         </div>
         <div class="modal-footer">
           <button type="button" class="btn btn-no" data-bs-dismiss="modal">No</button>
           <!-- Botón para confirmar el logout -->
           <button type="button" v-on:click="logout" class="btn btn-si" data-bs-dismiss="modal">Si</button>
         </div>
       </div>
     </div>
   </div>
 </template>
<script>
   import { mapGetters, mapMutations } from 'vuex';
   import { auth } from "@/auth/auth.service";
   
   export default {
       name: 'NavBar',
        computed:{
       ...mapGetters(['loginTrue']),
        },
       methods:{
           ...mapMutations(['cambiaEstadoLoginFalse']),
           async logout() {
               try {
                   await auth.signOut();
                   this.$store.state.cursos=[]
                   this.$store.state.usuarioConectado=''
                   this.cambiaEstadoLoginFalse();
                   this.$router.push('/');
                   
               } catch(error){
                   console.log(error)
               }
           }
       }
   };
   
</script>
<style scoped>
   #login{
   cursor: pointer;
   }
   .navbar{
   background-color: #DAB6FC;
   color: azure;
   padding: .5rem 0.5rem;
   font-size: 16px;
   font-family: 'Montserrat', sans-serif;
   }
   .link-nav{
   text-decoration: none;
   color: azure;
   transition: all 0.5s ease;
   }
   .link-nav:hover{
   color: #F57ED2;
   transform: scale(1.2);
   }
   .btn-logout{
   text-decoration: none;
   color: azure;
   border: none;
   transition: all 0.5s ease;
   background-color: #F57ED2;
   }
   .btn-logout:hover{
   transform: scale(1.2);
   }
   .btn.btn-no{
   background-color: #82daf0;
   color: azure;
   }
   .btn.btn-no:hover{
   background-color: #71c3d7;
   color: azure;
   }
   .btn.btn-si{
   background-color: #f082bf;
   color: azure;
   }
   .btn.btn-si:hover{
   background-color: #d676ab;
   color: azure;
   }
   #exampleModal{
   font-family: 'Montserrat', sans-serif;
   }
   /* @media screen and (min-width: 992px){
    #mensaje--bienvenida{
      margin-left: 400px;
    }
   } */
</style>
