let currentValue = 0;
let lastValue = 0;
let totalValue = 0;
let operator = ""; // يجب تعريف متغير لحفظ العمليات الرياضية

const btns = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const target = e.currentTarget.innerHTML;
    if (!isNaN(target)) {
      // التحقق مما إذا كان الضغط على زر رقم
      currentValue = parseFloat(currentValue.toString() + target);
      screen.innerHTML = currentValue;
    } else {
      switch (target) {
        case "C":
          currentValue = 0;
          lastValue = 0;
          totalValue = 0;
          operator = "";
          screen.innerHTML = currentValue;
          break;
        case "Del":
          let value = currentValue.toString();
          value = value.slice(0, -1);
          currentValue = parseFloat(value);
          screen.innerHTML = currentValue;
          break;
        case "%":
          currentValue *= 0.01;
          screen.innerHTML = currentValue;
          break;
        case "/":
          operator = "/";
          lastValue = currentValue;
          currentValue = 0;
          break;
        case "X":
          operator = "X";
          lastValue = currentValue;
          currentValue = 0;
          break;
        case "-":
          operator = "-";
          lastValue = currentValue;
          currentValue = 0;
          break;
        case "+":
          operator = "+";
          lastValue = currentValue;
          currentValue = 0;
          break;
        case "=":
          switch(operator){
            case "/":
                totalValue = lastValue / currentValue
                break;
            case "X":
                totalValue = lastValue * currentValue
                break;
            case "-":
                totalValue = lastValue - currentValue
                break;
            case "+":
                totalValue = lastValue + currentValue
                break;
          }
          screen.innerHTML = totalValue;
          break;
        default:
          console.log("default");
      }
    }
  });
});