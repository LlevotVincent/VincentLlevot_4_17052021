function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalbgpopup = document.getElementById("bgroundpopup");
const validBtn = document.querySelector(".btn-submit");



// launch modal event
document.querySelector('.btn-signup').addEventListener("click", launchModalBody);

// launch modal form
function launchModalBody() {
  modalbg.style.display = "block";
}

// close ModalBody
const closePopup = document
  .querySelector("span.close")
  .addEventListener("click",closeModalBody)

function closeModalBody() {
  modalbg.style.display = "none";
}

// function to Check Formulaire

let validForm = false;

document.getElementById("Formulaire").addEventListener('submit', checkForm)
function checkForm (event) {

  // Check prénom
  var firstname = document.getElementById("first");
  var firstname_error = document.getElementById("first-error");
  if (firstname.value.length = null || firstname.value.length < 2){
    firstname_error.innerText = "Veuillez entrer 2 caractères ou plus.";
    firstname_error.style.fontSize = '12px';
    firstname_error.style.color = 'red';
    firstname.style.border = 'solid 2px red';
    event.preventDefault();
  } else {
    firstname_error.innerText = "";
    firstname.style.border = '';
    return validform = true;
  }
};

// launch modal form

function launchModalpopup (){
  var modalbgpopup = document.getElementById("bgroundpopup");
if (validForm = true) {
  modalbgpopup.style.display = "block";
}
};
