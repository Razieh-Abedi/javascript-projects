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
  let firstNameLabelText =
    document.querySelector(".first-name-label").innerText;
  if (firstName.value == "") {
    firstName.style.background = "#e2a5a5";
    // firstNameLabelText.style.transition = "transform scale(2, 0.5)";
  }
  let passWord = document.getElementById("password");
  if (passWord.value < 6) {
    document.querySelector(".validpass").innerText =
      "Your password should be at least 6 characters!";
  }
  let lastName = document.getElementById("last-name");
  let lastNameValue = lastName.value;
  if (lastNameValue.length < 4) {
    document.querySelector(".valid-ln").innerText =
      "Please enter a valid last name!";
  }
  let email = document.getElementById("email-address");
  let emailValue = email.value;
  let emailTemp = emailValue.slice(emailValue.length - 4);

  if (emailTemp !== ".com") {
    document.querySelector(".valid-email").innerText =
      "Your email address is not vaild!";
  }
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
