function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxes = document.querySelector('#boxes');
const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');

const createBoxes = (quantity) => {  
  const element = document.createDocumentFragment();
  let size = 30;
  let counter = 0;
    while (counter < quantity) {  
      const div = document.createElement('div');
      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.backgroundColor = `${getRandomHexColor()}`;
      element.appendChild(div);  
      boxes.appendChild(element);
      size += 10;
      counter += 1;
}  
};


const destroyBoxes = () => { 
  boxes.innerHTML = '';
}

create.addEventListener("click", () => {
  let quantity = +document.querySelector('input[type=number]').value;
  if (quantity === 0) { 
    return alert("Incorrect value, please enter quantity that is bigger than 0!");
  }
  createBoxes(quantity);
});

destroy.addEventListener('click', destroyBoxes);