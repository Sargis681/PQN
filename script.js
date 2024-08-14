let numbers = [];
let numbersTwo = [];

while (numbers.length < 7) {
  let randomNumber = Math.floor(Math.random() * 111) + 1; 
  
  if (!numbers.includes(randomNumber)) {
    numbers.push(randomNumber);
  }
}

while (numbersTwo.length < 3) {
  let randomNumberTwo = Math.floor(Math.random() * 19) + 1; 
  
  if (!numbersTwo.includes(randomNumberTwo)) {
    numbersTwo.push(randomNumberTwo);
  }
}

const numberList = document.getElementById("numberList");
const numberListTwo = document.getElementById("numberListTwo");

let listHTML = '';
let listHTMLTwo = '';



numbers.forEach((number) => {
  listHTML += `
    <div class="num">
      Համար:
      <ul>
        <li>${number}</li>
      </ul>
      <textarea name="description" rows="4" cols="50"></textarea>
    </div>
  `;
});

numbersTwo.forEach((number) => {
  listHTMLTwo += `
    <div class="num">
      Համար:
      <ul>
        <li>${number}</li>
      </ul>
      <textarea name="description" rows="4" cols="50"></textarea>
    </div>
  `;
});

numberListTwo.innerHTML = listHTMLTwo;
numberList.innerHTML = listHTML;
