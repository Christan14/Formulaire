console.log("connecté");

//Je sélectionne et je stocke tous les élément nécessaires
const form = document.getElementById("formulaire");
const prenom = document.getElementById("prenom");
const nom = document.getElementById("nom");
const email = document.getElementById("email");
const message = document.getElementById("message");

const msgError = document.querySelectorAll(".error");

const titre = document.getElementById("titre");

//Je détecte la validation du formulaire
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("formulaire envoyé");

  //Je récupère les valeurs de chacun des inputs
  const prenomValue = prenom.Value.trim();
  console.log(prenomValue.length, "prenom");
  const nomValue = nom.value.trim();
  console.log(nomValue.length, "nom");
  const emailValue = email.value.trim();
  console.log(emailValue, "email");
  const messageValue = massega.value.trim();
  console.log(messageValue.length, "message");

  msgError.forEach(error => {
    error.classList.add("invisible");
  });

  //Je vérifie les informations de l'utilisateur
  if (prenomValue.length < 2 || prenomValue.length > 10) {
    console.log("erreur prenom");
    prenom.nextElementSibling.classList.remove("invisible");
  } else if (nomValue.length < 3 || nomValue.length > 15) {
    console.log("erreur nom");
    nom.nextElementSibling.classList.remove("invisible");
  } else if (messageValue.length < 10 || messageValue.length > 100) {
    console.log("erreur message");
    message.nextElementSibling.classList.remove("invisible");
  } else {
    console.log("succès");
    //titre.innerText = "votre message a bien été envoyé !";
    // Spression du formulaire
    //form.remove();
  };
});//fermeture de form.addEventListener
