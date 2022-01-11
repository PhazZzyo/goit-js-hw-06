const catCount = document.querySelectorAll('ul#categories li.item');
const catCountLenght = catCount.length;
const catName = [];
console.log(`Number of categories: ${catCountLenght}`);

catCount.forEach(element => {
    console.log('Category:', element.firstElementChild.textContent);
    console.log('Elements:', element.querySelectorAll('li').length);
});