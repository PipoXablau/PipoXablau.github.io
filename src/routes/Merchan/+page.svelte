
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
        <li class="nav-item">
            <a class="nav-link" href="Home">Home</a>
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
                    <img src="https://i.pinimg.com/736x/d9/4d/05/d94d05fccc4d26a09b55d864a04d7721.jpg" class="card-img-top" alt="Artista 2">
                    <div class="card-body">
                        <h5 class="card-title">Kid A</h5>
                        <p class="card-text">Kid A é o quarto álbum de estúdio da banda Radiohead, lançado a 2 de outubro de 2000. Considerada uma das obras primas da banda junto de OK Computer, em Kid A o Radiohead inovou com novas propostas musicais e fuga da grande exposição que vinha tendo com o disco anterior.</p>
                        <a href="https://open.spotify.com/intl-pt/album/6GjwtEZcfenmOf6l18N7T7" class="btn btn-primary">Saiba Mais</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <img src="data:image/jpeg;base64,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" class="card-img-top" alt="Artista 3">
                    <div class="card-body">
                        <h5 class="card-title">Lush</h5>
                        <p class="card-text">Lush é o primeiro álbum de estúdio do músico americano Mitski. Mitski lançou o álbum por conta própria em 31 de janeiro de 2012, como seu projeto do primeiro ano no Conservatório de Música da SUNY Purchase. Foi gravado e mixado por Scot Moriarty.</p>
                        <a href="https://open.spotify.com/intl-pt/album/22MICAVuz34zzqm4Se5Lga" class="btn btn-primary">Saiba Mais</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="container mt-5">
      <div class="row">
          <div class="col-md-4">
              <div class="card">
                  <img src="data:image/png;base64,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" class="card-img-top" alt="Artista 1">
                  <div class="card-body">
                      <h5 class="card-title">1 (Remastered) </h5>
                      <p class="card-text">1 é uma coletânea de The Beatles, lançada em 13 de Novembro de 2000, dos 27 singles que alcançaram a primeira posição das listas oficiais do Reino Unido e/ou Estados Unidos, junto a 27 videoclipes de todas as músicas no DVD.</p>
                      <a href="https://open.spotify.com/intl-pt/album/7vEJAtP3KgKSpOHVgwm3Eh" class="btn btn-primary">Saiba Mais</a>
                  </div>
              </div>
          </div>
          <div class="col-md-4">
              <div class="card">
                  <img src="https://upload.wikimedia.org/wikipedia/pt/3/3b/Dark_Side_of_the_Moon.png" class="card-img-top" alt="Artista 2">
                  <div class="card-body">
                      <h5 class="card-title">Dark side of the Moon</h5>
                      <p class="card-text">The Dark Side of the Moon é o oitavo álbum de estúdio da banda britânica de rock progressivo Pink Floyd, lançado em 1 de março de 1973 através da Harvest Records no Reino Unido e Capitol Records nos Estados Unidos.</p>
                      <a href="https://open.spotify.com/intl-pt/album/4LH4d3cOWNNsVw41Gqt2kv" class="btn btn-primary">Saiba Mais</a>
                  </div>
              </div>
          </div>
          <div class="col-md-4">
              <div class="card">
                  <img src="https://m.media-amazon.com/images/I/81qcD7xeY8L._UF1000,1000_QL80_.jpg" class="card-img-top" alt="Artista 3">
                  <div class="card-body">
                      <h5 class="card-title">Live Forever</h5>
                      <p class="card-text">Live Forever é a segunda mixtape solo do rapper americano Lil Peep. Foi lançado em 2 de dezembro de 2015. Foi lançado dois meses depois de sua primeira mixtape, Lil Peep; Parte Um, lançada em setembro</p>
                      <a href="https://open.spotify.com/intl-pt/album/4hiArqU343m8BUT0lymyLO" class="btn btn-primary">Saiba Mais</a>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div class="container mt-5">
    <div class="row">
        <div class="col-md-4">
            <div class="card">
                <img src="https://i.scdn.co/image/ab67616d0000b273bb578d67335e98a2cd63425f" class="card-img-top" alt="Artista 1">
                <div class="card-body">
                    <h5 class="card-title">Role trevas parte 2</h5>
                    <p class="card-text">Primeiro álbum de estúdio "rolê trevas pt. II" Se você gosta de um Midwest, você precisa ouvir.</p>
                    <a href="https://open.spotify.com/intl-pt/album/2hXpj7M1mjVoBnNwJh1rBt" class="btn btn-primary">Saiba Mais</a>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <img src="https://upload.wikimedia.org/wikipedia/pt/2/2d/Currents_Tame_Impala.png" class="card-img-top" alt="Artista 2">
                <div class="card-body">
                    <h5 class="card-title">Currents</h5>
                    <p class="card-text">Currents é o terceiro álbum de estúdio do projeto de música psicodélica australiano Tame Impala, lançado no dia 17 de julho de 2015 pela Modular Recordings e pela Universal Music Australia na Austrália, Fiction Records na Europa e pela Interscope Records nos Estado Unidos..</p>
                    <a href="https://open.spotify.com/intl-pt/album/79dL7FLiJFOO0EoehUHQBv" class="btn btn-primary">Saiba Mais</a>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <img src="https://upload.wikimedia.org/wikipedia/pt/7/7e/The_Queen_is_Dead.jpg" class="card-img-top" alt="Artista 3">
                <div class="card-body">
                    <h5 class="card-title">The Queen Is Dead</h5>
                    <p class="card-text">The Queen Is Dead é o terceiro álbum de estúdio da banda britânica de rock The Smiths. Lançado em 16 de junho de 1986 no Reino Unido pela gravadora Rough Trade, e em 23 de junho nos Estados Unidos pela gravadora Sire. Passou 22 semanas na parada de álbuns do Reino Unido, chegando ao segundo lugar.</p>
                    <a href="https://open.spotify.com/intl-pt/album/5Y0p2XCgRRIjna91aQE8q7" class="btn btn-primary">Saiba Mais</a>
                </div>
            </div>
        </div>
    </div>
</div>

 

     
    
           