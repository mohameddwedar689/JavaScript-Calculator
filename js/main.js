// selecting Calc Screen
let display = document.getElementById("screen");
// selecting all buttons;
let buttons = Array.from(document.getElementsByClassName("row-item"));
//dyving into it
buttons.map((buttons) => {
  buttons.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "Reset":
        display.innerText = "";
        break;
      case "DEL":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error⛔";
        }
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
