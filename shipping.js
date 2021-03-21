const form = document.querySelector(".shipForm");

const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError"); 
const subject = document.querySelector("#subjectTest");
const subjectError = document.querySelector("#subjectTestError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subjectText = document.querySelector("#textarea");
const subjectTextError = document.querySelector("#textError");


const button = document.querySelector("#ship");

console.log(button);

console.log(subject);


function validateThis() {
  event.preventDefault()




  if (checkTheLength(firstName.value, 1) === true) {
    firstNameError.style.display = "none";
    


  } else {
    firstNameError.style.display = "block";


  }

}


shipForm.addEventListener("submit", validateForm);



function checThekLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}
