import setNamePage from "../setName";
import setShip from "../setShip";

jest.mock("../setShip", () => jest.fn());

describe("setNamePage", () => {
  beforeEach(() => {
    document.body.innerHTML = `<div class="container"></div>`;
  });

  test("should create and append elements to the container", () => {
    setNamePage();

    const container = document.querySelector(".container");

    expect(container).toBeTruthy();
    expect(container.querySelector(".page-content")).toBeTruthy();
    expect(container.querySelector(".logo")).toHaveTextContent("BATTLESHIP");
    expect(container.querySelector("#name-form")).toBeTruthy();
  });

  test("should add loaded class to body on load", () => {
    setNamePage();
    window.dispatchEvent(new Event("load"));
    expect(document.body.classList.contains("loaded")).toBe(true);
  });

  test("should call setShip with userName value on form submit", () => {
    setNamePage();

    const userNameInput = document.querySelector("#user-name");
    userNameInput.value = "Player1";

    const form = document.querySelector("#name-form");
    form.dispatchEvent(new Event("submit"));

    expect(setShip).toHaveBeenCalledWith("Player1");
  });

  test("should clear content on form submit", () => {
    setNamePage();

    const container = document.querySelector(".container");
    const pageContent = document.querySelector(".page-content");
    expect(pageContent).toBeTruthy();

    const form = document.querySelector("#name-form");
    form.dispatchEvent(new Event("submit"));

    expect(container.querySelector(".page-content")).toBeNull();
  });
});
