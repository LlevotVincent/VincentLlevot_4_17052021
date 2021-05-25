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
document.getElementById("first").addEventListener("change", function(check) {
  var firstname = check.target.value;
  if (firstname.length == null || firstname.length < 2){
    console.log('pas assez de caractere');
    document.getElementById("first-error").innerText = "Veuillez entrer 2 caractères ou plus.";
  } else {
    console.log('C est bon');
    document.getElementById("first-error").innerText = "";
  }
});

// check lastname
document.getElementById("last").addEventListener("change", function(check) {
  var lastname = check.target.value;
  if (lastname.length == null || lastname.length < 2) {
    console.log('pas assez de caractere');
    document.getElementById("last-error").innerText = "Veuillez entrer 2 caractères ou plus.";
  } else {
    console.log('C est bon');
    document.getElementById("last-error").innerText = "";
  }
});

//check email
document.getElementById("email").addEventListener("change", function(check) {
  var mail = check.target.value;
  var regMail = /^[a-z\d_\-]+(\.[\a-z\d\-]+)*@[a-z\d\-]+(\.[a-z\d]+)+$/;
  if (regMail.exec(mail)) {     //compare les deux données
    console.log('e-mail bon');
    document.getElementById("email-error").innerText = "";
  } else {
    console.log('e-mail faux');
    document.getElementById("email-error").innerText = "Veuillez saisir un mail valide";
  }
});

//Check quantité
document.getElementById("quantity").addEventListener("change", function(check) {
  var quantityNumber = check.target.value;
  if(quantityNumber > 0 && quantityNumber < 99) {
    console.log('quantity bonne');
    document.getElementById("quantity-error").innerText = "";
  } else {
    console.log('quantity fausse');
    document.getElementById("quantity-error").innerText = "Veuillez rentrer une quantité comprise entre 0 et 99";
  }
});

//Check city
document.getElementById('btn-submit').addEventListener("click",function(a){
  if(location1.checked ===true) {
    console.log('check ok');
  } else {
    console.log('check Nok');
  }

})





