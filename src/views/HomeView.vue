<template>
   <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators">
         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
         <div class="carousel-item active">
            <img src="../assets/12.jpg" class="d-block w-100" alt="">
            <div class="carousel-caption d-none d-md-block">
               <h5>Encuentra a tu mejor amigo</h5>
               <!-- <p>Cambia tu vida</p> -->
            </div>
         </div>
         <div class="carousel-item">
            <img src="../assets/2.jpg" class="d-block w-100" alt="">
            <div class="carousel-caption d-none d-md-block">
               <h5>Cambia su vida</h5>
            </div>
         </div>
         <div class="carousel-item">
            <img src="../assets/1.jpg" class="d-block w-100" alt="">
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
            <h2>Conoce las formas de ayudar</h2>
         </div>
      </div>
      <div class="row">
         <div class="subtitulo mb-5">
            <p>Hay distintas maneras de contribuir al rescate animal, puedes encontrar la que mas te acomode. </p>
         </div>
      </div>
   </div>
   <section id="servicios" class="container">
      <div class="row justify-content-around">
         <div class="col-10 col-md-3 col text-center">
            <a href="../PerrosView"><img src="../assets/i1.png" class="py-4" alt="" width="50"></a>
            <h2>Adopta</h2>
            <p>Adopta es un acto de amor, entrega y compasión. Puedes darles la oportunidad de cambiar su vida junto a ti.</p>
         </div>
         <div class="col-10 col-md-3 col text-center">
           <a href="https://app.payku.cl/suscripcion/index?idplan=1773&verif=34d0af4f"><img src="../assets/i2.png" class="py-4" alt="" width="50"></a>
            <h2>Dona</h2>
            <p>Puedes aportar desde los 500 pesos, todo suma y sirve para seguir rescatando animalitos de las calles. </p>
         </div>
         <div class="col-10 col-md-3 col text-center">
            <a href="../CasosView"><img src="../assets/i3.png" class="py-4" alt="" width="50"></a>
            <h2>Se Voluntario</h2>
            <p>Puedes visitar a nuestros pequeños, ayudarnos a trasladarlos y ser parte de la comunidad Ayuda callejeros.</p>
         </div>
      </div>
   </section>
   <section class="fundaciones container">
      <div class="row">
         <div class="titulo mt-5 mb-2 col">
            <h2>Fundaciones</h2>
         </div>
      </div>
      <div class="row">
         <div class="subtitulo mt-4 col">
            <p>Hay distintas maneras de contribuir al rescate animal, puedes encontrar la que mas te acomode. </p>
         </div>
      </div>
      <div class="container mt-3">
         <div class="row justify-content-center py-3">
            <div class="col-auto">
               <fade-loader :loading="loading" :color="color" :size="size" class="mb-5"></fade-loader>
            </div>
         </div>
         <div class="row">
            <div class="col col-lg-4 mb-3">
               <div class=" card mb-3 mx-auto">
                  <img src= "../assets/s1.png" class="card__img" alt="img">
                  <div class="card-body">
                     <h5 class="card-title text-center">Alma de gato</h5>
                     <p class="card-text text-center">Rehabilitación gatos adultos</p>
                  </div>
                  <a href="https://www.instagram.com/fundacionalmadegatocl/"><button class=" btnInscribir p-2">Ver Instagram</button></a>
               </div>
            </div>
            <div class="col col-lg-4 mb-3">
               <div class=" card mb-3 mx-auto">
                  <img src= "../assets/s2.png" class="card__img" alt="img">
                  <div class="card-body">
                     <h5 class="card-title text-center">Salvando Huellas</h5>
                     <p class="card-text text-center">Cachorros abandonados</p>
                  </div>
                  <a href="https://www.instagram.com/salvandohuellascl/"><button class=" btnInscribir p-2">Ver Instagram</button></a>
               </div>
            </div>
            <div class="col col-lg-4 mb-3">
               <div class=" card mb-3 mx-auto">
                  <img src= "../assets/s3.png" class="card__img" alt="img">
                  <div class="card-body">
                     <h5 class="card-title text-center">Refugio Dhermes</h5>
                     <p class="card-text text-center">Refugio para perros</p>
                  </div>
                  <a href="https://www.instagram.com/refugiodhermes/"><button class=" btnInscribir p-2">Ver Instagram</button></a>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>
<script>
   export default {
   name: "Home-View",
     
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
   }
   .subtitulo{
   text-align: center;
   font-family: 'Montserrat', sans-serif;
   font-size: 18px;
   /* padding-inline: 15rem ; */
   }
   .card{
   text-align: center;
   }
   .btnInscribir {
   background-image: linear-gradient(315deg, #c4b1ff 0%, #c797eb 74%);
   color: white;
   border: 1px solid #DAB6FC;
   letter-spacing: 3px;
   margin-inline: auto;
   width: 100%;
   padding-bottom: 0%;
   }
   .btnInscribir:hover {
      background-image: linear-gradient(315deg, #ffcede 0%, #eb97ce 74%);
   }
   #servicios{
   background-color: #efdfff;
   border-radius: 3rem;
   }
</style>
