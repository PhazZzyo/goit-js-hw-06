const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');
const listItems = ingredients.map(element => {
  const listItem = document.createElement('li');
  listItem.textContent = element;
  listItem.classList.add('item');
  return listItem;
});

ingredientsList.append(...listItems);