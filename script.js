const container = document.querySelector(".container");
const inputBox = document.querySelector("#input-box");
const btn1 = document.getElementById("save");
const btn2 = document.getElementById("clear");
const btn3 = document.getElementById("theme");
const appTitle = document.querySelector("#app-title");
const characterCounterElement = document.querySelector("#character-counter");
let typedCharactersElement = document.getElementById("typed-characters");

var userNotes;

function charCounter(){
    const typedCharacters = inputBox.value.length;
    typedCharactersElement.textContent = typedCharacters;
}

inputBox.addEventListener("keyup",charCounter);



function displaydata() {
  inputBox.innerHTML = localStorage.getItem("note");
}

function saveNote() {
  userNotes = localStorage.getItem("note");

  userNotes += localStorage.setItem("note", inputBox.value);

  displaydata();
}

function clearNote() {
  localStorage.clear();
  displaydata();
}

function setTheme() {
  if (container.classList.contains("light")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
}

function checkTheme() {
  let theme = localStorage.getItem("theme");
  console.log(theme);
  if (theme != "light") {
    container.classList.remove("light");
    container.classList.add("dark");
    appTitle.classList.remove("light");
    appTitle.classList.add("dark");
    inputBox.classList.remove("light");
    inputBox.classList.add("dark");
    btn1.classList.remove("light");
    btn1.classList.add("dark");
    btn2.classList.remove("light");
    btn2.classList.add("dark");
    btn3.classList.remove("light");
    btn3.classList.add("dark");
    characterCounterElement.classList.remove("light");
    characterCounterElement.classList.add("dark");
  }
}

function changeTheme() {
  if (container.classList.contains("light")) {
    container.classList.remove("light");
    container.classList.add("dark");
    appTitle.classList.remove("light");
    appTitle.classList.add("dark");
    inputBox.classList.remove("light");
    inputBox.classList.add("dark");
    btn1.classList.remove("light");
    btn1.classList.add("dark");
    btn2.classList.remove("light");
    btn2.classList.add("dark");
    btn3.classList.remove("light");
    btn3.classList.add("dark");
    characterCounterElement.classList.remove("light");
    characterCounterElement.classList.add("dark");
    
  } else {
    appTitle.classList.remove("dark");
    appTitle.classList.add("light");
    container.classList.remove("dark");
    container.classList.add("light");
    inputBox.classList.remove("dark");
    inputBox.classList.add("light");
    btn1.classList.remove("dark");
    btn1.classList.add("light");
    btn2.classList.remove("dark");
    btn2.classList.add("light");
    btn3.classList.remove("dark");
    btn3.classList.add("light");
    characterCounterElement.classList.remove("dark");
    characterCounterElement.classList.add("light");
  }

  if (container.classList.contains("light")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
}

window.addEventListener("load", checkTheme, false);
displaydata();
window.addEventListener("beforeunload", setTheme, false);
window.addEventListener("load",charCounter);