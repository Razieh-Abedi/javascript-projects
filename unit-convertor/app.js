document.querySelector(".arrow-icon").addEventListener("click", () => {
  let centimeter = document.getElementById("centimeter");
  let centimeterValue = centimeter.value;
  let meter = document.getElementById("meter");
  let meterValue = meter.value;
  let metreToCentimeter = meterValue * 100;
  let centimeterToMeter = centimeterValue / 100;
  centimeterValue = metreToCentimeter;
  meterValue = centimeterToMeter;
});
