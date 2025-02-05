
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
    display: grid;
    grid-template-columns: auto 2fr 1fr 1fr 1fr; /* Ajuste das colunas */
    align-items: center;
    background-color: #1e1e1e;
    padding: 10px;
    border-top: 1px solid #333;
    cursor: pointer;
    transition: background 0.3s ease-in-out;
    gap: 20px; /* Espaçamento entre os elementos */
}

.song-info {
    display: flex;
    flex-direction: column;
}

.song-album, .added-date, .song-duration {
    text-align: center;
    min-width: 120px; /* Ajuste para maior espaçamento */
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
    },

    {
      title: "Dois Rios",
      artist: "Skank",
      album: "Cosmotron",
      date: "04/02/2025",
      duration: "4:22",
      image: "https://akamai.sscdn.co/uploadfile/letras/albuns/e/3/3/b/16379.jpg",
      youtube: "https://youtu.be/PL53fH-x0rw?si=CmGRrjbVlN0XcmlH"
    },

    {
      title: "Wish You Were Here",
      artist: "Pink Floyd",
      album: "Wish You Were Here",
      date: "04/02/2025",
      duration: "06:09",
      image: "data:image/jpeg;base64,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",
      youtube: "https://youtu.be/4K6cvc27_CE?si=ltSRNHdoy8Ndnvex"
    },

    {
      title: "Angst",
      artist: "Remmstein",
      album: "Zeit",
      date: "04/02/2025",
      duration: "03:45",
      image: "https://i.scdn.co/image/ab67616d0000b273bbdf5b07d8168d0cc911a0c2",
      youtube: "https://youtu.be/nwjap30mWR8?si=uSBcPR87Gq1hZu86"
    },


    {
      title: "Lover, You Should've Come Over",
      artist: "Jeff Buckley",
      album: "Grace",
      date: "04/02/2025",
      duration: "06:44",
      image: "data:image/jpeg;base64,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",
      youtube: "https://youtu.be/HxfE6PJmGS8?si=7N6rfntuyIUy116J"
    },

    {
      title: "You",
      artist: "Radiohead",
      album: "Pablo Honey",
      date: "04/02/2025",
      duration: "03:29",
      image: "data:image/jpeg;base64,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",
      youtube: "https://youtu.be/OzL7u5teZhg?si=Qf_u2itxonvCeXqZ"
    },

    {
      title: "I Want You",
      artist: "Mitski",
      album: "Class of 2013",
      date: "04/02/2025",
      duration: "03:03",
      image: "https://i.scdn.co/image/ab67616d0000b27334b5e51adeea6f1aa2285ce3",
      youtube: "https://youtu.be/1-kO12tP3SE?si=y6Tgki84Md0F5aKb"
    },

    {
      title: "Paper Bag",
      artist: "Fiona Apple",
      album: "When The Pawn...",
      date: "04/02/2025",
      duration: "03:40",
      image: "https://i.scdn.co/image/ab67616d0000b27370622da427271b0203d7ce79",
      youtube: "https://www.youtube.com/watch?v=BK30r_SIZ-g"
    },

    {
      title: "Nuts",
      artist: "Lil Peep",
      album: "Live Forever",
      date: "04/02/2025",
      duration: "01:25",
      image: "https://cdn-images.dzcdn.net/images/cover/04c3ec6179e8afb461952ecf4a8d0189/0x1900-000000-80-0-0.jpg",
      youtube: "https://www.youtube.com/watch?v=BK30r_SIZ-g"
    },

    {
      title: "Here Comes The Sun",
      artist: "The Beatles",
      album: "Abbey Road (Remastered)",
      date: "04/02/2025",
      duration: "03:05",
      image: "https://i.scdn.co/image/ab67616d0000b273dc30583ba717007b00cceb25",
      youtube: "https://youtu.be/xUNqsfFUwhY?si=SQRmRl5tk8b6L6q2"
    },

    {
      title: "Hey Jude",
      artist: "The Beatles",
      album: "1 (Remastered)",
      date: "04/02/2025",
      duration: "07:05",
      image: "https://m.media-amazon.com/images/I/41S9eflmPFL._UF1000,1000_QL80_.jpg",
      youtube: "https://youtu.be/mQER0A0ej0M?si=5aArLNh3SYd8pCBV"
    },

    {
      title: "When The Sun Hits",
      artist: "Slowdive",
      album: "Slouvaki",
      date: "04/02/2025",
      duration: "04:46",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTihY82X4uy5RTYoqURICiQgQb8dfOx4uGPDQ&s",
      youtube: "https://youtu.be/HN-KHZ9NDVA?si=o9fuoxhE45C_iwr7"
    },

  ];

  function openYoutube(url) {
    window.open(url, '_blank', 'width=800,height=600');
  }
</script>


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
  