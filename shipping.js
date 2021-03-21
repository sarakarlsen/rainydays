const form = document.querySelector(".shippingForm");

const firstName = document.querySelector("#e");
const firstNameError = document.querySelector("#fullNameError"); 
const lastName = document.querySelector("#subjectTest");
const lastNameError = document.querySelector("#subjectTestError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const city = document.querySelector("#city");
const cityError = document.querySelector("#cityError");
const zipCode = document.querySelector("#zipCode");
const zipCodeError = document.querySelector("#zipCodeError")
const country = document.querySelector("#country");
const countryError = document.querySelector("#countryError");
const emailShip = document.querySelector("#emailShip");
const emailShipError = document.querySelector("#emailErrorShipError");



function validateShip() {
    event.preventDefault()
  
  
  
  
    if (checkForLength(firstName.value, 1) === true) {
      firstNameError.style.display = "none";
      
  
  
    } else {
      firstNameError.style.display = "block";
  
  
    }
  
  
    if (checkForLength(lastName.value, 2) === true) {
      lastNameError.style.display = "none";
  
  
    } else {
      lastNameError.style.display = "block";
   
    }

    if (checkForLength(address.value, 10) === true) {
        addressError.style.display = "none";
    
    
      } else {
        addressError.style.display = "block";
     
      }

      if (checkForLength(city.value, 3) === true) {
        cityError.style.display = "none";
    
    
      } else {
        cityError.style.display = "block";
     
      }

      if (validateNumber(zipCode.value) === true) {
  
    
  
        zipCodeError.style.display = "none";
    
      } else {
    
        zipCodeError.style.display = "block";
      }
      
      if (validateCountry(country.value) === true) {
        countryError.style.display = "none";
    } else {
        countryError.style.display = "block";





    if (validateEmail2(email.value) === true) {
      emailShipError.style.display = "none";
    } else {
      emailShipError.style.display = "block";
  
  
    }
  
    if (validateSubject(subject.value) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
  
  
    } 
  
  
  
  }
  
  
  form.addEventListener("submit", validateShip);
  
  

function validateNumber(inputZip) {
    const zipNumber = /^\d{6}$/;
    const numbersMatch = zipNumber.test(inputZip)
  return numbersMatch;

}

function validateCountry() {
    if (subject.value == "0") {
        return false;
    } else {
        return true;
    }
   }


   function checkForLength(value, len) {
    if (value.trim().length >= len) {
      return true;
    } else {
      return false;
    }
  }

  function validateEmail2(email) {
    const someSigns = /\S+@\S+\.\S+/;
    const emailMatches = someSigns.test(email);
    return emailMatches;
  }

}