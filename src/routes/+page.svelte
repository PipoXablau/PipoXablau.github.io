<head>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
  <link href="https://fonts.cdnfonts.com/css/new-gothic-style" rel="stylesheet">
</head>

<header>
  <h1>D E F T O N E S K Y</h1>
  <br />
</header>

<style>
  header {
      background: linear-gradient(to bottom, #000000, #000000); /* Gradiente vertical */
    color: #ffffff;
      padding: 20px 0;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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
      background: linear-gradient(to bottom, #000000, #2b0000); /* Gradiente vertical */
      font-family: 'New Gothic Style', sans-serif; /* Fonte da navbar */
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
</style>

<nav class="navbar navbar-expand-lg navbar-light">
  <!-- imagem -->
  <a class="navbar-brand" href="#">
    <img src="https://preview.redd.it/petition-to-change-logo-to-shadow-for-the-rest-of-the-year-v0-w6lob7binncd1.png?width=2048&format=png&auto=webp&s=a7f63845a6db408a675cf58fd8bb1d8ace61f379" alt="Logo">
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="conteudoNavbarSuportado">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(página atual)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Ação</a>
          <a class="dropdown-item" href="#">Outra ação</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Algo mais aqui</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Desativado</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Pesquisar" aria-label="Pesquisar">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Pesquisar</button>
    </form>
  </div>
</nav>
