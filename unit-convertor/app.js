// document.querySelector(".result-arrow").addEventListener("click", () => {
//   let centimeter = document.getElementById("centimeter");
//   let meter = document.getElementById("meter");
//   let metreToCentimeter = meter.value * 100;
//   let centimeterToMeter = centimeter.value / 100;
//   centimeter.value = metreToCentimeter;
//   meter.value = centimeterToMeter;
// });
function inchCentimeter(inch, centimeter) {
  if (inch.selected == true && centimeter.selected == true) {
    resultLeft.value = centimeterToInch;
    resultRight.value = inchToCentimeter;
  }
}
document.querySelector(".result-arrow").addEventListener("click", () => {
  let inch = document.getElementById("inch");
  let centimeter = document.getElementById("centimeter");
  let foot = document.getElementById("foot");
  let meter = document.getElementById("meter");
  let mile = document.getElementById("mile");
  let kilometer = document.getElementById("kilometer");
  let resultLeft = document.getElementById("result-text-left");
  let resultRight = document.getElementById("result-text-right");
  let inchToCentimeter = inch.value * 2.54;
  let centimeterToInch = centimeter.value / 2.54;
  inchCentimeter(inch, centimeter);
});
