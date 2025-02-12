
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

    /* Gradiente vertical na Navbar */
    .navbar {
        background: linear-gradient(to bottom, #1e1e1e, #1e1e1e); /* Gradiente vertical */
        font-family: 'OpenSans', ; /* Fonte da navbar */
      
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

    .card {
            background-color: #1e1e1e;
            color: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(255, 255, 255, 0.2);
        }
        .card img {
            height: 200px;
            object-fit: cover;
        }
        .btn-primary {
            background-color: #500202;
            border: none;
        }
        .btn-primary:hover {
            background-color: #500202;
        }
    
   
    </style>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <a class="navbar-brand" href="0"></a>
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
          <a class="nav-link" href="Merchan">Albuns</a>
        </li>
        <li class="nav-item dropdown">
           
        </div>
      </nav>
       
      
      <div class="container mt-5">
        <div class="row">
            <div class="col-md-4">
                <div class="card">
                    <img src="https://upload.wikimedia.org/wikipedia/pt/thumb/8/8f/Blue_Banisters.jpg/220px-Blue_Banisters.jpg" class="card-img-top" alt="Artista 1">
                    <div class="card-body">
                        <h5 class="card-title">BlueBannisters</h5>
                        <p class="card-text">Blue Banisters é o oitavo álbum de estúdio da cantora e compositora estadunidense Lana Del Rey. Foi lançado em 22 de outubro de 2021 através das gravadoras Polydor e Interscope, sete meses após lançar o seu sétimo álbum Chemtrails over the Country Club.</p>
                        <a href="https://open.spotify.com/intl-pt/album/2wwCc6fcyhp1tfY3J6Javr" class="btn btn-primary">Saiba Mais</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <img src="https://via.placeholder.com/300" class="card-img-top" alt="Artista 2">
                    <div class="card-body">
                        <h5 class="card-title">Artista 2</h5>
                        <p class="card-text">Descrição breve sobre o artista.</p>
                        <a href="artista2.html" class="btn btn-primary">Saiba Mais</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <img src="https://via.placeholder.com/300" class="card-img-top" alt="Artista 3">
                    <div class="card-body">
                        <h5 class="card-title">Artista 3</h5>
                        <p class="card-text">Descrição breve sobre o artista.</p>
                        <a href="artista3.html" class="btn btn-primary">Saiba Mais</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="container mt-5">
      <div class="row">
          <div class="col-md-4">
              <div class="card">
                  <img src="https://via.placeholder.com/300" class="card-img-top" alt="Artista 1">
                  <div class="card-body">
                      <h5 class="card-title">Artista 1</h5>
                      <p class="card-text">Descrição breve sobre o artista.</p>
                      <a href="artista1.html" class="btn btn-primary">Saiba Mais</a>
                  </div>
              </div>
          </div>
          <div class="col-md-4">
              <div class="card">
                  <img src="https://via.placeholder.com/300" class="card-img-top" alt="Artista 2">
                  <div class="card-body">
                      <h5 class="card-title">Artista 2</h5>
                      <p class="card-text">Descrição breve sobre o artista.</p>
                      <a href="artista2.html" class="btn btn-primary">Saiba Mais</a>
                  </div>
              </div>
          </div>
          <div class="col-md-4">
              <div class="card">
                  <img src="https://via.placeholder.com/300" class="card-img-top" alt="Artista 3">
                  <div class="card-body">
                      <h5 class="card-title">Artista 3</h5>
                      <p class="card-text">Descrição breve sobre o artista.</p>
                      <a href="artista3.html" class="btn btn-primary">Saiba Mais</a>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div class="container mt-5">
    <div class="row">
        <div class="col-md-4">
            <div class="card">
                <img src="https://via.placeholder.com/300" class="card-img-top" alt="Artista 1">
                <div class="card-body">
                    <h5 class="card-title">Artista 1</h5>
                    <p class="card-text">Descrição breve sobre o artista.</p>
                    <a href="artista1.html" class="btn btn-primary">Saiba Mais</a>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <img src="https://via.placeholder.com/300" class="card-img-top" alt="Artista 2">
                <div class="card-body">
                    <h5 class="card-title">Artista 2</h5>
                    <p class="card-text">Descrição breve sobre o artista.</p>
                    <a href="artista2.html" class="btn btn-primary">Saiba Mais</a>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <img src="https://via.placeholder.com/300" class="card-img-top" alt="Artista 3">
                <div class="card-body">
                    <h5 class="card-title">Artista 3</h5>
                    <p class="card-text">Descrição breve sobre o artista.</p>
                    <a href="artista3.html" class="btn btn-primary">Saiba Mais</a>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="container mt-5">
  <div class="row">
      <div class="col-md-4">
          <div class="card">
              <img src="https://via.placeholder.com/300" class="card-img-top" alt="Artista 1">
              <div class="card-body">
                  <h5 class="card-title">Artista 1</h5>
                  <p class="card-text">Descrição breve sobre o artista.</p>
                  <a href="artista1.html" class="btn btn-primary">Saiba Mais</a>
              </div>
          </div>
      </div>
      <div class="col-md-4">
          <div class="card">
              <img src="https://via.placeholder.com/300" class="card-img-top" alt="Artista 2">
              <div class="card-body">
                  <h5 class="card-title">Artista 2</h5>
                  <p class="card-text">Descrição breve sobre o artista.</p>
                  <a href="artista2.html" class="btn btn-primary">Saiba Mais</a>
              </div>
          </div>
      </div>
      <div class="col-md-4">
          <div class="card">
              <img src="https://via.placeholder.com/300" class="card-img-top" alt="Artista 3">
              <div class="card-body">
                  <h5 class="card-title">Artista 3</h5>
                  <p class="card-text">Descrição breve sobre o artista.</p>
                  <a href="artista3.html" class="btn btn-primary">Saiba Mais</a>
              </div>
          </div>
      </div>
  </div>
</div>

 

     
    
           