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
const modalBtn = document.getElementsByClassName("modal-btn");
const formData = document.getElementsByClassName("formData");
const modalbgpopup = document.getElementById("bgroundpopup");
const Formulaire = document.getElementById("Formulaire");
const formChild = Formulaire.children;

// launch Modal-body
document.querySelector('.btn-signup').addEventListener("click", launchModalBody);
function launchModalBody() {
  modalbg.style.display = "block";
};

// close Modal-body
document.querySelector("span.close").addEventListener("click",closeModal);

function closeModal() {
  modalbg.style.display = "none";
};

// function to Check Formulaire

document.getElementById("Formulaire").addEventListener('submit', checkForm);
function checkForm (event){

    var reserveChild = reserve.children;
    var textValid = document.createElement("p");
    event.preventDefault();
  if (validateForm ()) {
	  for (child of reserveChild) { //Pour chaque enfant de "reserve"
      if (child.className == 'formData') { //si sa classe est "formData"
        child.classList.add('select-hide'); //ajoute la classe "select-hide"
    }
      if (child.className == 'text-label') { //si sa classe est "text-label"
        child.classList.add('select-hide'); //ajoute la classe "select-hide"
    }
      if (child.className == 'btn-submit') { //si sa classe est "btn-submit"
        child.classList.add('select-hide'); //ajoute la classe "select-hide"
    }
    //ajout du message de remerciement
    Formulaire.appendChild(textValid).innerHTML = "Merci ! Votre réservation a été reçue."
    textValid.classList.add('Text-validation');
   }
    //ajout du bouton fermer
    var BtnValid = document.createElement("button");
    Formulaire.appendChild(BtnValid);
    BtnValid.innerHTML = "Fermer";
    BtnValid.setAttribute('id', 'Btnclose');
    BtnValid.classList.add('btn-validation');
    BtnValid.classList.add('btn-close');
   }
  };
function validateForm () {
  // Check prénom
  var firstname = document.getElementById("first");
  var firstname_error = document.getElementById("first-error");
if (firstname.value.length != null && firstname.value.length > 1){
  firstname_error.innerText = "";
  firstname.style.border = '';
} else {
  firstname_error.innerText = "Veuillez entrer 2 caractères ou plus.";
  firstname_error.style.fontSize = '12px';
  firstname_error.style.color = 'red';
  firstname.style.border = 'solid 2px red';
  return false;
}
    // check nom
  var lastname = document.getElementById("last");
  var lastname_error = document.getElementById("last-error");
  if (lastname.value.length != null && lastname.value.length > 1){
  lastname_error.innerText = "";
  lastname.style.border = '';
} else {
  lastname_error.innerText = "Veuillez entrer 2 caractères ou plus.";
  lastname_error.style.fontSize = '12px';
  lastname_error.style.color = 'red';
  lastname.style.border = 'solid 2px red';
  return false;
}
  // check email
  var mail = document.getElementById("email");
  var mail_error = document.getElementById("email-error")
  var regMail = /^[a-z\d_\-]+(\.[\a-z\d\-]+)*@[a-z\d\-]+(\.[a-z\d]+)+$/;
  if (regMail.exec(mail.value)) {     //compare les deux données
  mail_error.innerText = "";
  mail.style.border = '';
} else {
  mail_error.innerText = "Veuillez saisir un mail valide";
  mail_error.style.fontSize = '12px';
  mail_error.style.color = 'red';
  mail.style.border = 'solid 2px red';
  return false;
  }
// Check Date
var birthdate = document.getElementById("birthdate");
var birthdate_error = document.getElementById("birthdate-error")
if(birthdate.value !=="") {
  birthdate_error.innerText = "";
  birthdate.style.border = '';
} else {
  birthdate_error.innerText = "Vous devez entrer votre date de naissance.";
  birthdate.style.border = 'solid 2px red';
  birthdate_error.style.fontSize = '12px';
  birthdate_error.style.color = 'red';
  return false;
}
//Check quantité
var quantityNumber = document.getElementById("quantity");
var quantityNumber_error = document.getElementById("quantity-error");
if(quantityNumber.value >= 0 && quantityNumber.value < 100 && quantityNumber.value != "") {
  quantityNumber_error.innerText = "";
  quantityNumber.style.border = '';
} else {
  quantityNumber_error.innerText = "Veuillez rentrer une quantité comprise entre 0 et 99";
  quantityNumber_error.style.fontSize = '12px';
  quantityNumber_error.style.color = 'red';
  quantityNumber.style.border = 'solid 2px red';
  return false;
}
// Check ville
var location1 = document.getElementById("location1");
var location2 = document.getElementById("location2");
var location3 = document.getElementById("location3");
var location4 = document.getElementById("location4");
var location5 = document.getElementById("location5");
var location6 = document.getElementById("location6");
var location_error = document.getElementById("location-error");
if(location1.checked||
  location2.checked||
  location3.checked||
  location4.checked||
  location5.checked||
  location6.checked) {
  location_error.innerText = "";
} else {
  location_error.innerText = "Vous devez choisir une option.";
  location_error.style.fontSize = '12px';
  location_error.style.color = 'red';
  return false;
}
// Check condition
var checkbox1 = document.getElementById("checkbox1");
var checkbox_error = document.getElementById("checkbox-error");
if(checkbox1.checked) {
  checkbox_error.innerText = "";
  checkbox_error.style.border = '';
} else {
  checkbox_error.innerText = "Vous devez vérifier que vous acceptez les termes et conditions.";
  checkbox_error.style.fontSize = '12px';
  checkbox_error.style.color = 'red';
  return false;
}
  return true;
};

 

  // close Modal-body
document.getElementById("Btnclose").addEventListener("click",closeModal);

function closeModal() {
  modalbg.style.display = "none";
};
