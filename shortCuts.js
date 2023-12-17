const shortcuts = document.querySelector(".shortCuts");
const shortBtn = document.querySelector(".close-button");

//To display the shortcuts
function displayShortCuts(){
    shortcuts.style.display="flex";
  }
  
//To close the shortcuts display box  
shortBtn.addEventListener("click",function close(){
    shortcuts.style.display="none";
  });
