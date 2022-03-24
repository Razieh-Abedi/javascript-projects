let name = document.getElementById("input-name").value;
let age = document.getElementById("input-age").value;
let female = (document.getElementById("Female").selected = true);
let male = (document.getElementById("Male").selected = true);
let height = document.getElementById("input-height").value;
let weight = document.getElementById("input-weight").value;
let bmiResult = weightValue / (heightValue * heightValue);

if (age >= 18) {
  if (bmiResult < 16) {
    result = "Dear " + name + " , you are severely thin.";
  } else if (16 <= bmiResult < 17)
    result = "Dear " + name + " , you are moderately thin.";
  else if (17 <= bmiResult < 18.5)
    return "Dear " + name + " , you are mildly thin.";
  else if (18.5 <= bmiResult < 25) return "Dear " + name + " , you are normal.";
  else if (25 <= bmiResult < 30)
    return "Dear " + name + " , you are overweight.";
  else if (30 <= bmiResult < 35)
    return "Dear " + name + " , you are obese class one.";
  else if (35 <= bmiResult < 40)
    return "Dear " + name + " , you are obese class two.";
  else if (40 <= bmiResult)
    return "Dear " + name + " , you are obese class three.";
}
