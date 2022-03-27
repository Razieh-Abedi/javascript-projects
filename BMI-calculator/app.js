let name = document.getElementById("input-name").value;
let age = document.getElementById("input-age").value;
let female = (document.getElementById("Female").selected = true);
let male = (document.getElementById("Male").selected = true);
let height = document.getElementById("input-height").value;
let weight = document.getElementById("input-weight").value;
let result = document.querySelector("#result");
let bmiCalculator = weight / (height * height);

console.log(adultBmiResult(bmiCalculator1, name1, age1));

function adultBmiResult(bmiCalculator, name, age) {
  if (age > 18) {
    if (bmiCalculator < 16) {
      result.innerText = "Dear " + name + " , you are severely thin.";
    } else if (16 <= bmiCalculator < 17) {
      result.innerText = "Dear " + name + " , you are moderately thin.";
    } else if ((17 <= bmiCalculator) & (bmiCalculator < 18.5)) {
      result.innerText = "Dear " + name + " , you are mildly thin.";
    } else if (18.5 <= bmiCalculator < 25) {
      result.innerText = "Dear " + name + " , you are normal.";
    } else if (25 <= bmiCalculator < 30) {
      result.innerText = "Dear " + name + " , you are overweight.";
    } else if (30 <= bmiCalculator < 35) {
      result.innerText = "Dear " + name + " , you are obese class one.";
    } else if (35 <= bmiCalculator < 40) {
      result.innerText = "Dear " + name + " , you are obese class two.";
    } else if (40 <= bmiCalculator) {
      result.innerText = "Dear " + name + " , you are obese class three.";
    }
  } else
    result.innerText =
      "Dear " + name + " , you are not whithin the normal range";
}
