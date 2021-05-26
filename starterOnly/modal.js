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















// check firstname
document.getElementById("first").addEventListener("change",checkFirstName) 

function checkFirstName() {
  var firstname = document.getElementById("first").value;
  if (firstname.length == null || firstname.length < 2){
    console.log('pas assez de caractere');
    document.getElementById("first-error").innerText = "Veuillez entrer 2 caractères ou plus.";
    return checkFirstName = false;
  } else {
    console.log('prénom bon');
    document.getElementById("first-error").innerText = "";
    return checkFirstName = true;
  }
};

// check lastname
document.getElementById("last").addEventListener("change", checkLastName)

function checkLastName() {
  var lastname = document.getElementById("last").value;
  if (lastname.length == null || lastname.length < 2) {
    console.log('pas assez de caractere');
    document.getElementById("last-error").innerText = "Veuillez entrer 2 caractères ou plus.";
    return checkLastName = false;
  } else {
    console.log('nom bon');
    document.getElementById("last-error").innerText = "";
    return checkLastName = true;
  }
};

//check email
document.getElementById("email").addEventListener("change", checkEmail)

function checkEmail(check) {
  var mail = check.target.value;
  var regMail = /^[a-z\d_\-]+(\.[\a-z\d\-]+)*@[a-z\d\-]+(\.[a-z\d]+)+$/;
  if (regMail.exec(mail)) {     //compare les deux données
    console.log('e-mail bon');
    document.getElementById("email-error").innerText = "";
    return checkEmail = true;
  } else {
    console.log('e-mail faux');
    document.getElementById("email-error").innerText = "Veuillez saisir un mail valide";
    return checkEmail = false;
  }
};

//Check quantité
document.getElementById("quantity").addEventListener("change", checkQuantity)
function checkQuantity(check) {
  var quantityNumber = check.target.value;
  if(quantityNumber > 0 && quantityNumber < 99) {
    console.log('quantity bonne');
    document.getElementById("quantity-error").innerText = "";
    return checkQuantity = true;
  } else {
    console.log('quantity fausse');
    document.getElementById("quantity-error").innerText = "Veuillez rentrer une quantité comprise entre 0 et 99";
    return checkQuantity = false;
  }
};

//Check Date

document.getElementById("birthdate").addEventListener("change", checkbirthdate)
function checkbirthdate(check) {
  var birthdate = check.target.value;
  if(birthdate !=="") {
    console.log('birthdate bonne');
    document.getElementById("birthdate-error").innerText = "";
    return checkbirthdate = true;
  } else {
    console.log('birthdate fausse');
    document.getElementById("birthdate-error").innerText = "Veuillez renseigner une date";
    return checkbirthdate = false;
  }
};

//Check City

const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");

function checklocation (){


  if (location1.checked === true) {
    console.log('c est coché');
    return checklocation = true;
  } else {
    return checklocation = false
  }
}


//validation Formulaire

document.getElementById("Formulaire").addEventListener("submit", validation)
function validation(e) {
  if (checkFirstName === true 
    && checkLastName === true 
    && checkEmail === true
    && checkQuantity === true
    && checkbirthdate === true
    && checklocation === true) {
    console.log('le formulaire est valide');
    }
  else {
    console.log('le formulaire est non valide');
    e.preventDefault();
  }
}
