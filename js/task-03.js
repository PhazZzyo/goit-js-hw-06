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
galleryRef.classList.add('gallery-list');
// --- without function

// const galleryItems = images.map(property => {
// const imageRef = document.createElement('img');
//   imageRef.src = property.url;
//   imageRef.alt = property.alt;
//   return imageRef;
// });

// galleryRef.append(...galleryItems);

// --- with function

const makeGallery = (properties) => {
  return properties.map(property => {
    const itemRef = document.createElement('li');
    itemRef.classList.add('gallery-item');
    const imageRef = document.createElement('img');
    imageRef.classList.add('gallery-img');
    imageRef.src = property.url;
    imageRef.alt = property.alt;    
    itemRef.appendChild(imageRef);
    return itemRef;
  });  
};

const galleryItems = makeGallery(images);
galleryRef.append(...galleryItems);