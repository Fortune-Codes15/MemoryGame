const emojis = ["❤️", "😂", "😒", "😊", "🥰", "😁", "🤣", "😎"];
const main = document.querySelector("main");

function randomize() {
  emojis.length = 4;
  let newEmojis = emojis.concat(emojis);
  for (let i = 0; i < newEmojis.length - 1; i++) {
    let j = Math.floor(Math.random() * newEmojis.length);
    let k = newEmojis[i];
    newEmojis[i] = newEmojis[j];
    newEmojis[j] = k;
  }
  newEmojis.forEach(() => {
    let html = `<div class='card'></div>`;
    main.innerHTML += html;
  });
  rotateCards(newEmojis);
}

randomize();

function rotateCards(newEmojis) {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      card.textContent = newEmojis[index];
      card.classList.add("rotated");
    });
  });
}

function checkCards() {
  const cards = document.querySelectorAll(".card");
  const scoreDisplay = document.querySelector("h2");
  var score = 0;
  var array = [];
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      console.log("clicked");
      let timeout;
      clearTimeout(timeout);
      array.push(card.textContent);

      if (array.length === 2) {
        if (array[0] === array[1]) {
          for (let i = 0; i < cards.length; i++) {
            if (
              cards[i].textContent == array[0] ||
              cards[i].textContent == array[1]
            ) {
              cards[i].classList.add("gone");
            }
          }
          score++;
          array = [];
          scoreDisplay.textContent = `Score: ${score}`;
        } else {
          cards.forEach((card) => {
            timeout = setTimeout(() => {
              card.textContent = "";
              array = [];
              card.classList.remove("rotated");
            }, 500);
          });
        }
        array = [];
      }
    });
  });
}

checkCards();
