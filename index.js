let inputHeight = document.querySelector(".inputHeight");
let inputWeight = document.querySelector(".inputWeight");
let computeBtn = document.querySelector(".ComputeBtn");
let yourBMI = document.querySelector(".yourBMI");
let condition = document.querySelector(".condition");

computeBtn.addEventListener("click",function(){
  let x = inputHeight.value
  let y = inputWeight.value

  let bmi = y/(x*x);
  let result = bmi.toFixed(2);

  yourBMI.value = result;
  if(result < 18.5){
    condition.innerHTML = `Weight Condition: Underweight`;
  } else if(result >= 18.5 && result <= 24.9){
    condition.innerHTML = `Weight Condition: Normal weight`;
  }else if(result <= 25 && result <= 29.9){
    condition.innerHTML = "Weight Condition: Overweight";
  }else{
    condition.innerHTML = "Weight Condition: Obesity";
  }
})


