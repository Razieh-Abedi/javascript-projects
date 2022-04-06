//////*************single convertor****** */
// document.querySelector(".result-arrow").addEventListener("click", () => {
//   let centimeter = document.getElementById("centimeter");
//   let meter = document.getElementById("meter");
//   let metreToCentimeter = meter.value * 100;
//   let centimeterToMeter = centimeter.value / 100;
//   centimeter.value = metreToCentimeter;
//   meter.value = centimeterToMeter;
// });

/////************multi convertor************/

document.querySelector(".result-arrow2").addEventListener("click", () => {
  console.log("hello");
  let resultLeft = document.getElementById("result-text-left");
  let resultRight = document.getElementById("result-text-right");
  let americanUnit = document.getElementById("american-input");
  let worldUnit = document.getElementById("world-input");
  let optionFrom = americanUnit.value;
  let optionTo = worldUnit.value;
  
  let inchToCentimeter = resultLeft.value * 2.54;
  let centimeterToInch = resultRight.value / 2.54;
  let footToMeter = resultLeft.value / 3.28;
  let meterToFoot = resultRight.value * 3.28;
  let mileToKilometer = resultLeft.value * 1.6;
  let kilometerToMile = resultRight.value / 1.6;

  if (optionFrom == "inch" && optionTo == "centimeter") {
    resultRight.value = inchToCentimeter;
    resultLeft.value = centimeterToInch;
  } else if (optionFrom == "foot" && optionTo == "meter") {
    resultRight.value = footToMeter;
    resultLeft.value = meterToFoot;
  } else if (optionFrom == "mile" && optionTo == "kilometer") {
    resultRight.value = mileToKilometer;
    resultLeft.value = kilometerToMile;
  }
});
