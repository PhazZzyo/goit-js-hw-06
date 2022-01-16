const tuneFontSize = document.querySelector('#font-size-control');
const textOutput = document.querySelector('#text');

textOutput.style.fontSize = `${tuneFontSize.value}px`;

tuneFontSize.addEventListener("input", () => {
  textOutput.style.fontSize = `${tuneFontSize.value}px`;
});