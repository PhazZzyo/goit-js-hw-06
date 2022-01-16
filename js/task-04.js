let counterValue = 0;
const valueRef = document.querySelector('#value');
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

decrementButton.addEventListener('click', incrementValue);
incrementButton.addEventListener('click', decrementValue);

function decrementValue() {
  counterValue += 1;
  valueRef.innerHTML = counterValue;
}

function incrementValue() {
  counterValue -= 1;
  valueRef.innerHTML = counterValue;
}