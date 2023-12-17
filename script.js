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

// To display the note
function displaydata() {
  inputBox.innerHTML = localStorage.getItem('note');
}

//To save the note
function saveNote() {
  userNotes = localStorage.getItem("note");

  userNotes += localStorage.setItem("note", inputBox.value);

  displaydata();
}

// To toggle the auto save
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


// To display the data when the script loads
displaydata();

//To clear the note
function clearNote(){
  inputBox.value = "";
  localStorage.removeItem('note');
  const typedCharacters = inputBox.value.length;
  typedCharactersElement.textContent = typedCharacters;
}

//To execute the function when the user use any shortcut key
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


// To store the security term status in local storage
function acceptTerms(){
  localStorage.setItem("securityTerm","accepted");
  securityPrompt.style.display="none";
}

//To show check if the user has previously accepted the security term or not
window.addEventListener("load",()=>{
  
  const status = localStorage.getItem("securityTerm");

  if(status == "accepted"){
    securityPrompt.style.display="none";
  }
  
})