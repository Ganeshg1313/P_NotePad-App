const container = document.querySelector(".container");
const inputBox = document.querySelector("#input-box");
const saveBtn = document.getElementById("save");
const autoSaveBtn = document.getElementById("autosave")
const clearBtn = document.getElementById("clear");
const appTitle = document.querySelector("#app-title");
const securityPrompt = document.querySelector(".form-container");
const acceptBtn = document.querySelector(".accept-button");

var saver;
var autoSave = 0;
var userNotes;

function displaydata() {
  inputBox.innerHTML = localStorage.getItem('note');
}

function saveNote() {
  userNotes = localStorage.getItem("note");

  userNotes += localStorage.setItem("note", inputBox.value);

  displaydata();
}

function autosaveNote(){
  if(autoSave == 0){
    autoSave = 1;
    saver = setInterval(()=>{
      saveNote();
      autoSaveBtn.innerHTML = "Turn Off Auto Save";
    },100);
  }else{
    autoSave = 0;
    clearInterval(saver);
    autoSaveBtn.innerHTML = "Turn On Auto Save"
  }
  

}


displaydata();


function clearNote(){
  inputBox.value = "";
  localStorage.removeItem('note');
  const typedCharacters = inputBox.value.length;
  typedCharactersElement.textContent = typedCharacters;
}


document.addEventListener("keydown", e =>{
  if(e.key.toLowerCase() === 's' && e.ctrlKey){
    saveNote();
    e.preventDefault();
  }
  else if(e.key.toLowerCase() === 'd' && e.ctrlKey){
    clearNote();
    e.preventDefault();
  }
  else if(e.key.toLowerCase() === 'f' && e.ctrlKey){
    changeTheme();
    e.preventDefault();

  }

});

acceptBtn.addEventListener("click",()=>{
  localStorage.setItem("securityTerm","accpeted");
})

window.addEventListener("onload",()=>{
  
  const status = localStorage.getItem("securityTerm");

  if(status == accepted){
    securityPrompt.classList.add(".hidden");
  }
  

})