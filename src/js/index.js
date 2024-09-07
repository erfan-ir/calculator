import { buttons, result, equal, clearDisplay, del } from "./helper.js";

const showDisplay = (button) => {
  const btn = button.target.value;
  +result.value === 0 ? (result.value = btn) : (result.value += btn);
};

const equalHandler = () => {
  const evalition = eval(result.value);

  evalition === undefined ? (result.value = 0) : (result.value = evalition);
};
const clearHandler = () => {
  result.value = "";
};

const deleteHandler = () => {
  let res = result.value.slice(0, -1);
  result.value = res;
};

del.addEventListener("click", deleteHandler);
clearDisplay.addEventListener("click", clearHandler);
equal.addEventListener("click", equalHandler);
buttons.forEach((button) => {
  button.addEventListener("click", (button) => showDisplay(button));
});
