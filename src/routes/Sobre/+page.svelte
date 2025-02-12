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
    .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
  }

  .card {
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    text-align: center;
    padding: 15px;
  }

  .card img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  .card h3 {
    margin: 10px 0;
  }

  .card p {
    color: gray;
  }


    </style>

<script>
  export let cards = [
    { title: "Lana del rey", image: "https://i.pinimg.com/736x/78/4c/29/784c2920b1f2395d2201196949767991.jpg", description: "Elizabeth Woolridge Grant (Nova Iorque, 21 de junho de 1985), mais conhecida como Lana Del Rey, é uma cantora, compositora, modelo e poetisa norte-americana." },
    { title: "Skank", image: "https://i.pinimg.com/736x/27/8a/68/278a68590a3828875c36cdd013d73f67.jpg", description: "Skank foi uma banda brasileira de pop rock formada em 1991 na cidade de Belo Horizonte. Durante toda a sua trajetória, sua formação foi composta por Samuel Rosa." },
    { title: "Tame Impala", image: "https://i.pinimg.com/736x/cc/30/64/cc3064a72ff13c91053eb7d9305b2a1c.jpg", description: "Tame Impala é um grupo de música psicodélica australiano fundado pelo multi-instrumentista Kevin Parker em 2007." },
    { title: "Rammstein", image: "https://i.pinimg.com/736x/fc/5c/87/fc5c877b09c720cf93a25cbd14fa4a4c.jpg", description: "Rammstein é uma banda alemã formada em Berlim, em Janeiro de 1994. É formada desde a fundação por Till Lindemann." },
    { title: "Pink Floyd", image: "https://i.pinimg.com/736x/d0/8e/cf/d08ecf4cf069bf8b89d5f2d551923e07.jpg", description: "Pink Floyd foi uma banda britânica de rock formada em Londres em 1965. Ganhando seguidores como um grupo de rock psicodélico, eles se destacaram por suas composições longas" },
    { title: "Mitski", image: "https://i.pinimg.com/736x/dd/85/26/dd852602abe173dd329970f78cfbd389.jpg", description: "Mitsuki Miyawaki é uma cantora, compositora e musicista nipo-americana. Mitski lançou por conta seus dois primeiros álbuns, Lush e Retired from Sad, New Career in Business." },
    { title: "Radiohead", image: "https://i.pinimg.com/736x/c5/3c/c1/c53cc1905162bff7bf8b64267c905057.jpg", description: "Radiohead é uma banda britânica de rock alternativo, formada no ano de 1985 em Abingdon, Oxford por Thom Yorke ." },
    { title: "Fiona Apple", image: "https://i.pinimg.com/736x/c5/15/9c/c5159c1b2443612b41d3ef5b0c2a5087.jpg", description: "Fiona Apple McAfee-Maggart é uma cantora e compositora norte-americana. Lançou cinco álbuns de 1996 a 2020 que chegaram ao top 20 na parada da Billboard 200 dos EUA. ." },
    { title: "Lil Peep", image: "https://i.pinimg.com/736x/72/46/f7/7246f7465d046a645c083a4a6901ea32.jpg", description: "Gustav Elijah Åhr, mais conhecido pelo nome artístico Lil Peep, foi um rapper, cantor, compositor e músico americano. Ele fez parte do grupo coletivo de emo rap GothBoiClique." },
    { title: "The Beatles", image: "https://i.pinimg.com/736x/07/35/2f/07352fee267d4ae5e83032393757bbdc.jpg", description: "The Beatles foi uma banda de rock britânica, formada na cidade de Liverpool em 1960. Com os integrantes John Lennon, Paul McCartney, George Harrison e Ringo Starr. " },
    { title: "Slowdive", image: "https://i.pinimg.com/736x/2f/f5/54/2ff554a8ac2bde20000f0f04ba847f73.jpg", description: "Slowdive é uma banda britânica de rock formada em 1989 em Reading, Berkshire, Inglaterra, por Nick Chaplin, Rachel Goswell, Neil Halstead e Christian Savill. " },
    { title: "The Smiths", image: "https://i.pinimg.com/736x/53/45/1c/53451cc440941b1e853362e0ab02f5a5.jpg", description: "The Smiths foi uma banda britânica de rock, fundada em Manchester em 1982. Tendo como principal característica a parceria nas composições de Morrissey e Johnny Marr, a banda também incluía Andy Rourke no baixo e Mike Joyce como baterista." },
    { title: "Black Sabbath", image: "https://i.pinimg.com/736x/7e/e2/12/7ee212db9ed40bec2a3c92bc7be1b258.jpg", description: "Black Sabbath é uma banda de heavy metal britânica formada no ano de 1968 em Birmingham pelo guitarrista e principal compositor Tony Iommi, o baixista e principal letrista Geezer Butler, o vocalista Ozzy Osbourne e o baterista Bill Ward." },
    { title: "Link Park", image: "https://i.pinimg.com/736x/45/fb/ec/45fbec0f428eb6ab47708aae361c9f92.jpg", description: "Linkin Park é uma banda de rock dos Estados Unidos formada em Agoura Hills, Califórnia. A formação atual da banda inclui o vocalista e multi-instrumentista Mike Shinoda, o guitarrista Brad Delson" },
    { title: "Faye Webster", image: "https://i.pinimg.com/736x/d0/0a/33/d00a336f6e8d08618e6c2c933a03e0fb.jpg", description: "Faye Webster é uma cantora e compositora americana de Atlanta, Geórgia. Ela lançou cinco álbuns de estúdio: Run and Tell, Faye Webster, Atlanta Millionaires Club, I Know I'm Funny Haha e Underdressed at the Symphony" },
    { title: "ABBA", image: "https://i.pinimg.com/736x/7f/84/cb/7f84cbd82f229003eddc74544eb68f84.jpg", description: "ABBA é um grupo sueco de música pop formado em Estocolmo em 1972 por Agnetha Fältskog, Björn Ulvaeus, Benny Andersson, e Anni-Frid Lyngstad. O nome do grupo é um acrônimo formado pelas iniciais do primeiro nome de cada membro" },
    { title: "Clairo", image: "https://i.pinimg.com/736x/55/a3/bd/55a3bdd43b4502168922e170d8bf7d46.jpg", description: "Claire Elizabeth Cottrill, mais conhecida pelo nome artístico Clairo, é uma cantora e compositora estadunidense." },
    { title: "Bella e o olmo da Bruxa", image: "https://i.pinimg.com/736x/22/17/6f/22176fc5f424c795016387f1086c01a6.jpg", description: "Diretamente de Porto Alegre, Bella e o Olmo da Bruxa combina rock alternativo e elementos experimentais, criando um som envolvente que ressoa profundamente com o público. Suas melodias simples e letras intensas fazem de cada show uma experiência inesquecível." },
    { title: "The Cranberries", image: "https://i.pinimg.com/236x/dd/ec/5c/ddec5c215131e9b6fcb23254ad7d8b27.jpg", description: "The Cranberries foi uma banda de rock formada em Limerick, Irlanda, em 1989. Originalmente chamada de Cranberry Saw Us, a banda foi formada em 1989 pelo vocalista Niall Quinn, guitarrista Noel Hogan, baixista Mike Hogan e baterista Fergal Lawler." },
    { title: "Rita Lee", image: "https://i.pinimg.com/736x/41/45/e6/4145e6e6094d8a2ef750d7195c35d0fd.jpg", description: "Rita Lee Jones de Carvalho, mais conhecida como Rita Lee foi uma cantora, compositora, apresentadora de televisão e escritora brasileira." },
    { title: "Tim Maia", image: "https://i.pinimg.com/736x/ab/45/6f/ab456f3821378325a543fcb02d138bd3.jpg", description: "Sebastião Rodrigues Maia, mais conhecido pelo nome artístico de Tim Maia, foi um cantor, compositor, maestro, produtor musical, instrumentista e empresário brasileiro, responsável pela introdução dos gêneros soul e funk na música popular brasileira e reconhecido como um dos maiores ícones da música no Brasil" },
    { title: "Djavan", image: "https://i.pinimg.com/736x/09/d0/9f/09d09f2de3a1c6b68b36304332bf214b.jpg", description: "Djavan Caetano Viana é um cantor, compositor, arranjador, produtor musical, empresário, violonista e ex-futebolista brasileiro." },
    { title: "Laufey", image: "https://i.pinimg.com/736x/55/27/77/552777f050d75419574dae4ff0656575.jpg", description: "Laufey Lín Jónsdóttir, conhecida pelo monônimo Laufey, é uma cantora e compositora islandesa. Ela lançou seu EP de estreia, Typical of Me, em 2021. Ela descreve seu estilo como jazz moderno." },
    { title: "Bilie Eilish", image: "https://i.pinimg.com/736x/2a/ab/24/2aab2469b77533b231cc59f85e390023.jpg", description: "Billie Eilish Pirate Baird O'Connell é uma cantora e compositora estadunidense. Ganhou popularidade em 2016, quando lançou o single de estreia Ocean Eyes no SoundCloud, posteriormente lançado pelas gravadoras Darkroom e Interscope Records. " }
  ];
</script>




<div class="grid">
  {#each cards as card}
    <div class="card">
      <img src={card.image} alt={card.title}>
      <h3>{card.title}</h3>
      <p>{card.description}</p>
    </div>
  {/each}
</div>

      
      
           