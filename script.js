const inputBox = document.getElementById("input-box");

document.addEventListener("onkeypress",saveNote());

function saveNote(){
    localStorage.setItem("note",inputBox.value);
}

function retrieveNote(){
    localStorage.getItem();
}

retrieveNote();