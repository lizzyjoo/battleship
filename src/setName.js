import setShip from "./setShip";

const setNamePage = () => {
  const container = document.querySelector(".container");
  const pageContent = document.createElement("div");
  pageContent.className = "page-content";
  pageContent.id = "name-page";

  // game logo
  const gameLogo = document.createElement("div");
  gameLogo.className = "logo";
  gameLogo.id = "main-logo";
  gameLogo.textContent = "BATTLESHIP";

  const battleshipImg = document.createElement("div");
  battleshipImg.classList.add("battleship-img");

  // div with name form
  const formDiv = document.createElement("div");
  formDiv.className = "form-div";

  const formText = document.createElement("p");
  formText.className = "enter-name";
  formText.textContent = "Enter Name for Battle";

  const nameForm = document.createElement("form");
  nameForm.id = "name-form";

  const userName = document.createElement("input");
  userName.id = "user-name";
  userName.placeholder = "Combatant Name";

  const submitBtn = document.createElement("button");
  submitBtn.id = "name-submit";
  submitBtn.type = "submit";
  submitBtn.textContent = "Start Battle";

  nameForm.appendChild(userName);
  nameForm.appendChild(submitBtn);

  formDiv.appendChild(formText);
  formDiv.appendChild(nameForm);

  pageContent.appendChild(gameLogo);
  pageContent.appendChild(formDiv);
  pageContent.appendChild(battleshipImg);

  container.appendChild(pageContent);
  window.addEventListener("load", () => {
    document.body.classList.add("loaded");
  });
  nameForm.addEventListener("submit", (event) => {
    clearContent();
    setShip(userName.value);
  });
};

function clearContent() {
  const container = document.querySelector(".container");
  const pageContent = document.querySelector(".page-content");
  if (pageContent) {
    container.removeChild(pageContent);
  }
}

export default setNamePage;
