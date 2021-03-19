const form = document.querySelector("#contactForm");

const fname = document.querySelector("#fullName");
const fnameError = document.querySelector("#fullNameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subjectText = document.querySelector("#textarea");
const subjectTextError = document.querySelector("#textError");

const button = document.querySelector(".submit");

console.log(button);


function validateForm() {
  event.preventDefault()


  if (checkLength(fname.value, 0) === true) {
    fnameError.style.display = "none";


  } else {
    fnameError.style.display = "block";

  }


  if (checkLength(subjectText.value, 25) === true) {
    subjectTextError.style.display = "none";


  } else {
    subjectTextError.style.display = "block";
 
  }
  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";

  }

  if(validateSubject(subject.value) === true) {
      subjectError.style.display = "none";
  } else {
      subjectError.style.display = "block";

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

function validateSubject() {
 if (subject.value == "subject") {
     return false;
 } else {
     return true;
 }
}

console.log(email);

