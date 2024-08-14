let numbers = [];

for (let i = 0; i < 7; i++) {
  let randomNumber = Math.floor(Math.random() * 111) + 1; // Генерация числа от 1 до 111
  numbers.push(randomNumber); // Добавление числа в массив
}

// Получаем элемент с id="numberList"
const numberList = document.getElementById("numberList");

// Создаем строку с элементами списка
let listHTML = '';

numbers.forEach((number, i) => {
    listHTML += `<div class="num"> Համար <li>${number}</li> 
    <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
    </div>`; // Добавляем каждое число в строку HTML
  });
  

  
// Используем innerHTML для добавления всех <li> в <ul>
numberList.innerHTML = listHTML;
