const form = document.querySelector(".contactForm");

const fname = document.querySelector("#fullName");
const fnameError = document.querySelector("#fullNameError");
const subject = document.querySelector("#subjectTest");
const subjectError = document.querySelector("#subjectTestError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subjectText = document.querySelector("#textarea");
const subjectTextError = document.querySelector("#textError");

const button = document.querySelector("#button");

console.log(button);

console.log(subject);

let isFormValid = false;

function validateForm() {
  if (checkLength(fname.value, 1) === true) {
    fnameError.style.display = "none";
    isFormValid = true;
  } else {
    fnameError.style.display = "block";
    isFormValid = false;
  }

  if (checkLength(subjectText.value, 25) === true) {
    subjectTextError.style.display = "none";
    isFormValid = true;
  } else {
    subjectTextError.style.display = "block";
    isFormValid = false;
  }
  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
    isFormValid = true;
  } else {
    emailError.style.display = "block";
    isFormValid = false;
  }

  if (validateSubject(subject.value) === true) {
    subjectError.style.display = "none";
    isFormValid = true;
  } else {
    subjectError.style.display = "block";
    isFormValid = false;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
  console.log("submit");
  if (isFormValid) {
    form.innerHTML = `<div class="container"> Thank you for your message. We will get back to you as soon as possible.</div> `;
  }
});

function checkLength(value, len) {
  if (value.trim().length >= len) {
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
  if (subject.value == "0") {
    return false;
  } else {
    return true;
  }
}
