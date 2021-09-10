// let title = document.querySelector("#title").value;

let form = document.querySelector("form");

form.addEventListener('submit', (event) => {
  createCard();
});

function createCard(){
  event.preventDefault();

  let subtitle = document.querySelector("#subtitle").value;
  let subtitleCard = document.createElement("span")
  subtitleCard.textContent = subtitle;
  subtitleCard.classList.add("polaroidSubtitle")

  let date = document.querySelector("#date").value;
  let dateCard = document.createElement("span");
  dateCard.textContent = date;
  dateCard.classList.add("polaroidDate")

  let urlImage = document.querySelector("#urlImage").value;
  if(urlImage == ""){
    alert("Insira um imagem")
    form.reload();
  }
  let image = document.querySelector(".imgCard");

  let polaroidImage = document.createElement("img");
  polaroidImage.classList.add("polaroidImage")
  polaroidImage.setAttribute("src", urlImage);

  let polaroidContent = document.querySelector(".polaroidContent")
  image.appendChild(polaroidImage);
  polaroidContent.appendChild(subtitleCard);
  polaroidContent.appendChild(dateCard);
  let content = document.querySelector(".content")
  let divForm = document.querySelector(".boxWhite")
  content.removeChild(divForm);
}
