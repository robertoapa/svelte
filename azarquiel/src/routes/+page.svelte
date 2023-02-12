<script></script>

<main>
  <div class="tarjeta1 container d-flex justify-content-evenly w-75">
    <div
      class="text-center prueba fade-in card d-flex justify-content-center flex-column"
      style="width: 18rem; height:20rem"
    >
      <img src="img/videojuegoslogo.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Videojuegos y Realidad Virtual</h5>
        <p class="card-text mb-5">
          Curso de Especialización. Desarrollo de Videojuegos y Realidad Virtual
        </p>
        <div class="boton">
          <h3>
            <a class="enlace" href="videojuegos"><span>ver pagina</span></a>
          </h3>
        </div>
      </div>
    </div>
    <div
      class="text-center card d-flex justify-content-center flex-column"
      style="width: 18rem; height:20rem"
    >
      <img src="img/logociber.jpg" class="card-img-top" alt="ciberseguridad" />
      <div class="card-body">
        <h5 class="card-title">Ciberseguridad</h5>
        <p class="card-text mb-5">
          Curso de Especialización en Ciberseguridad en Entornos de las
          Tecnologías de la Información
        </p>
        <div class="boton">
          <h3>
            <a class="enlace" href="ciberseguridad"><span>ver pagina</span></a>
          </h3>
        </div>
      </div>
    </div>
  </div>
</main>



<style>
  @media(max-width:576px){
    .card-text{
      display: none;
    }
    .tarjeta1{
      width: 100% !important;
    }


  }

  .prueba{
    animation-name: aparece;
    animation-duration: 2s;
  }

  main {
    margin-top: 2rem;
  }
  img {
    height: 50%;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    object-fit: cover;
    border-radius: 0.3rem;
  }

  .card {
    border: 0px;
    height: 20rem !important; 
  }

   .card:hover {
    background-color: rgba(235, 228, 228, 0.603);
  }


  .tarjeta1 {
    animation-name: slideizq;
    animation-duration: 5s;
  }

  @keyframes slideizq {
    from {
      
    
      opacity: 0;
    }
  }

  @keyframes aparece{
    from{
      margin-right: 25%;
      width: 18rem !important;
      height: 20rem !important;
    }
  }

  .boton {
    position: absolute;
    color: #343434;
    border-radius: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0;
    right: 0;
    left: 0;
    
  }
  .boton h1 {
    border-radius: 0.3rem;
    line-height: 1.4;
    word-spacing: 3px;
    max-width: 45rem;
    
  }
  .boton .enlace {
    display: inline-block;
    color: #343434;
    transition: color 350ms, text-shadow 350ms;
    text-decoration: none;
    position: relative;
    z-index: 0;
  }
  .boton .enlace::after {
    border-radius: 0.3rem;

    position: absolute;
    z-index: -1;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    content: "";
    width: 100%;
    height: 3px;
    background-color: #1380df;
    transition: all 250ms;
  }
  .boton .enlace:hover {
    color: white;
    
  }
  .boton .enlace:hover::after {
    height: 105%;
    width: 105%;
  } 
  
</style>