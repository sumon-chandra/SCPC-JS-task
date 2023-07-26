const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const char = e.target.value;
    if (char === "C") {
      display.value = "";
    } else if (char === "=") {
      if (display.value === "" || endsWithOperator(display.value)) {
        alert("Something went wrong");
      } else {
        try {
          display.value = eval(display.value);
        } catch (error) {
          alert("Something went wrong");
        }
      }
    } else {
      display.value += char;
    }
  });
});

function endsWithOperator(input) {
  const operators = ["+", "-", "*", "/"];
  const lastChar = input[input.length - 1];
  return operators.includes(lastChar);
}
