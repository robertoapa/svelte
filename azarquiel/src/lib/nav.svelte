<script>

</script>

<main>
    <nav class=" navbar navbar-expand-sm navbar-light shadow-sm" >
        <div class="w-75 principal d-flex justify-content-around container-fluid">
            <a href="/">
                <img src="img/logoaza.png" alt="">
            </a>
            <button type="button" class="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#demo">
                <span class="navbar-toggler-icon"></span>
               
            </button>
            <div id="navbarCollapse" class="desaparecer collapse navbar-collapse d-flex justify-content-end">
                <ul class="nav navbar-nav mr-auto">
                    <li class="nav-item">
                        <a href="/" class="nav-link">INICIO</a>
                    </li>
                
                    <li class="nav-item dropdown">
                       <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">AL DIA</a>
                        <div class="dropdown-menu">
                            <a href="#" class="dropdown-item">Inbox</a>
                            <a href="#" class="dropdown-item">Drafts</a>
                            <a href="#" class="dropdown-item">Sent Items</a>
                            <div class="dropdown-divider"></div>
                            <a href="#"class="dropdown-item">Trash</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">EL LORO</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">EL CENTRO</a>
                        <div class="dropdown-menu">
                            <a href="#" class="dropdown-item">Inbox</a>
                            <a href="#" class="dropdown-item">Drafts</a>
                            <a href="#" class="dropdown-item">Sent Items</a>
                            <div class="dropdown-divider"></div>
                            <a href="#"class="dropdown-item">Trash</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">SECRETARIA</a>
                        <div class="dropdown-menu">
                            <a href="#" class="dropdown-item">Inbox</a>
                            <a href="#" class="dropdown-item">Drafts</a>
                            <a href="#" class="dropdown-item">Sent Items</a>
                            <div class="dropdown-divider"></div>
                            <a href="#"class="dropdown-item">Trash</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">FAMILIAS</a>
                        <div class="dropdown-menu">
                            <a href="#" class="dropdown-item">Inbox</a>
                            <a href="#" class="dropdown-item">Drafts</a>
                            <a href="#" class="dropdown-item">Sent Items</a>
                            <div class="dropdown-divider"></div>
                            <a href="#"class="dropdown-item">Trash</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">BOLSA</a>
                    </li>
                    <li class="nav-item">
                        <i class="fa-solid fa-bars nav-link" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo"></i>
                    </li>
                    
                </ul>
            </div>
        </div>
        <div class="v-25 offcanvas offcanvas-end bg-dark" id="demo">
            <div class="offcanvas-header">
              <h1 class="offcanvas-title">Heading</h1>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
            </div>
            <div class="offcanvas-body text-light">
              <p>INICIO</p>
              <hr>
              <p>AL DIA</p>
              <hr>
              <p>AL LORO</p>
              <hr>
              <p>EL CENTRO</p>
              <hr>
              <p>SECRETARIA</p>
              <hr>
              <p>FAMILIAS</p>
              <hr>
              <p>BOLSA</p>
              <hr>
              
          
            </div>
          </div>
          
          
    </nav>
</main>


<style>
    main{
        position: sticky;
        top: 0;
        background-color: white;

    }


    img{
        max-height: 100%;
        height: 3rem;
    }
    a{
        font-size: x-small;
    }
    .principal{
        width: 80%;
    }
    .offcanvas{
        width: 17rem;
    }

    @media (max-width:576px){
        .desaparecer{
            display: none !important; 
            background-color: aqua;
        }
    }

    hr{
        color: rgb(150, 145, 145);
    }

    .offcanvas{
        font-size: x-small;
    }
    main{
        z-index: 1000;
    }

  
</style>



