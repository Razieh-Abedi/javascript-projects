// document.getElementById("first-name").style.border = "2px solid purple";
// document.getElementById("last-name").value = "Williams";

// let phoneTemp = document.getElementById("phone-number").required;
// if ((phoneTemp = true)) phoneTemp = false;
// else phoneTemp = true;

// let emailValue = document.getElementById("email-address").value;
// let temp = emailValue.slice(0, emailValue.length - 9);
// document.getElementById("email-address").value = temp + "gmail.com";
// console.log(document.getElementById("email-address").value);

// //////////Event listener practice/////////

document.querySelector(".submit-btn").addEventListener("click", () => {
  let firstName = document.getElementById("first-name");
  let firstNameValue = firstName.value;
  let firstNameError = document.querySelector(".invalid-first-name");
  let firstNameLabel = document.querySelector(".first-name-label");
  let regExFirstName = /^[A-Za-z]+$/;
  if (firstNameValue == "") {
    firstName.style.border = "1px solid red";
    firstNameError.innerText = "Enter your first name!";
    // firstNameError.style.transform = "scale(1.2)";
  } else if (!regExFirstName.test(firstNameValue)) {
    firstName.style.border = "1px solid #3f51db";
    firstNameLabel.innerText = "You forgot your first name?";
    firstNameLabel.classList.add("text-danger");
  }
  let passWord = document.getElementById("password");
  if (passWord.value == "") {
    document.querySelector(".validpass").innerText = "Enter your password!";
    passWord.style.border = "1px solid red";
  } else if (passWord.value.length < 8) {
    document.querySelector(".validpass").innerText =
      " Your password should be at least 8 characters!";
    passWord.style.border = "1px solid red";
  }
  let lastName = document.getElementById("last-name");
  let lastNameValue = lastName.value;
  let regExLastName = /^[A-Za-z]+$/;
  if (lastNameValue == "") {
    document.querySelector(".valid-ln").innerText = "Enter your last name!";
  } else if (!regExLastName.test(lastNameValue)) {
    document.querySelector(".valid-ln").innerText =
      "Please enter a valid last name!";
  }
  // if (!regExLastName.test(lastNameValue)) {
  //   document.querySelector(".valid-ln").innerText =
  //     "Please enter a valid last name!";
  //   lastName.style.border = "1px solid red";
  // } else if (lastNameValue == "") {
  //   document.querySelector(".valid-ln").innerText = "Enter your last name!";
  // }
  // let email = document.getElementById("email-address");
  // let emailValue = email.value;
  // let emailTemp = emailValue.slice(emailValue.length - 4);

  // if (emailTemp !== ".com") {
  //   document.querySelector(".valid-email").innerText =
  //     "Your email address is not vaild!";
  // }
});

////////Event handler practice///////
function validNumber() {
  let phoneNumber = document.getElementById("phone-number");
  let phoneNumberValue = phoneNumber.value;
  if (phoneNumberValue.length < 8) {
    document.querySelector(".vaild-number").innerText =
      "Your phone number should be at least 8 digits!";
  }
}

function validAddress() {
  let address = document.getElementById("physical-address");
  if (address.value == "") {
    document.querySelector(".valid-address").innerText =
      "Please enter your address!";
    address.style.background = "#b79090";
    document.querySelector(".address-label").innerText = "";
  }
}

/////form validation with regualr expressions//////
// function validateEmail() {
//   let email = document.getElementById("email-address");
//   let emailValue = email.value;
//   let emailError = document.querySelector(".valid-email");
//   let regExEmail =
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   if (!regExEmail.test(emailValue)) {
//     emailError.innerText = "Please enter a vaild email address!";
//   }
// }
// console.log(validateEmail(emailValue, emailError));

document.querySelector(".submit-btn").addEventListener("click", () => {
  let email = document.getElementById("email-address");
  let emailValue = email.value;
  let emailError = document.querySelector(".valid-email");
  let regExEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regExEmail.test(emailValue)) {
    emailError.innerText = "Invalid email address!";
    email.style.border = "1px solid red";
  }
});

document.getElementById("password-icon-show").addEventListener("click", () => {
  let passwordHide = document.getElementById("password-icon-hide");
  let passWord = document.getElementById("password");
  let passwordShow = document.getElementById("password-icon-show");
  passWord.type = "text";
  passwordShow.style.display = "none";
  passwordHide.style.display = "inline";
});

document.getElementById("passwordHide").addEventListener("click", () => {
  let passwordHide = document.getElementById("password-icon-hide");
  let passWord = document.getElementById("password");
  let passwordShow = document.getElementById("password-icon-show");
  passWord.type = "password";
  passwordHide.style.display = "none";
  passwordShow.style.display = "inline";
});
