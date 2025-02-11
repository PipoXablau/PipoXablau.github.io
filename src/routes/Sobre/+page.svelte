
<!-- svelte-ignore css_unused_selector -->
<!-- svelte-ignore css_unused_selector -->
<header>

    <h1>D E F T O N E S K Y </h1><center></center>
  
    <br />
    
  </header>

  <style>
    header {
        background: linear-gradient(to bottom, #000000, #1e1e1e); /* Gradiente vertical */
      color: #ffffff;
        padding: 20px 0;
      
        text-align: row;
    }
    header h1 {
        font-size: 5rem;
        font-weight: bold;
        font-family: 'New Gothic Style', sans-serif;
        padding-top: 50px;
        padding-left: 50px;
      margin-bottom: -50px;
    }
    header p {
        font-size: 1rem;
    }

    /* Gradiente vertical na Navbar */
    .navbar {
        background: linear-gradient(to bottom, #1e1e1e, #1e1e1e); /* Gradiente vertical */
        font-family: 'OpenSans', ; /* Fonte da navbar */
      
    }
    .navbar .navbar-brand img {
        width: 60px;
        height: 60px;
    }
    .navbar-toggler {
        border-color: #ffffff; /* Cor do botão */
    }
    .navbar-nav .nav-link {
        color: #ffffff !important; /* Cor do texto */
    }
    .navbar-nav .nav-link:hover {
        color: #ffffff !important; /* Cor do texto ao passar o mouse */
    }
    .navbar-nav .nav-item.active .nav-link {
        color: #ffffff  !important; /* Cor ativa */
    }

    /* Estilo do botão */
    .btn-outline-success {
        color: #970000; /* Cor do texto (vermelho) */
        border-color: #ff0000; /* Cor da borda (vermelho) */
    }
    
    .btn-outline-success:hover {
        color: #000000; /* Cor do texto quando passar o mouse */
        background-color: #ff0000; /* Cor de fundo (vermelho) */
        border-color: #ff0000; /* Cor da borda ao passar o mouse */
    }

    .shadowbar :hover {
        color: #000000; /* Cor do texto quando passar o mouse */
        background-color: #1a1818; /* Cor de fundo (vermelho) */
        border-color: #ff0000; /* Cor da borda ao passar o mouse */
    }

    /* Gradiente vertical na Navbar */
    .sonic {
        background: linear-gradient(to bottom, #1e1e1e, #1e1e1e); /* Gradiente vertical */
        font-family: 'New Gothic Style', sans-serif; /* Fonte da navbar */
    }

    /* Gradiente vertical na Navbar */
    .tails {
        background: linear-gradient(to bottom, #1e1e1e, #1e1e1e); /* Gradiente vertical */
        font-family: 'New Gothic Style', sans-serif; /* Fonte da navbar */
        
    }
    </style>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="index.html"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="conteudoNavbarSuportado">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="http://localhost:5173">Home <span class="sr-only">(página atual)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Sobre">Artistas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="services.html">Merchan</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Mais
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="contact.html">Contato</a>
            <a class="dropdown-item" href="faq.html">FAQ</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="support.html">Suporte</a>
          </div>
        </li>
        </div>
      </nav>
        
      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
       
          <div class="carousel-item active">
            <img class="d-block w-100" src=".../800x400?auto=yes&bg=777&fg=555&text=Primeiro Slide" alt="Primeiro Slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src=".../800x400?auto=yes&bg=666&fg=444&text=Segundo Slide" alt="Segundo Slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src=".../800x400?auto=yes&bg=555&fg=333&text=Terceiro Slide" alt="Terceiro Slide">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Anterior</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Próximo</span>
        </a>

      
      
      
           