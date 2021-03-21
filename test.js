const shipForm = document.querySelector(".shippingForm");

const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError"); 
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const city = document.querySelector("#city");
const cityError = document.querySelector("#cityError");
const zipCode = document.querySelector("#zipCode");
const zipCodeError = document.querySelector("#zipCodeError")
const country = document.querySelector("#country");
const countryError = document.querySelector("#countryError");
const emailShip = document.querySelector("#emailShip");
const emailShipError = document.querySelector("#emailShipError");

const button = document.querySelector("button#ship");

console.log(button);

console.log(firstNameError);
console.log(lastNameError);

console.log(addressError);
console.log(cityError);
console.log(zipCodeError);
console.log(countryError);
console.log(emailShipError);

console.log(validateShip);



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
}
  
  
  
  
shipForm.addEventListener("submit", validateShip);


  function checkForLength(value, len) {
    if (value.trim().length >= len) {
      return true;
    } else {
      return false;
    }
  }
  
  

function validateNumber(inputZip) {
    const zipNumber = /^\d{6}$/;
    const numbersMatch = zipNumber.test(inputZip)
  return numbersMatch;

}

function validateCountry() {
    if (country.value == "0") {
        return false;
    } else {
        return true;
    }
   }


  function validateEmail2(email) {
    const someSigns = /\S+@\S+\.\S+/;
    const emailMatches = someSigns.test(email);
    return emailMatches;
  }

}