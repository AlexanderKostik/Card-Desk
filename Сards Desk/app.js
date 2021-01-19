const
  btnAddCard = document.querySelector('.btnAddCard'),
  btnDeleteCard = document.querySelector('.btnDeleteCard'),
  btnEvenCards = document.querySelector('.btnEvenCards'),
  btnOddCards = document.querySelector('.btnOddCards'),
  btnAllCards = document.querySelector('.btnAllCards'),
  btnDeleteAllCards = document.querySelector('.btnDeleteAllCards'),
  fieldAddCards = document.getElementById('fieldAddCards'),
  divMessege = document.body.querySelector('.message');

let numberOfCards = 0;// количество созданных карт и номер карты

// const newDate = new Date;
// document.getElementById('year').innerText = newDate.getFullYear();


btnAddCard.addEventListener('click', addCard);
btnDeleteCard.addEventListener('click', deleteCard);
btnEvenCards.addEventListener('click', showOnlyEvenCards);
btnOddCards.addEventListener('click', showOnlyOddCards);
btnAllCards.addEventListener('click', showAllCards);
btnDeleteAllCards.addEventListener('click', deleteAllCards);
fieldAddCards.addEventListener('keyup', addCards);



function addCard() { // добавить карту

  // считаем количество созданных карт
  // if (typeof addcard.numberOfCards == 'undefined') {
  //   addcard.numberOfCards = 0;
  // }
  // addcard.numberOfCards++;
  numberOfCards++;

  const newCard = document.createElement('div');
  newCard.className = 'card';
  const inner = document.createElement('div');
  inner.className = 'inner';
  inner.appendChild(document.createTextNode(numberOfCards));
  newCard.appendChild(inner);
  document.body.querySelector('.cards-field').appendChild(newCard);

  //console.log(newCard);
}

function deleteCard() { // удалить карту

  if (numberOfCards > 0) {
    const cardsField = document.querySelector('.cards-field');
    cardsField.removeChild(cardsField.lastChild);
    numberOfCards--;

    //console.log(numberOfCards);
  }

}

function showOnlyEvenCards() { // показать только ЧЕТНЫЕ карты

  const cardsField = document.querySelector('.cards-field');


  for (var i = 0; i < cardsField.children.length; i++) {
    //cardsField.children[i].classList.remove('hidden');
    cardsField.children[i].style.display = "inline-block";
  }

  for (var i = 0; i < cardsField.children.length; i++) {

    if (parseInt(cardsField.children[i].innerText) % 2 != 0) {
      //cardsField.children[i].classList.add('hidden');
      cardsField.children[i].style.display = "none";
    } else {
      cardsField.children[i].style.background = '#4078a5';
    }

  }

}

function showOnlyOddCards() { // показать только НЕ ЧЕТНЫЕ карты

  const cardsField = document.querySelector('.cards-field');

  for (var i = 0; i < cardsField.children.length; i++) {
    //cardsField.children[i].classList.remove('hidden');
    cardsField.children[i].style.display = "inline-block";
  }

  for (var i = 0; i < cardsField.children.length; i++) {

    if (parseInt(cardsField.children[i].innerText) % 2 == 0) {
      //cardsField.children[i].classList.add('hidden');
      cardsField.children[i].style.display = "none";
    } else {
      cardsField.children[i].style.background = '#6600cc';
    }
  }

}

function showAllCards() { // показать все карты

  const cardsField = document.querySelector('.cards-field');

  for (var i = 0; i < cardsField.children.length; i++) {
    // cardsField.children[i].classList.remove('hidden');
    cardsField.children[i].style.display = 'inline-block';
    // cardsField.children[i].style.background = 'seagreen';
    cardsField.children[i].style.backgroundColor = 'seagreen';
  }
}

function deleteAllCards() {
  let tmp = numberOfCards;
  for (var i = 0; i < tmp; i++) {
    deleteCard();
  }

}

function addCards() {
  const newCerds = parseInt(fieldAddCards.value);

  // Validate
  if (isNaN(newCerds) || newCerds < 1 || newCerds > 10) {
    divMessege.style.display = "block";
    message('Please, enter a number between 1 and 10', '#cc0000');
  } else {
    divMessege.style.display = "none";
    for (var i = 0; i < newCerds; i++) {
      addCard();
    }
  }

}

function message(text, color) {
  divMessege.textContent = text;
  divMessege.style.fontSize = "20px";
  divMessege.style.color = color;
}


