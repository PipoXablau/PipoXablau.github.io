
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
                  <img src="https://i.pinimg.com/736x/6c/5e/3d/6c5e3d9fc7540f36da8ba85cbecf81db.jpg" class="card-img-top" alt="Lana Del Rey">
                  <div class="card-body">
                      <h5 class="card-title">Lana Del Rey</h5>
                      <p class="card-text">Elizabeth Woolridge Grant, mais conhecida como Lana Del Rey, é uma cantora, compositora, modelo e poetisa norte-americana.</p>
                      <a href="https://www.last.fm/music/Lana+Del+Rey" class="btn btn-primary">Saiba Mais</a>
                  </div>
              </div>
          </div>
          <div class="col-md-4">
              <div class="card">
                  <img src="https://i.pinimg.com/736x/9b/85/57/9b8557173666d437c41b06a132b3040b.jpg" class="card-img-top" alt="Artista 2">
                  <div class="card-body">
                      <h5 class="card-title">Skank</h5>
                      <p class="card-text">Skank foi uma banda brasileira de pop rock formada em 1991 na cidade de Belo Horizonte. Durante toda a sua trajetória, sua formação foi composta por Samuel Rosa.</p>
                      <a href="https://www.last.fm/music/Skank" class="btn btn-primary">Saiba Mais</a>
                  </div>
              </div>
          </div>
          <div class="col-md-4">
              <div class="card">
                  <img src="https://i.pinimg.com/736x/cc/30/64/cc3064a72ff13c91053eb7d9305b2a1c.jpg" class="card-img-top" alt="Artista 3">
                  <div class="card-body">
                      <h5 class="card-title">Tame Impala</h5>
                      <p class="card-text">Tame Impala é um grupo de música psicodélica australiano fundado pelo multi-instrumentista Kevin Parker em 2007. Em estúdio, Parker compõe, grava, executa e produz sozinho as músicas.</p>
                      <a href="https://www.last.fm/music/Tame+Impala" class="btn btn-primary">Saiba Mais</a>
                  </div>
              </div>
          </div>
      </div>
  </div>
  
  <div class="container mt-5">
    <div class="row">
        <div class="col-md-4">
            <div class="card">
                <img src="https://i.pinimg.com/736x/99/25/a9/9925a9797a4b457dcda171e99a235731.jpg" class="card-img-top" alt="Artista 1">
                <div class="card-body">
                    <h5 class="card-title">Rammstein</h5>
                    <p class="card-text">Rammstein é uma banda alemã formada em Berlim, em Janeiro de 1994. É formada desde a fundação por Till Lindemann, Richard Z. Kruspe, Paul H. Landers, Oliver "Ollie" Riedel, Christoph "Doom" Schneider e Christian "Flake" Lorenz. </p>
                    <a href="https://www.last.fm/music/Rammstein" class="btn btn-primary">Saiba Mais</a>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <img src="https://i.pinimg.com/236x/dd/85/26/dd852602abe173dd329970f78cfbd389.jpg" class="card-img-top" alt="Artista 2">
                <div class="card-body">
                    <h5 class="card-title">Mitski</h5>
                    <p class="card-text">Mitsuki Miyawaki é uma cantora, compositora e musicista nipo-americana. Mitski lançou por conta seus dois primeiros álbuns, Lush e Retired from Sad, New Career in Business, enquanto ainda estudava no Conservatório de Música da Purchase College..</p>
                    <a href="https://www.last.fm/music/Mitski" class="btn btn-primary">Saiba Mais</a>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <img src="https://i.pinimg.com/736x/c5/15/9c/c5159c1b2443612b41d3ef5b0c2a5087.jpg" class="card-img-top" alt="Artista 3">
                <div class="card-body">
                    <h5 class="card-title">Fiona Apple</h5>
                    <p class="card-text">Fiona Apple McAfee-Maggart é uma cantora e compositora norte-americana. Lançou cinco álbuns de 1996 a 2020 que chegaram ao top 20 na parada da Billboard 200 dos EUA. Fiona recebeu vários prêmios e indicações.</p>
                    <a href="https://www.last.fm/music/Fiona+Apple" class="btn btn-primary">Saiba Mais</a>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container mt-5">
  <div class="row">
      <div class="col-md-4">
          <div class="card">
              <img src="https://i.pinimg.com/736x/72/46/f7/7246f7465d046a645c083a4a6901ea32.jpg" class="card-img-top" alt="Artista 1">
              <div class="card-body">
                  <h5 class="card-title">Lil Peep</h5>
                  <p class="card-text">Gustav Elijah Åhr, mais conhecido pelo nome artístico Lil Peep, foi um rapper, cantor, compositor e músico americano. Ele fez parte do grupo coletivo de emo rap GothBoiClique..</p>
                  <a href="https://www.last.fm/music/Lil+Peep" class="btn btn-primary">Saiba Mais</a>
              </div>
          </div>
      </div>
      <div class="col-md-4">
          <div class="card">
              <img src="https://i.pinimg.com/736x/07/35/2f/07352fee267d4ae5e83032393757bbdc.jpg" class="card-img-top" alt="Artista 2">
              <div class="card-body">
                  <h5 class="card-title">The Beatles</h5>
                  <p class="card-text">The Beatles foi uma banda de rock britânica, formada na cidade de Liverpool em 1960. Com os integrantes John Lennon, Paul McCartney, George Harrison e Ringo Starr, o grupo tornou-se altamente reconhecido como o melhor e mais bem sucedido da era do rock..</p>
                  <a href="https://www.last.fm/music/The+Beatles" class="btn btn-primary">Saiba Mais</a>
              </div>
          </div>
      </div>
      <div class="col-md-4">
          <div class="card">
              <img src="https://i.pinimg.com/736x/d0/8e/cf/d08ecf4cf069bf8b89d5f2d551923e07.jpg" class="card-img-top" alt="Artista 3">
              <div class="card-body">
                  <h5 class="card-title">Pink Floyd</h5>
                  <p class="card-text">Pink Floyd foi uma banda britânica de rock formada em Londres em 1965. Ganhando seguidores como um grupo de rock psicodélico, eles se destacaram por suas composições longas, pela experimentação ...</p>
                  <a href="https://www.last.fm/music/Pink+Floyd" class="btn btn-primary">Saiba Mais</a>
              </div>
          </div>
      </div>
  </div>
</div>

<div class="container mt-5">
<div class="row">
    <div class="col-md-4">
        <div class="card">
            <img src="https://i.pinimg.com/736x/2f/f5/54/2ff554a8ac2bde20000f0f04ba847f73.jpg" class="card-img-top" alt="Artista 1">
            <div class="card-body">
                <h5 class="card-title">Slowdive</h5>
                <p class="card-text">Slowdive é uma banda britânica de rock formada em 1989 em Reading, Berkshire, Inglaterra, por Nick Chaplin, Rachel Goswell, Neil Halstead e Christian Savill. Vários bateristas tocaram com a banda, incluindo Ian McCutcheon, Adrian Venda e Scott Simon.</p>
                <a href="https://www.last.fm/music/Slowdive" class="btn btn-primary">Saiba Mais</a>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="card">
            <img src="https://i.pinimg.com/736x/7b/0f/c8/7b0fc8970270a512bcff33ee7bdc20d3.jpg" class="card-img-top" alt="Artista 2">
            <div class="card-body">
                <h5 class="card-title">Rita Lee</h5>
                <p class="card-text">Rita Lee Jones de Carvalho, mais conhecida como Rita Lee foi uma cantora, compositora, apresentadora de televisão e escritora brasileira.</p>
                <a href="https://www.last.fm/music/Rita+Lee" class="btn btn-primary">Saiba Mais</a>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="card">
            <img src="https://i.pinimg.com/736x/ab/45/6f/ab456f3821378325a543fcb02d138bd3.jpg" class="card-img-top" alt="Artista 3">
            <div class="card-body">
                <h5 class="card-title">Tim Maia</h5>
                <p class="card-text">Sebastião Rodrigues Maia, mais conhecido pelo nome artístico de Tim Maia, foi um cantor, compositor, maestro, produtor musical, instrumentista e empresário brasileiro, responsável pela introdução dos gêneros soul e funk na música popular brasileira e reconhecido como um dos maiores ícones da música no Brasil.</p>
                <a href="https://www.last.fm/music/Tim+Maia" class="btn btn-primary">Saiba Mais</a>
            </div>
        </div>
    </div>
</div>
</div>



   
  
         