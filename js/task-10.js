const boxes = document.querySelector('#boxes');
const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
// let inputValue = document.querySelector('input'); // first variant

create.addEventListener('click', () => {
  // let quantity = +inputValue.value; // first variant
  let quantity = create.previousElementSibling.value;
  if (quantity === '' || quantity > 100) { 
    return alert('Incorrect value, please enter quantity in range of 1 - 100!');
  }
  createBoxes(quantity);
});

destroy.addEventListener('click', () => {
  boxes.innerHTML = '';  
  // inputValue.value = ''; // first variant
  create.previousElementSibling.value = '';
});

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
      
      size += 10;
      counter += 1;
    }
  boxes.appendChild(element);
};

  const getRandomHexColor = () => {  
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}