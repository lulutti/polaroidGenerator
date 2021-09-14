let form = document.querySelector("form");
// Capturando o valor da legenda
let subtitle = document.querySelector("#subtitle");
  // Capturando a data que o usuário inseriu
let date = document.querySelector("#date");
    // Capturando o valor inserido na url
let urlImage = document.querySelector("#urlImage");
let formValues = {};


form.addEventListener('submit', (event) => {
  createCard();
});

  function createCard(){
  // Evitar que o formulário envie os dados sem carregar o polaroid
  event.preventDefault();

  // Criando o espaço da legenda no polaroid
  let subtitleCard = document.createElement("span")
  // Atribuindo a legenda
  subtitleCard.textContent = subtitle.value;
  // Atribuindo o style da legenda
  subtitleCard.classList.add("polaroidSubtitle")


  // Criando o espaço da data no polaroid
  let dateCard = document.createElement("span");
  // Atribuindo a data
  dateCard.textContent = date.value;
  // Atribuindo o style a data
  dateCard.classList.add("polaroidDate");

 
  // Verificando se a imagem é vazia ou não
  if(urlImage.value == ""){
    alert("Insira um imagem")
    formValues = {} // Se sim, ele apresenta um alerta e recarrega
  } else { // Se não, constrói o polaroid
    // Selecionando a div que o polaroid ocupa
    let polaroidContent = document.querySelector(".polaroidContent");
    // Selecionando o espaço que a imagem vai ocupar
    let image = document.querySelector(".imgCard");
    
    // Resetando o card, caso já tenha gerado um polaroid
    polaroidContent.innerHTML = "";
    image.innerHTML = "";
    
    // Criando a tag para a imagem
    let polaroidImage = document.createElement("img");
    // Atribuindo a Url ao atributo src da tag img que criamos
    polaroidImage.setAttribute("src", urlImage.value);
    // Atribuindo um estilo a imagem
    polaroidImage.classList.add("polaroidImage");
    
    
    // Acrescentando a página os filhos dessa div 
    image.appendChild(polaroidImage);
    polaroidContent.appendChild(subtitleCard);
    polaroidContent.appendChild(dateCard);

    //Adicionando valores dos campos ao objeto, pois o form original será resetado
    formValues.subtitle = subtitle.value;
    formValues.date = date.value;
    formValues.urlImage = urlImage.value;

    // Reseta o form
    form.reset()
  }
}

// Animação botão álbum

let buttonAlbum = document.querySelector('.buttonAlbum');
let imageButtonAlbum = document.querySelector('#buttonAlbumImage');

buttonAlbum.addEventListener('mouseover', () => {
  imageButtonAlbum.setAttribute('src','./assets/albumWhite.svg');
  let textButtonAlbum = document.querySelector('.buttonAlbum p');
  textButtonAlbum.innerHTML = "Adicionar ao álbum";
} )

buttonAlbum.addEventListener('mouseout', () => {
  imageButtonAlbum.setAttribute('src','./assets/album.svg');
  let textButtonAlbum = document.querySelector('.buttonAlbum p');
  textButtonAlbum.innerHTML = "";
} )

// Animação botão share

let buttonShare = document.querySelector('.buttonShare');
let imageButtonShare = document.querySelector('#buttonShareImage');

buttonShare.addEventListener('mouseover', () => {
  imageButtonShare.setAttribute('src','./assets/shareWhite.svg');
  let textButtonShare = document.querySelector('.buttonShare p');
  textButtonShare.innerHTML = "Compartilhar";
} )

buttonShare.addEventListener('mouseout', () => {
  imageButtonShare.setAttribute('src','./assets/share.svg');
  let textButtonShare = document.querySelector('.buttonShare p');
  textButtonShare.innerHTML = "";
} )

buttonAlbum.addEventListener('click', () => {
  //variavel da div que vamos adicionar conteudo
  let album = document.querySelector('.album');

  //Condição para verificar se o formulario esta vazio, então não foi criado o card
  const formularioVazio = !formValues.urlImage;
  if (formularioVazio) {
    alert('Crie seu polaroid!');
  } else {
    //Criando div de coluna para alinhar os cards
    let div = document.createElement('div');
    div.classList.add('col');
    //Adicionando o card no album
    album.appendChild(div);
    div.innerHTML += `<div class="polaroidCard">
        <div class="backgroundCard">
          <div class="imgCard"><img class="polaroidImage" src="${formValues.urlImage}"></div>
          <div class="polaroidContent"><span class="polaroidSubtitle">${formValues.subtitle}</span><span class="polaroidDate">${formValues.date}</span></div>
        </div>
      </div>`;
  }
});
