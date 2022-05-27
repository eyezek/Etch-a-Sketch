let button = document.getElementById("howMany");
const container = document.createElement("div");
container.setAttribute("id", "container");
document.body.appendChild(container);

function createDivs() {
  const square1 = document.createElement("div");
  square1.classList.add("squares");
  square1.setAttribute("id", "square1");
  container.appendChild(square1);
  const square2 = document.createElement("div");
  square2.classList.add("squares");
  square2.setAttribute("id", "square2");
  container.appendChild(square2);
  const square3 = document.createElement("div");
  square3.classList.add("squares");
  square3.setAttribute("id", "square3");
  container.appendChild(square3);
  const square4 = document.createElement("div");
  square4.classList.add("squares");
  square4.setAttribute("id", "square4");
  container.appendChild(square4);
  const square5 = document.createElement("div");
  square5.classList.add("squares");
  square5.setAttribute("id", "square5");
  container.appendChild(square5);
  const square6 = document.createElement("div");
  square6.classList.add("squares");
  square6.setAttribute("id", "square6");
  container.appendChild(square6);
  const square7 = document.createElement("div");
  square7.classList.add("squares");
  square7.setAttribute("id", "square7");
  container.appendChild(square7);
  const square8 = document.createElement("div");
  square8.classList.add("squares");
  square8.setAttribute("id", "square8");
  container.appendChild(square8);
  const square9 = document.createElement("div");
  square9.classList.add("squares");
  square9.setAttribute("id", "square9");
  container.appendChild(square9);
  const square10 = document.createElement("div");
  square10.classList.add("squares");
  square10.setAttribute("id", "square10");
  container.appendChild(square10);
  const square11 = document.createElement("div");
  square11.classList.add("squares");
  square11.setAttribute("id", "square11");
  container.appendChild(square11);
  const square12 = document.createElement("div");
  square12.classList.add("squares");
  square12.setAttribute("id", "square12");
  container.appendChild(square12);
  const square13 = document.createElement("div");
  square13.classList.add("squares");
  square13.setAttribute("id", "square13");
  container.appendChild(square13);
  const square14 = document.createElement("div");
  square14.classList.add("squares");
  square14.setAttribute("id", "square14");
  container.appendChild(square14);
  const square15 = document.createElement("div");
  square15.classList.add("squares");
  square15.setAttribute("id", "square15");
  container.appendChild(square15);
  const square16 = document.createElement("div");
  square16.classList.add("squares");
  square16.setAttribute("id", "square16");
  container.appendChild(square16);
}

// createDivs();

button.addEventListener("click", function () {
  let input = prompt("How big would you like your grid to be? 1-100 please!");
  if (input > 100) {
    window.alert("please enter a number less than 100!");
    return;
  } else
    while (container.hasChildNodes()) {
      container.removeChild(container.firstChild);
    }
  for (let i = 0; i < input; i++) {
    let square = document.createElement("div");
    document.body.appendChild(square);
    square.classList.add("squares");
    container.appendChild(square);
  }
  let squares = document.querySelectorAll(".squares");
  squares.forEach((square) => {
    square.addEventListener("mouseover", function () {
      square.classList.add("active");
    });
  });
});
