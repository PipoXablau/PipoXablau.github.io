<script>
  let songs = [
    {
      title: "Living Legends",
      artist: "Lana Del Rey",
      album: "Born to Die",
      date: "15/01/2025",
      duration: "3:45",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPLKcFWIQcQN00Mhys5mq4WM9f3ml5ydth28JuGVP0OfQTq4LhVu4hm2d_9BW-dfQ4vkg&usqp=CAU",
      youtube: "https://www.youtube.com/watch?v=0M1I-6zN2FM",
    },
    {
      title: "Let It Happen",
      artist: "Tame Impala",
      album: "Currents",
      date: "15/01/2025",
      duration: "7:47",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUVKlg0dQ3tQ-EFcvuDuXlWQww5EcxNcHKPA&s",
      youtube: "https://www.youtube.com/watch?v=pFptt7Cargc",
    },

    {
      title: "Dois Rios",
      artist: "Skank",
      album: "Cosmotron",
      date: "04/02/2025",
      duration: "4:22",
      image:
        "https://akamai.sscdn.co/uploadfile/letras/albuns/e/3/3/b/16379.jpg",
      youtube: "https://youtu.be/PL53fH-x0rw?si=CmGRrjbVlN0XcmlH",
    },

  

    {
      title: "Angst",
      artist: "Remmstein",
      album: "Zeit",
      date: "04/02/2025",
      duration: "03:45",
      image: "https://i.scdn.co/image/ab67616d0000b273bbdf5b07d8168d0cc911a0c2",
      youtube: "https://youtu.be/nwjap30mWR8?si=uSBcPR87Gq1hZu86",
    },

 
    
    {
      title: "I Want You",
      artist: "Mitski",
      album: "Class of 2013",
      date: "04/02/2025",
      duration: "03:03",
      image: "https://i.scdn.co/image/ab67616d0000b27334b5e51adeea6f1aa2285ce3",
      youtube: "https://youtu.be/1-kO12tP3SE?si=y6Tgki84Md0F5aKb",
    },

    {
      title: "Paper Bag",
      artist: "Fiona Apple",
      album: "When The Pawn...",
      date: "04/02/2025",
      duration: "03:40",
      image: "https://i.scdn.co/image/ab67616d0000b27370622da427271b0203d7ce79",
      youtube: "https://www.youtube.com/watch?v=BK30r_SIZ-g",
    },

    {
      title: "Nuts",
      artist: "Lil Peep",
      album: "Live Forever",
      date: "04/02/2025",
      duration: "01:25",
      image:
        "https://cdn-images.dzcdn.net/images/cover/04c3ec6179e8afb461952ecf4a8d0189/0x1900-000000-80-0-0.jpg",
      youtube: "https://www.youtube.com/watch?v=BK30r_SIZ-g",
    },

    {
      title: "Here Comes The Sun",
      artist: "The Beatles",
      album: "Abbey Road (Remastered)",
      date: "04/02/2025",
      duration: "03:05",
      image: "https://i.scdn.co/image/ab67616d0000b273dc30583ba717007b00cceb25",
      youtube: "https://youtu.be/xUNqsfFUwhY?si=SQRmRl5tk8b6L6q2",
    },

    {
      title: "Hey Jude",
      artist: "The Beatles",
      album: "1 (Remastered)",
      date: "04/02/2025",
      duration: "07:05",
      image:
        "https://m.media-amazon.com/images/I/41S9eflmPFL._UF1000,1000_QL80_.jpg",
      youtube: "https://youtu.be/mQER0A0ej0M?si=5aArLNh3SYd8pCBV",
    },

    {
      title: "When The Sun Hits",
      artist: "Slowdive",
      album: "Slouvaki",
      date: "04/02/2025",
      duration: "04:46",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTihY82X4uy5RTYoqURICiQgQb8dfOx4uGPDQ&s",
      youtube:"https://youtu.be/HN-KHZ9NDVA?si=o9fuoxhE45C_iwr7",
    },

    {
      title: "Life Force",
      artist: "ptasinski, RJ Pasin",
      album: "Life Force",
      date: "11/02/2025",
      duration: "1:50",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFIG8Ek-Bty-lMuzsEgmqYG8wD6zqk-DwWtg&s",
      youtube: "https://youtu.be/HN-KHZ9NDVA?si=https://youtu.be/FmrKm7q-V6c?si=MDGSaBHppu_F_wY2",
    },

  ];

  function openYoutube(url) {
    window.open(url, "_blank", "width=800,height=600");
  }
</script>

<header>
  <h1>D E F T O N E S K Y</h1>
  <center></center>

  <br />
</header>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <!-- svelte-ignore a11y_consider_explicit_label -->
  <a class="navbar-brand" href="0"></a>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#conteudoNavbarSuportado"
    aria-controls="conteudoNavbarSuportado"
    aria-expanded="false"
    aria-label="Alterna navegação"
  >
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="conteudoNavbarSuportado">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="http://localhost:5173"
          >Home <span class="sr-only">(página atual)</span></a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" href="Sobre">Artistas</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="Merchan">Merchan</a>
      </li>
    </ul>
  </div>
</nav>

<div class="table-header">
  <div>#</div>
  <div>Título</div>
  <div>Álbum</div>
  <div>Adicionada em</div>
  <div class="icon">⏱</div>
</div>

{#each songs as song}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
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

<style>
  header {
    background: linear-gradient(
      to bottom,
      #000000,
      #1e1e1e
    ); /* Gradiente vertical */
    color: #ffffff;
    padding: 20px 0;

    text-align: row;
  }
  header h1 {
    font-size: 5rem;
    font-weight: bold;
    font-family: "New Gothic Style", sans-serif;
    padding-top: 50px;
    padding-left: 50px;
    margin-bottom: -50px;
  }


  /* Gradiente vertical na Navbar */
  .navbar {
    background: linear-gradient(
      to bottom,
      #1e1e1e,
      #1e1e1e
    ); /* Gradiente vertical */
    font-family: "OpenSans"; /* Fonte da navbar */
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

  .artist-name,
  .song-album,
  .added-date,
  .song-duration {
    font-size: 0.85rem;
    color: #b3b3b3;
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

  .song-album,
  .added-date,
  .song-duration {
    text-align: center;
    min-width: 120px; /* Ajuste para maior espaçamento */
  }
</style>
