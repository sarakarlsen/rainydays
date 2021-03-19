const form = document.querySelector("#contactForm");

const fname = document.querySelector("#fname");
const fnameError = document.querySelector("#fnameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");

const button = document.querySelector(".submit");

console.log(button);


function validateForm() {
  event.preventDefault()


  if (checkLength(fname.value, 0) === true) {
    fnameError.style.display = "none";


  } else {
    fnameError.style.display = "block";

  }

  if (checkLength(subject.value, 10) === true) {
    subjectError.style.display = "none";

  } else {
    subjectError.style.display = "block";
    valid = false;
  }

  if (checkLength(address.value, 25) === true) {
    addressError.style.display = "none";



  } else {
    addressError.style.display = "block";
 
  }
  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
    valid = true;
  } else {
    emailError.style.display = "block";

  }


}

form.addEventListener("submit", validateForm);



function checkLength(value, len) {
  if (value.trim().length <= len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const someSigns = /\S+@\S+\.\S+/;
  const emailMatches = someSigns.test(email);
  return emailMatches;
}

console.log(email);

