let filmes = [
    "A Vida é Bela",
    "Senhor dos Aneis",
    "Seven",
    "Ilha do Medo",
    "Fragmentado",
    "Invocação do Mal",
    "Harry Potter",
    "Piratas do Caribe",
    "Forrest Gump",
    "Avengers",
    "A Origem"
  ];
  let listaImgFilmes = [
    "https://upload.wikimedia.org/wikipedia/pt/thumb/a/af/La_vita_%C3%A8_bella.jpg/200px-La_vita_%C3%A8_bella.jpg",
    "https://br.web.img3.acsta.net/medias/nmedia/18/92/91/32/20224832.jpg ",
    "https://br.web.img3.acsta.net/pictures/210/124/21012465_2013061319170245.jpg",
    "https://media.fstatic.com/7XemKYH1XtxN4MkKaVz1fYJpYp4=/290x478/smart/media/movies/covers/2011/07/f8503d117d5560c07478c1fde344a4e8.jpg",
    "https://br.web.img2.acsta.net/pictures/17/02/24/16/32/482058.jpg",
    "https://m.media-amazon.com/images/I/91UQCBxB+cL._AC_SL1500_.jpg",
    "https://br.web.img3.acsta.net/medias/nmedia/18/93/01/50/20230712.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/e/e6/Pirates_of_the_Caribbean_-_The_Curse_of_the_Black_Pearl.jpg",
    "https://br.web.img3.acsta.net/medias/nmedia/18/87/30/21/19874092.jpg",
    "https://lumiere-a.akamaihd.net/v1/images/image_8f2b1c5d.jpeg?region=0,0,540,810",
    "https://br.web.img3.acsta.net/medias/nmedia/18/87/32/31/20028688.jpg"
  ];
  let trailersFilmes = [
    "https://www.youtube.com/watch?v=04jZWOA1IAg",
    "https://www.youtube.com/watch?v=V75dMMIW2B4&t=3s",
    "https://www.youtube.com/watch?v=JXgOWdG5wqU",
    "https://www.youtube.com/watch?v=y3dalJDGmt0",
    "https://www.youtube.com/watch?v=vslbpge5r7M",
    "https://www.youtube.com/watch?v=GQrrXceHn2E",
    "https://www.youtube.com/watch?v=7ZBh_-Aa0Bk",
    "https://www.youtube.com/watch?v=DGnatLS9Ohw",
    "https://www.youtube.com/watch?v=p7WvuSa7w9o",
    "https://www.youtube.com/watch?v=TcMBFSGVi1c",
    "https://www.youtube.com/watch?v=0PIg7ttyegA"
  ];
  
  let catalogo = document.getElementById("catalogo");
  
  //PARA EXIBIR OS FILMES:
  function exibeFilmes() {
    catalogo.innerHTML = "";
  
    for (var i = 0; i < trailersFilmes.length; i++) {
      catalogo.innerHTML += `
                      <div class="singleFilm">
                      <img src="${listaImgFilmes[i]}" class="imagens">
                      <a href="${trailersFilmes[i]} class="link" target="_blank">${filmes[i]}</a>
                      </div>
                     `;
    }
  }
  exibeFilmes();
  
  //PARA ADICIONAR NOVO FILME:
  function addFilme() {
    let newFilme = document.getElementById("nomefilme").value;
    let newImgFilme = document.getElementById("imgfilme").value;
    let newTrailer = document.getElementById("trailerfilme").value;
  
    let condiçõesParaNaoRepetir = 0;
  
    //PARA NÃO REPETIR NADA:
    if (filmes.includes(newFilme)) {
      alert("Filme já adicionado");
    } else {
      condiçõesParaNaoRepetir++;
    }
  
    if (listaImgFilmes.includes(newImgFilme)) {
      alert("Capa já utilizada");
    } else {
      condiçõesParaNaoRepetir++;
    }
  
    if (trailersFilmes.includes(newTrailer)) {
      alert("Veja o trailer na lista");
    } else {
      condiçõesParaNaoRepetir++;
    }
  
    console.log(condiçõesParaNaoRepetir);
  
    //PARA ADICIONAR OS ELEMENTOS:
    if (condiçõesParaNaoRepetir === 3) {
      filmes.push(newFilme);
      listaImgFilmes.push(newImgFilme);
      trailersFilmes.push(newTrailer);
      exibeFilmes();
    }
  }
  
