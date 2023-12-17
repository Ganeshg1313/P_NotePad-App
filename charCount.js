const characterCounterElement = document.querySelector("#character-counter");
let typedCharactersElement = document.getElementById("typed-characters");

//To update the char count
function charCounter(){
    const typedCharacters = inputBox.value.length;
    typedCharactersElement.textContent = typedCharacters;
}

inputBox.addEventListener("keyup",charCounter);
window.addEventListener("onpaste", charCounter);
window.addEventListener("oncut",charCounter);
window.addEventListener("load",charCounter);