document.getElementById("first-name").style.border = "2px solid purple";
document.getElementById("last-name").value = "Williams";

let phoneTemp = document.getElementById("phone-number").required;
if ((phoneTemp = true)) phoneTemp = false;
else phoneTemp = true;

let emailValue = document.getElementById("email-address").value;
let temp = emailValue.slice(0, emailValue.length - 9);
document.getElementById("email-address").value = temp + "gmail.com";
console.log(document.getElementById("email-address").value);
