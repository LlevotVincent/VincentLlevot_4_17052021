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


function checkFirst(text) {
	if (text.value !== '' && text.value.length >= 2){
    FirstError.style.display = "none";
  }else{ 
    document.getElementById("firstError")
    FirstError.style.display = "block";
}}

 
function checkContent(type) {
 
  let errorMessages = {
    first: "Veuillez entrer 2 caractères ou plus pour le champ prénom.",
    last: "Veuillez entrer 2 caractères ou plus pour le champ nom.",
    email: "Veuillez entrer une adresse email valide.",
    date: "Veuillez entrer une date de naissance valide.",
    quantity: "Le nombre maximum de tournois est 99.",
    location: "Veuillez choisir une ville.",
    checkbox: "Veuillez accepter les conditions d'utilisations.",
  };
    //first last name validation
  if (type === "first" || type === "last") {
    let zoneForm = document.getElementById(type).value;
    console.log(type)
    if (zoneForm != null && zoneForm.length >= 1) {
      console.log("Le ", type, "est bon")
      document.getElementById(type + "-error").innerText = ""
    } else {
      document.getElementById(type + "-error").innerText = errorMessages[type]
    }

    // email validation
  } else if (type === "email") {
    let zoneForm = document.getElementById(type).value;
    let regMail = /^[a-z\d_\-]+(\.[\a-z\d\-]+)*@[a-z\d\-]+(\.[a-z\d]+)+$/;
    console.log(type)
    if (regMail.exec(zoneForm)) {
      console.log("Le ", type, "est bon")
      document.getElementById(type + "-error").innerText = ""
    } else {
      document.getElementById(type + "-error").innerText = errorMessages[type]
    }

    // date validation
  } else if (type === "date") {

    // quantity validation
  } else if (type === "quantity") {
    let zoneForm = document.getElementById(type).value;
    console.log(type)
    if (zoneForm >= 0 && zoneForm <= 99 ) {
      console.log("Le ", type, "est bon")
      document.getElementById(type + "-error").innerText = ""
    } else {
      document.getElementById(type + "-error").innerText = errorMessages[type]
    }
  }
//





}
