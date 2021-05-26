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


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close FormPopup
const closePopup = document
  .querySelector("span.close")
  .addEventListener("click",closeFormPopup)

function closeFormPopup() {
  modalbg.style.display = "none";
}

document.getElementById("Formulaire").addEventListener('submit', checkForm)
function checkForm () {

  // Check prénom
  var firstname = document.getElementById("first").value;
  if (firstname.length != "" || firstname.length > 2){
    document.getElementById("first-error").innerText = "";
  } else {
    document.getElementById("first-error").innerText = "Veuillez entrer 2 caractères ou plus.";
    event.preventDefault();
  }
  // check nom
  var lastname = document.getElementById("last").value;
  if (lastname.length != "" || lastname.length > 2) {
    document.getElementById("last-error").innerText = "";
  } else {
    document.getElementById("last-error").innerText = "Veuillez entrer 2 caractères ou plus.";
    event.preventDefault();
  }
  // check email
  var mail = document.getElementById("email").value;
  var regMail = /^[a-z\d_\-]+(\.[\a-z\d\-]+)*@[a-z\d\-]+(\.[a-z\d]+)+$/;
  if (regMail.exec(mail)) {     //compare les deux données
    document.getElementById("email-error").innerText = "";
  } else {
    document.getElementById("email-error").innerText = "Veuillez saisir un mail valide";
    event.preventDefault();
  }
  //Check quantité
  var quantityNumber = document.getElementById("quantity").value;
  if(quantityNumber > 0 && quantityNumber < 99) {
    document.getElementById("quantity-error").innerText = "";
  } else {
    document.getElementById("quantity-error").innerText = "Veuillez rentrer une quantité comprise entre 0 et 99";
    event.preventDefault();
  }
  // Check Date
  var birthdate = document.getElementById("birthdate").value;
  if(birthdate !=="") {
    document.getElementById("birthdate-error").innerText = "";
  } else {
    document.getElementById("birthdate-error").innerText = "Veuillez renseigner une date";
    event.preventDefault();
  }
  // Check ville
  var location1 = document.getElementById("location1");
  var location2 = document.getElementById("location2");
  var location3 = document.getElementById("location3");
  var location4 = document.getElementById("location4");
  var location5 = document.getElementById("location5");
  var location6 = document.getElementById("location6");
  if(location1.checked||location2.checked||location3.checked||location4.checked||location5.checked||location6.checked) {
    document.getElementById("location-error").innerText = "";
  } else {
    document.getElementById("location-error").innerText = "Veuillez cocher une ville";
    event.preventDefault();
  }





};
