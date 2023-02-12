<script>
</script>

<main class="container p-2" id="principal">
  <div class="titulo">
    <h1 class="text-light text-center">
      Curso de Especialización en Ciberseguridad en Entornos de las Tecnologías
      de la Información
    </h1>
  </div>

  <div class="container-fluid mt-2">
    <div class="row">
      <!-- <div class="col-lg-6 p-3">
          <img  src="img/realidadVirtual.jpg" alt="imagen videojuegos" />
        </div> -->
      <div
        id="carouselExampleIndicators"
        class="imagenes col-lg-12 carousel slide"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          />
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <!-- <img src="img/ciber2.jpg" class="d-block w-100" alt="..." /> -->
            <!-- svelte-ignore a11y-media-has-caption -->
    
            <video autoplay loop class="d-block w-100" alt="video">
              <source src="img/lineas.mp4" type="video/mp4"/>
            </video>
          </div>
          <div class="carousel-item">
            <img src="img/ciber1.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="img/ciber3.jpg" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true" />
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true" />
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div class="col-lg-12 p-3">
        <table class=" table table-striped shadow">
          <thead>
            <tr>
              <th class="p-3">Módulos Profesionales</th>
              <th class="p-3">Horas Anuales</th>
              <th class="p-3">Horas Semanales</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>5021. Incidentes de ciberseguridad</td>
              <td>120</td>
              <td>5</td>
            </tr>
            <tr>
              <td>5022. Bastionado de redes y sistemas</td>
              <td>185</td>
              <td>8</td>
            </tr>
            <tr>
              <td>5023. Puesta en producción segura</td>
              <td>120</td>
              <td>5</td>
            </tr>
            <tr>
              <td>5024. Análisis forense informático</td>
              <td>120</td>
              <td>5</td>
            </tr>
            <tr>
              <td>5025. Hacking ético</td>
              <td>120</td>
              <td>5</td>
            </tr>
            <tr>
              <td>5026. Normativa de ciberseguridad</td>
              <td>55</td>
              <td>2</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td class="text-end">Total</td>
              <td>720</td>
              <td>30</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>

    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            ¿QUÉ COMPETENCIA GENERAL TIENE EL CURSO DE ESPECIALIZACIÓN?
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            La competencia general de este curso de especialización consiste en
            definir e implementar estrategias de seguridad en los sistemas de
            información realizando diagnósticos de ciberseguridad, identificando
            vulnerabilidades e implementando las medidas necesarias para
            mitigarlas aplicando la normativa vigente y estándares del sector,
            siguiendo los protocolos de calidad, de prevención de riesgos
            laborales y respeto ambiental.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            RELACIÓN DE CUALIFICACIONES Y UNIDADES DE COMPETENCIA DEL CATÁLOGO
            NACIONAL DE CUALIFICACIONES
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            La competencia general de este curso de especialización consiste en
            diseñar y desarrollar videojuegos para diferentes dispositivos y
            plataformas, garantizando la experiencia del usuario, utilizando
            herramientas de última generación que permitan actuar en todas las
            fases de su desarrollo, así como aplicaciones interactivas de
            realidad virtual y aumentada.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            ¿QUIÉN PUEDE ACCEDER A ESTAS ENSEÑANZAS?
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <ul>
              <li>
                Título de Técnico Superior en Administración de Sistemas
                Informáticos en Red establecido por el Real Decreto 1629/2009,
                de 30 de octubre.
              </li>
              <li>
                Título de Técnico Superior en Desarrollo de Aplicaciones
                Multiplataforma, establecido por el Real Decreto 450/2010, de 16
                de abril.
              </li>
              <li>
                Título de Técnico Superior en Desarrollo de Aplicaciones Web,
                establecido por el Real Decreto 686/2010, de 20 de mayo.
              </li>
              <li>
                Título de Técnico Superior en Sistemas de Telecomunicaciones e
                Informáticos, establecido por el Real Decreto 883/2011, de 24 de
                junio.
              </li>
              <li>
                Título de Técnico Superior en Mantenimiento Electrónico
                establecido por el Real Decreto 1578/2011, de 4 de noviembre
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading5">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse5"
            aria-expanded="false"
            aria-controls="collapse5"
          >
            ¿QUÉ VOY A APRENDER?
          </button>
        </h2>
        <div
          id="collapse5"
          class="accordion-collapse collapse"
          aria-labelledby="heading5"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <ul>
              <li>
                Elaborar e implementar planes de prevención y concienciación en
                ciberseguridad en la organización, aplicando la normativa
                vigente.
              </li>
              <li>
                Detectar e investigar incidentes de ciberseguridad,
                documentándolos e incluyéndolos en los planes de securización de
                la organización.
              </li>
              <li>
                Diseñar planes de securización contemplando las mejores
                prácticas para el bastionado de sistemas y redes.
              </li>
              <li>
                Configurar sistemas de control de acceso y autenticación en
                sistemas informáticos, cumpliendo los requisitos de seguridad y
                minimizando las posibilidades de exposición a ataques.
              </li>
              <li>
                Diseñar y administrar sistemas informáticos en red y aplicar las
                políticas de seguridad establecidas, garantizando la
                funcionalidad requerida con un nivel de riesgo controlado.
              </li>
              <li>
                Analizar el nivel de seguridad requerido por las aplicaciones y
                los vectores de ataque más habituales, evitando incidentes de
                ciberseguridad.
              </li>
              <li>
                Implantar sistemas seguros de desplegado de software con la
                adecuada coordinación entre los desarrolladores y los
                responsables de la operación del software.
              </li>
              <li>
                Realizar análisis forenses informáticos analizando y registrando
                la información relevante relacionada.
              </li>
              <li>
                Detectar vulnerabilidades en sistemas, redes y aplicaciones,
                evaluando los riesgos asociados.
              </li>
              <li>
                Definir y aplicar procedimientos para el cumplimiento normativo
                en materia de ciberseguridad y de protección de datos
                personales, implementándolos tanto internamente como en relación
                con terceros.
              </li>
              <li>
                Elaborar documentación técnica y administrativa cumpliendo con
                la legislación vigente, respondiendo a los requisitos
                establecidos.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse4"
            aria-expanded="false"
            aria-controls="collapse4"
          >
            ¿PARA QUÉ SIRVE EN EL MUNDO LABORAL?
          </button>
        </h2>
        <div
          id="collapse4"
          class="accordion-collapse collapse"
          aria-labelledby="heading4"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p>
              Este profesional ejercerá su actividad en entidades de los
              sectores donde sea necesario establecer mecanismos y medidas para
              la protección de los sistemas de información y redes de
              comunicaciones.
            </p>

            <strong
              >Las ocupaciones y puestos de trabajo más relevantes son:</strong
            >
            <ul>
              <li>Experto en ciberseguridad</li>
              <li>Auditor de ciberseguridad</li>
              <li>Consultor de ciberseguridad</li>
              <li>Hacker ético</li>
              <li>
                Desarrollador de aplicaciones de realidad virtual, aumentada y
                mixta.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  .titulo {
    background: linear-gradient(#0b7eb0, #0b7eb0, #05a4f4);
    margin-bottom: 2rem;
    border-radius: 0.2rem;
    padding: 0.5rem;
    animation-name: slidein;
    animation-duration: 1s;
  }
  .imagenes {
    animation-name: slidein;
    animation-duration: 2s;
  }
  main {
    font-family: sans-serif;
  }
  img, video {
    object-fit: cover;
    height: 20rem;
    margin-bottom: 1rem;
    max-height: 100%;
    border-radius: 0.2rem;
  }

  thead {
    background-color: #0b7eb0;
    color: white;
  }
  #principal {
    width: 75%;
  }
  @media (max-width: 1000px) {
    .container {
      padding: 0;
    }
    #principal {
      width: 100%;
    }
  }

  @keyframes slidein {
    from {
      margin-top: 100%;
      width: 300%;
    }
    /* 
    to {
      margin-top: 0%;
      width: 100%;
    } */
  }
</style>
