const emojis = ["❤️", "😂", "😒", "😊", "🥰", "😁", "🤣", "😎"];
const main = document.querySelector("main");

// Randomizes the emojis
for (let i = 0; i < emojis.length - 1; i++) {
  let j = Math.floor(Math.random() * emojis.length);
  let k = emojis[i];
  emojis[i] = emojis[j];
  emojis[j] = k;
}

var level;
level = 8;
var newEmojis;

// Creates pairs of emojis and randomizes them
function randomize() {
  emojis.length = level;
  newEmojis = emojis.concat(emojis);
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
}

randomize();

// Used to check whether cards chosen are correct
const cards = document.querySelectorAll(".card");
const scoreDisplay = document.querySelector("h2");
var score = 0;
var array = [];
cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    console.log("clicked");
    if (!card.classList.contains("rotated")) {
      card.textContent = newEmojis[index];
      card.classList.add("rotated");
    } else if (card.classList.contains("rotated")) {
      return;
    }
    array.push(card.textContent);
    let timeout;
    clearTimeout(timeout);
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
        score += 100;
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
