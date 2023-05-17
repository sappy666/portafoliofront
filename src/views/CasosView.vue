<template>
   <!-- Template para la vista de información sobre voluntariado -->
   <section class="fotos">
      <div class="text-center mt-5">
      <img src="../assets/13.jpg" alt="" width="300">
      <!-- <img src="../assets/14.jpg" alt="" width="300">
      <img src="../assets/15.jpg" alt="" width="300"> -->
      </div>
      <!-- Título de la sección -->
      <div class="container">
         <div class="row">
            <div class="titulo py-5">
               <h2>SÉ VOLUNTARIO</h2>
            </div>
         </div>
         <!-- Subtítulo y texto principal -->
         <div class="row">
            <div class="subtitulo mb-5">
               <p>
                  <!-- Información sobre el voluntariado -->
                  Los voluntarios son el corazón de nuestro quehacer. Todos los domingos se hacen operativos en el refugio abiertos a voluntarios. <strong>Ser voluntario significa regalar tu tiempo y tu trabajo en favor de nuestros animales</strong>. Significa participar en las tareas básicas de limpieza de caniles, paseo de nuestros pequeños y labores de reparación de infraestructura, entre otros. 
                  <br><br>
                  Pero por sobre todo, significa explorar en una experiencia que tiene infinitas posibilidades. Somos una corporación abierta y diversa, donde los distintos talentos, disponibilidades e intereses tienen cabida. En el refugio y en la Corporación hay mucho que hacer, en distintos ámbitos.
                  <!-- Título "¿Cómo puedo ser voluntario?" y respuesta -->
               <div class="titulo--2">¿Cómo puedo ser voluntario?</div>
               Inscríbete en esta página o envía un correo a <strong>voluntarios@huellitas.cl</strong> Recibirás toda la información necesaria. Es importante que confirmes tu asistencia a más tardar el viernes para poder coordinar de manera adecuada el operativo, contabilizando las personas que asistirán.
               <!-- Título "Si no tengo auto ¿puedo ser voluntario?" y respuesta -->
               <div class="titulo--2">Si no tengo auto ¿puedo ser voluntario?</div>
               <strong>Sí.</strong> Para nosotros es muy valioso cada voluntario que puede llegar al punto de encuentro en auto, justamente porque cada domingo nos distribuimos entre los autos disponibles y los voluntarios a pie.
               </p>
            </div>
         </div>
      </div>
   </section>
   <div class="text-center">
   <button type="button" data-bs-toggle="modal" data-bs-target="#modal--voluntario" class=" btnInscribir p-2" >Inscribir</button></div>
         <!-- Modal -->
   <div class="modal fade" id="modal--voluntario" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
         <div class="modal-content">
            <div class="modal-header">
               <h1 class="modal-title fs-5" id="modal--adopta-Label">Datos del Voluntario</h1>
               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
               <form>
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
</template>

<script>
   export default {
   name: "Home-View",
   }
   
</script>
<style scoped>
.fotos img{
   border-radius: 20rem;
}
   .titulo--2{
   text-align: center;
   font-family: 'Montserrat', sans-serif;
   font-size: 1.6rem;
   padding-top: 2rem;
   padding-bottom: 1.6rem;
   color: blueviolet;
   }
   .titulo{
   text-align: center;
   font-family: 'Montserrat', sans-serif;
   }
   .subtitulo{
   text-align: center;
   font-family: 'Montserrat', sans-serif;
   font-size: 18px;
   /* padding-inline: 15rem ; */
   }

   .modal{
   font-family: 'Montserrat', sans-serif;
   }
   .modal form-group{
   padding-top: 2rem;
   }

   .btnInscribir,.enviar-btn {
   background-image: linear-gradient(315deg, #c4b1ff 0%, #c797eb 74%);
   color: white;
   border: 1px solid #DAB6FC;
   padding: 1rem;
   letter-spacing: 3px;
   border-radius: .5rem;
   font-family: 'Montserrat', sans-serif;
   }
   .btnInscribir:hover, .enviar-btn:hover{
      background-image: linear-gradient(315deg, #ffcede 0%, #eb97ce 74%);
   }
</style>
