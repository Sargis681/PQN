let numbers = [];

// Генерация 7 уникальных случайных чисел
while (numbers.length < 7) {
  let randomNumber = Math.floor(Math.random() * 111) + 1; // Генерация числа от 1 до 111
  
  // Проверка на уникальность
  if (!numbers.includes(randomNumber)) {
    numbers.push(randomNumber);
  }
}

// Получаем элемент с id="numberList"
const numberList = document.getElementById("numberList");

// Создаем строку с элементами
let listHTML = '';

numbers.forEach((number) => {
  listHTML += `<div class="num"> 
  
    Համար:
    <li>
    ${number}
    <li/>
    <textarea name="description" rows="4" cols="50"></textarea>
  </div>`;
});

// Используем innerHTML для добавления всех <div> в элемент с id="numberList"
numberList.innerHTML = listHTML;
