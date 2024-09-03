import setShip from "./setShip";
const setNamePage = () => {
  const container = document.querySelector(".container");
  const pageContent = document.createElement("div");
  pageContent.className = "page-content";

  const gameLogo = document.createElement("div");
  gameLogo.className = "logo";

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
  submitBtn.type = "submit";
  submitBtn.textContent = "Enter Battle";

  nameForm.appendChild(userName);
  nameForm.appendChild(submitBtn);

  formDiv.appendChild(formText);
  formDiv.appendChild(nameForm);

  pageContent.appendChild(gameLogo);
  pageContent.appendChild(formDiv);

  container.appendChild(pageContent);
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
