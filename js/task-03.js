const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('.gallery');
galleryRef.classList.add('gallery-images');

const image = document.createElement('img');
image.src = imageLink;
containerRef.append(Image);





const galleryItems = item => {
  const { url, alt } = item;
  return `<li class="gallery-item">
    <img src="${url}" alt="${alt}" class="gallery-image"></img>
  </li>`;
};

const addGallaryListToMarckup = images.map(galleryList).join('');
gallery.insertAdjacentHTML('afterbegin', addGallaryListToMarckup);





// const ingredientsList = document.querySelector('#ingredients');
// const listItems = ingredients.map(element => {
//   const listItem = document.createElement('li');
//   listItem.textContent = element;
//   listItem.classList.add('item');
//   return listItem;
// });

// ingredientsList.append(...listItems);