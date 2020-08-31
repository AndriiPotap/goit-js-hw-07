const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const listOfIngr = document.querySelector('#ingredients');
  console.log(listOfIngr);

  const items = ingredients.map(ingredient => {
      const li = document.createElement('li');
      li.textContent = ingredient;
      return li;
  });

  listOfIngr.append(...items);
