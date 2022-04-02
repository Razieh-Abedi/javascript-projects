// 0<x<3   =>   x>0 && x<3
///logical operators////
// &&  ||  !

/////BMI calculator for adults//////
function adultBmiResult(bmiCalculator, name, age) {
  if (age > 18) {
    if (bmiCalculator < 16) {
      result.innerText = "Dear " + name + " , you are severely thin.";
    } else if (16 <= bmiCalculator && bmiCalculator < 17) {
      result.innerText = "Dear " + name + " , you are moderately thin.";
    } else if (17 <= bmiCalculator && bmiCalculator < 18.5) {
      result.innerText = "Dear " + name + " , you are mildly thin.";
    } else if (18.5 <= bmiCalculator && bmiCalculator < 25) {
      result.innerText = "Dear " + name + " , you are normal.";
    } else if (25 <= bmiCalculator && bmiCalculator < 30) {
      result.innerText = "Dear " + name + " , you are overweight.";
    } else if (30 <= bmiCalculator && bmiCalculator < 35) {
      result.innerText = "Dear " + name + " , you are obese class one.";
    } else if (35 <= bmiCalculator && bmiCalculator < 40) {
      result.innerText = "Dear " + name + " , you are obese class two.";
    } else if (40 <= bmiCalculator) {
      result.innerText = "Dear " + name + " , you are obese class three.";
    }
  } else
    result.innerText =
      "Dear " + name + " , you are not whithin the normal range";
}

document.querySelector(".submit-btn").addEventListener("click", function () {
  let name = document.getElementById("input-name").value;
  let age = document.getElementById("input-age").value;
  let height = document.getElementById("input-height").value;
  let weight = document.getElementById("input-weight").value;
  let heightMeter = height / 100;
  let result = document.querySelector("#result");
  let bmiCalculator = weight / (heightMeter * heightMeter);
  adultBmiResult(bmiCalculator, name, age);
});

///////BMI calculator for female children//////
function femaleChildrenBmiResult(age, female, name, bmiCalculator) {
  let female = (document.getElementById("Female").selected = true);
  if (2 < age && age <= 18 && female) {
    if (16 <= bmiCalculator && bmiCalculator < 20) {
      result.innerText = "Dear " + name + " , you are thin.";
    } else if (20 < bmiCalculator && bmiCalculator <= 25) {
      result.innerText = "Dear " + name + " , you are normal. ";
    } else if (25 < bmiCalculator && bmiCalculator <= 30) {
      result.innerText = "Dear " + name + " , you are overweight.";
    }
  } else {
    result.innerText =
      "Dear " + name + " , you are not within the normal range ";
  }
}
document.querySelector(".submit-btn").addEventListener("click", function () {
  let name = document.getElementById("input-name").value;
  let age = document.getElementById("input-age").value;
  let height = document.getElementById("input-height").value;
  let weight = document.getElementById("input-weight").value;
  let heightMeter = height / 100;
  let result = document.querySelector("#result");
  let bmiCalculator = weight / (heightMeter * heightMeter);
  femaleChildrenBmiResult(bmiCalculator, name, female, age);
});
