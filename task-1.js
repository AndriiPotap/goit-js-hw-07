const listOfCateg = document.querySelector('#categories').children;
console.log(`В списке ${listOfCateg.length} категории.`);

Array.from(listOfCateg).forEach(Element => {
    const heading = Element.querySelector('h2').textContent;
    const items =Element.querySelectorAll('li');

console.log(`Категория: ${heading},
Количество елементов: ${items.length}.`);
})