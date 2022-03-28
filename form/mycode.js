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

let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name").value;
let validLastName = document.querySelector(".valid-ln");
let passWord = document.getElementById("password").value;
let email = document.getElementById("email-address").value;
let emailTemp = email.slice(email.length - 4);
console.log(emailTemp);
document.querySelector(".submit-btn").addEventListener("click", function () {
  if (firstName.value == "") {
    firstName.style.background = "#e2a5a5";
  }
  if (passWord < 6) {
    document.querySelector(".validpass").innerText =
      "Your password should be at least 6 characters!";
  }
  if (lastName.length < 4) {
    document.querySelector(".valid-ln").innerText =
      "Please enter a valid last name!";
  }
  if (emailTemp !== ".com") {
    document.querySelector(".valid-email").innerText =
      "Your email address is not vaild!";
  }
});
