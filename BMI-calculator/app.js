let name = document.getElementById("input-name").value;
let age = document.getElementById("input-age").value;
let female = (document.getElementById("Female").selected = true);
let male = (document.getElementById("Male").selected = true);
let height = document.getElementById("input-height").value;
let weight = document.getElementById("input-weight").value;
let result = document.querySelector("#result");
let bmiCalculator = weight / (height * height);

// function adultBmiResult(bmiCalculator, name, age) {
//   if ((age > 18) & (bmiCalculator > 16))
//     return "Dear " + name + " , you are severely thin.";
//   else if ((age > 18) & (16 <= bmiCalculator < 17))
//     return "Dear " + name + " , you are moderately thin.";
//   else if ((age > 18) & (17 <= bmiCalculator < 18.5))
//     return "Dear " + name + " , you are mildly thin.";
//   else if ((age > 18) & (18.5 <= bmiCalculator < 25))
//     return "Dear " + name + " , you are normal.";
//   else if ((age > 18) & (25 <= bmiCalculator < 30))
//     return "Dear " + name + " , you are overweight.";
//   else if ((age > 18) & (30 <= bmiCalculator < 35))
//     return "Dear " + name + " , you are obese class one.";
//   else if ((age > 18) & (35 <= bmiCalculator < 40))
//     return "Dear " + name + " , you are obese class two.";
//   else if ((age > 18) & (40 <= bmiCalculator))
//     return "Dear " + name + " , you are obese class three.";
// }
