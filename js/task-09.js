function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(".change-color");
const backgroundColorValue = document.querySelector('span.color');


const changeBackgroundColor = () => {
  let randomHexColor = getRandomHexColor();
  document.body.style.backgroundColor = randomHexColor;
  backgroundColorValue.innerHTML = randomHexColor;
};

button.addEventListener('click', changeBackgroundColor);