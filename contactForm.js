const form = document.querySelector(".contactForm");

const fname = document.querySelector("#fullName");
const fnameError = document.querySelector("#fullNameError"); 
const subject = document.querySelector("#subjectTest");
const subjectError = document.querySelector("#subjectTestError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subjectText = document.querySelector("#textarea");
const subjectTextError = document.querySelector("#textError");
const zipCode = document.querySelector("#zipCode")
const zipCodeError = document.querySelector("#zipCodeError")


const button = document.querySelector("#button");

console.log(button);

console.log(subject);


function validateForm() {
  event.preventDefault()




  if (checkLength(fname.value, 1) === true) {
    fnameError.style.display = "none";
    


  } else {
    fnameError.style.display = "block";


  }


  if (checkLength(subjectText.value, 25) === true) {
    subjectTextError.style.display = "none";


  } else {
    subjectTextError.style.display = "block";
    valid = false;
 
  }
  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";


  }

  if (validateSubject(subject.value) === true) {
      subjectError.style.display = "none";
  } else {
      subjectError.style.display = "block";


  } 
  if (validateNumber(zipCode.value) === true) {

  

    zipCodeError.style.display = "none";

  } else {

    zipCodeError.style.display = "block";
  }



}


form.addEventListener("submit", validateForm);



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


function validateNumber(inputZip) {
  const zipNumber = /^\d{6}$/;
  const numbersMatch = zipNumber.test(inputZip)
return numbersMatch;

  


}