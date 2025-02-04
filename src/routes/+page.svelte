  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <link href="https://fonts.cdnfonts.com/css/new-gothic-style" rel="stylesheet">
  </head>

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

  .livinglegends {
    margin-top: 10px;
    margin: 10px;
    margin-bottom: 10px;
  }

    :global(body) {
      background-color: #121212; /* Fundo escuro */
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      color: #fff; /* Texto claro */
    }

    .table-header {
      display: grid;
      grid-template-columns: 40px 1fr 1fr 1fr 40px; /* Configuração das colunas */
      align-items: center;
      background-color: #1e1e1e; /* Fundo da linha */
      padding: 10px 20px;
      border-bottom: 1px solid #333; /* Linha inferior */
    }

    .table-header div {
      font-size: 14px;
      color: #b3b3b3; /* Texto cinza claro */
      text-align: left;
    }

    .table-header div:last-child {
      text-align: center; /* Relógio alinhado ao centro */
    }

    .table-header div.icon {
      font-size: 16px;
    }

    /* Estilização adicional para responsividade */
    @media (max-width: 768px) {
      .table-header {
        grid-template-columns: 30px 2fr 2fr 30px; /* Ajuste para telas menores */
        padding: 8px 10px;
      }
    }

   
  
    
    .music-bar {
    display: flex;
    align-items: center;
    background-color: #1c1c1c;
    padding: 10px;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    margin: 10px 0;
    transition: background 0.3s ease;
  }

  .music-bar:hover {
    background-color: #000000;
  }

  .album-cover img {
    width: 50px;
    height: 50px;
    border-radius: 4px;
    margin-right: 10px;
  }

  .song-info {
    flex-grow: 1;
  }

  .song-title {
    font-size: 1.1rem;
    font-weight: bold;
  }

  .artist-name, .song-album, .added-date, .song-duration {
    font-size: 0.85rem;
    color: #b3b3b3;
  }
  
  .music-container {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #1c1c1c;
    padding: 10px 0;
    z-index: 1000;
}

.music-bar {
    display: flex;
    align-items: center;
    background-color: #1e1e1e;
    padding: 10px;
    border-top: 1px solid #333;
    cursor: pointer;
    transition: background 0.3s ease-in-out;
}

.music-bar:hover {
    background-color: #000000;
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
          <a class="nav-link" href="index.html">Home <span class="sr-only">(página atual)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="about.html">Sobre</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="services.html">Serviços</a>
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
        
        

  <div class="table-header">
    <div>#</div>
    <div>Título</div>
    <div>Álbum</div>
    <div>Adicionada em</div>
    <div class="icon">⏱</div> 
  </div>


 
 
 <script>
  let songs = [
    {
      title: "Living Legends",
      artist: "Lana Del Rey",
      album: "Born to Die",
      date: "15/01/2025",
      duration: "3:45",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPLKcFWIQcQN00Mhys5mq4WM9f3ml5ydth28JuGVP0OfQTq4LhVu4hm2d_9BW-dfQ4vkg&usqp=CAU",
      youtube: "https://www.youtube.com/watch?v=0M1I-6zN2FM"
    },
    {
      title: "Let It Happen",
      artist: "Tame Impala",
      album: "Currents",
      date: "15/01/2025",
      duration: "7:47",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUVKlg0dQ3tQ-EFcvuDuXlWQww5EcxNcHKPA&s",
      youtube: "https://www.youtube.com/watch?v=pFptt7Cargc"
    }
  ];

  function openYoutube(url) {
    window.open(url, '_blank', 'width=800,height=600');
  }
</script>



<div class="table-header">
  <div>#</div>
  <div>Título</div>
  <div>Álbum</div>
  <div>Adicionada em</div>
  <div class="icon">⏱</div>
</div>

{#each songs as song}
  <div class="music-bar" on:click={() => openYoutube(song.youtube)}>
    <div class="album-cover">
      <img src="{song.image}" alt="{song.title} Cover" />
    </div>
    <div class="song-info">
      <h3 class="song-title">{song.title}</h3>
      <p class="artist-name">{song.artist}</p>
    </div>
    <div class="song-album">{song.album}</div>
    <div class="added-date">{song.date}</div>
    <div class="song-duration">{song.duration}</div>
  </div>
{/each}
  

  {#each songs as song}
  <div class="music-bar" on:click={() => openYoutube(song.youtube)}>
    <div class="album-cover">
      <img src={song.image} alt="{song.title} Cover" />
    </div>
    <div class="song-info">
      <h3 class="song-title">{song.title}</h3>
      <p class="artist-name">{song.artist}</p>
    </div>
    <div class="song-album">{song.album}</div>
    <div class="added-date">{song.date}</div>
    <div class="song-duration">{song.duration}</div>
  </div>
{/each} 