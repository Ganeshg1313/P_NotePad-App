const inputBox = document.getElementById("input-box");
const saveBtn = document.getElementById("save");
var userNotes;

function displaydata(){
    inputBox.innerHTML = localStorage.getItem("note");
}

function saveNote(){

    // console.log("btn")
    userNotes = localStorage.getItem("note");

    userNotes += localStorage.setItem("note",inputBox.value);

    displaydata();

}


function clearNote(){
    localStorage.clear();
    displaydata();
}


function changeTheme(){
}

displaydata();


