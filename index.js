const buttonEl = document.getElementById("btn");

const bmiInputEl = document.getElementById("bmi-result");

const weightConditonEl = document.getElementById("weight-conditon");

function calculateBMI() {
  const heightValue = document.getElementById("height").value / 100; //change in cm to meters
  const weightValue = document.getElementById("weight").value;

  const bmiValue = weightValue / (heightValue * heightValue);
  bmiInputEl.value = bmiValue;

  if (bmiValue < 18.5) {
    weightConditonEl.innerText = "Under Weight";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    weightConditonEl.innerText = "Normal Weight";
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    weightConditonEl.innerText = "Over Weight";
  } else if (bmiValue >= 30) {
    weightConditonEl.innerText = "Obesity";
  }
}

buttonEl.addEventListener("click", calculateBMI);
