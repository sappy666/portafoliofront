<template>
   <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
         <div class="carousel-item active">
            <img src="../assets/4.jpg" class="d-block w-100" alt="">
            <div class="carousel-caption d-none d-md-block">
               <h5>Encuentra a tu mejor amigo</h5>
               <!-- <p>Cambia tu vida</p> -->
            </div>
         </div>
         <div class="carousel-item">
            <img src="../assets/5.jpg" class="d-block w-100" alt="">
            <div class="carousel-caption d-none d-md-block">
               <h5>Cambia su vida</h5>
            </div>
         </div>
         <div class="carousel-item">
            <img src="../assets/6.jpg" class="d-block w-100" alt="">
            <div class="carousel-caption d-none d-md-block">
               <h5>Cambia la tuya</h5>
            </div>
         </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
      </button>
   </div>
   <div class="container">
      <div class="row">
         <div class="titulo py-5">
            <h2>Perritos esperando un hogar</h2>
         </div>
      </div>
      <div class="row">
         <div class="subtitulo px-0 px-lg-5">
            <p>Uno de los principales objetivos de Huellitas es que cada uno de sus rescatados sea adoptado y encuentre al fin un hogar definitivo donde sea tratado con respeto, dignidad y cariño.</p>
         </div>
      </div>
   </div>
   <div class="container mt-5">
      <div class="row justify-content-center py-5" v-if="(perros.length) == 0">
         <div class="col-auto">
            <fade-loader :loading="loading" :color="color" :size="size" class="mb-5"></fade-loader>
         </div>
      </div>
      <div class="row">
         <div class="col-lg-4 mb-5" v-for="perro in perros">
            <div class=" card mb-3 mx-auto"  >
               <img :src= "perro.img" class="card__img" alt="img">
               <div class="card-body">
                  <h5 class="card-title text-center">{{perro.nombre}}</h5>
                  <!-- <p class="card-text text-center">{{perro.descripcion}}</p> -->
               </div>
               <ul class="list-group list-group-flush">
                  <li class="list-group-item">{{perro.genero}}</li>
                  <li class="list-group-item">Edad: {{perro.edad }}</li>
                  <li class="list-group-item">Microchip: no tiene</li>
               </ul>
               <button type="button" data-bs-toggle="modal" data-bs-target="#modal--adopta" class=" btnInscribir p-2" :data-bs-nombre="perro.nombre">Adoptar</button>
            </div>
         </div>
      </div>
   </div>
   <!-- Modal -->
   <div class="modal fade" id="modal--adopta" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
         <div class="modal-content">
            <div class="modal-header">
               <h1 class="modal-title fs-5" id="modal--adopta-Label">Datos de adopción</h1>
               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
               <form>
                  <div class="mb-3">
                     <label for="recipient-name" class="col-form-label">Tu nueva bendicion es:</label>
                     <input type="text" class="form-control mb-3" id="recipient-name" readonly>
                  </div>
                  <div class="form-group">
                     <label for="name">Nombre y Apellido</label>
                     <input type="text" class="form-control mb-3" v-model="nombre" id="name" placeholder="Nombre y Apellido" required>
                  </div>
                  <div class="form-group">
                     <label for="mail">Tu correo</label>
                     <input type="email" class="form-control mb-3" v-model="mail" id="mail" placeholder="name@example.com" required>
                  </div>
                  <div class="form-group">
                     <label for="telefono">Tu teléfono</label>
                     <input type="text" class="form-control mb-3" v-model="number" id="telefono" placeholder="+569 9999 9999" required>
                  </div>
                  <div class="form-group">
                     <label for="direccion">Dirección</label>
                     <input type="text" class="form-control mb-3" v-model="direccion" id="direccion" placeholder="Tu dirección" required>
                  </div>
                  <!-- <label for="selection">¿Quieres recibir info sobre actividades y tours?</label>
                     <select class="form-control" id="selection">
                     <option>Si, por favor!</option>
                     <option>No, gracias, en otro momento.</option>
                     </select> -->
                  <button type="submit" class="enviar-btn" @click="adoptar()">Enviar</button>
               </form>
            </div>
            <!-- <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
               <button type="button" class="btn btn-primary">Aceptar</button>
               </div> -->
         </div>
      </div>
   </div>
   <section class="fundaciones container">
      <div class="row">
         <div class="titulo mt-5 mb-2 col">
            <h2>¿Quieres ver más mascotas en adopción?</h2>
         </div>
      </div>
      <div class="row">
         <div class="subtitulo mt-4 col">
            <p>Revisa en nuestras fundaciones amigas por mas animalitos.</p>
         </div>
      </div>
      <div class="container mt-3">
         <div class="row">
            <div class="col col-lg-4 mb-3">
               <a href="https://www.instagram.com/fundacionalmadegatocl/"><div class=" card mb-3 mx-auto">
                  <img src= "../assets/s1.png" class="card__img" alt="img">
                  <div class="card-body">
                     <h5 class="card-title text-center">Alma de gato</h5>
                     <p class="card-text text-center">Rehabilitación gatos adultos</p>
                  </div>
                  <!-- <a href=""><img src="../assets/logotipo-de-instagram.png" alt="" width="20"></a> -->
               </div></a>
            </div>
            <div class="col col-lg-4 mb-3">
              <a href="https://www.instagram.com/salvandohuellascl/"> <div class=" card mb-3 mx-auto">
                  <img src= "../assets/s2.png" class="card__img" alt="img">
                  <div class="card-body">
                     <h5 class="card-title text-center">Salvando Huellas</h5>
                     <p class="card-text text-center">Cachorros abandonados</p>
                  </div>
               </div> </a>
            </div>
            <div class="col col-lg-4 mb-3">
               <a href="https://www.instagram.com/refugiodhermes/"><div class=" card mb-3 mx-auto">
                  <img src= "../assets/s3.png" class="card__img" alt="img">
                  <div class="card-body">
                     <h5 class="card-title text-center">Refugio Dhermes</h5>
                     <p class="card-text text-center">Refugio para perros</p>
                  </div>
               </div></a>
            </div>
         </div>
      </div>
   </section>
</template>
<script>
   import FadeLoader from 'vue-spinner/src/FadeLoader.vue'
   // import {mapActions, mapState} from 'vuex' 
   
   export default {
       name: "Home-View",
       data() {
           return {
           perros: [],
           cantDatos: 10,
       }
       },
   
       components: {
           FadeLoader
       }, 
   
       async created(){
           try{
               const promesa = await fetch("https://dog.ceo/api/breeds/image/random/" + this.cantDatos);
               const promesaNombres = await fetch("https://randomuser.me/api/?results=" + this.cantDatos);
               let data = await promesa.json();
               let dataNombres = await promesaNombres.json();
   
               console.log(dataNombres);
               data.message.forEach((element, index )=> {
                   let sexo = "";
                   let edad = Math.trunc(dataNombres.results[index].dob.age/12);
                   if(dataNombres.results[index].gender == "female"){
                       sexo = "Hembra";
                   }
                   else{
                       sexo = "Macho";
                   }
                   this.perros.push({"nombre":dataNombres.results[index].name.title+ " " + dataNombres.results[index].name.first, "img": element, "genero": sexo, "edad": edad});
               });
               // console.log(this.perros);
           }
           catch(error){
               console.log(error)
           }
   
           
   const modalAdopta = document.getElementById('modal--adopta')
   if (modalAdopta) {
      modalAdopta.addEventListener('show.bs.modal', event => {
         // Button that triggered the modal
         const button = event.relatedTarget
         // Extract info from data-bs-* attributes
         const recipient = button.getAttribute('data-bs-nombre')
         // If necessary, you could initiate an Ajax request here
         // and then do the updating in a callback.
   
         // Update the modal's content.
         // const modalTitle = modalAdopta.querySelector('.modal-title')
         const modalBodyInput = modalAdopta.querySelector('.modal-body input')
   
         // modalTitle.textContent = `New message to ${recipient}`
         modalBodyInput.value = recipient
      })
   }
   },
   methods: {
      adoptar (){
         this.showAlert("Felicidades, estas un paso mas cerca")
      },    
      showAlert(texto1){
          Swal.fire({
          title:texto1,
          icon:"success",  
          confirmButtonText:"Ok",
          })
      }
   }
   }
   
</script>
<style scoped>
   .carousel-item{
   height: 600px;
   }
   .carousel-item img{
   width: 100%;
   height: 100%;
   object-fit: cover;
   }
   .carousel-caption{
   background-color: rgba(0, 0, 0, 0.385);
   border-radius: 1rem;
   max-width: 500px;
   margin-inline: auto;
   margin-bottom: 150px;
   }
   .carousel-item h5{
   font-family: 'Montserrat', sans-serif;
   font-size: 42px;
   }
   .carousel-item p{
   font-family: 'Montserrat', sans-serif;
   font-size: 18px;
   }
   .titulo{
   text-align: center;
   font-family: 'Montserrat', sans-serif;
   color: #444444;
   }
   .subtitulo{
   text-align: center;
   font-family: 'Montserrat', sans-serif;
   font-size: 18px;
   /* padding-inline: 15rem ; */
   color: #6b6b6b;
   }
   .card{
   font-family: 'Montserrat', sans-serif;
   border: solid 1px #DAB6FC!important;
   }
   .card__img{
   width: 100%;
   height: 16rem;
   object-fit: contain;
   }
   .card-body{
   padding-top: 7rem;
   }
   .btnInscribir {
   background-image: linear-gradient(315deg, #daceff 0%, #c797eb 74%);
   color: white;
   border: 1px solid #DAB6FC;
   letter-spacing: 3px;
   }
   .enviar-btn {
   background-color: #f0ecfc;
   background-image: linear-gradient(315deg, #c4b1ff 0%, #c797eb 74%);
   line-height: 42px;
   padding: 0;
   border: none;
   transition: all 0.3s ease;
   touch-action: manipulation;
   width: 15em;
   border-radius: 1rem;
   font-family: 'Montserrat', sans-serif;
   color: #f0ecfc;
   }
   .enviar-btn:hover{
   transform: scale(1.05);
   }
   .btnInscribir:hover,.enviar-btn:hover{
      background-image: linear-gradient(315deg, #ffcede 0%, #eb97ce 74%);
   }
   form, .modal{
   font-family: 'Montserrat', sans-serif;
   }
   .card{
   transition: all 0.5s ease;
   }
   .card:hover{
   transform: scale(1.05);  
   }
</style>
