const emojis = ["❤️", "😂", "😒", "😊", "🥰", "😁", "🤣", "😎"];
const main = document.querySelector("main");

function randomize() {
  let newEmojis = emojis.concat(emojis);
  for (let i = 0; i < newEmojis.length - 1; i++) {
    let j = Math.floor(Math.random() * newEmojis.length);
    let k = newEmojis[i];
    newEmojis[i] = newEmojis[j];
    newEmojis[j] = k;
  }
  newEmojis.forEach((emoji) => {
    let html = `<div class='card'></div>'`;
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
      let timeout;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        card.textContent = "";
        card.classList.remove("rotated");
      }, 2000);
    });
  });
}

function checkCards() {
  const cards = document.querySelectorAll(".card");
  var array = [];
  cards.forEach((card, index) => {
    var selected = false;
    card.addEventListener("click", () => {
      if (selected) {
        return 0;
      } else {
        selected = true;
        array.push(cards[index].textContent);
      }
      let timeout;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        selected = false;
      }, 2000);
    });
  });
}

checkCards();
