// let title = document.querySelector("#title").value;

let create = document.querySelector("#create");

create.addEventListener("click", (event) => {
  createCard();
});

function createCard(){
  event.preventDefault();

  let subtitle = document.querySelector("#subtitle").value;
  let subtitleCard = document.createElement("p")
  subtitleCard.textContent = subtitle;
  subtitleCard.classList.add("polaroidSubtitle")

  let urlImage = document.querySelector("#urlImage").value;
  let image = document.querySelector(".imgCard");

  let polaroidImage = document.createElement("img");
  polaroidImage.classList.add("polaroidImage")
  polaroidImage.setAttribute("src", urlImage);

  image.appendChild(polaroidImage);
  image.appendChild(subtitleCard);

  // let form = document.querySelector("form");
  // form.reset();
}
