nominals = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "T"];

images = [
  `images/clubs.svg`,
  `images/spades.svg`,
  `images/diamonds.svg`,
  `images/hearts.svg`,
  `images/jack.svg`,
  `images/queen.svg`,
  `images/king.svg`,
];

for (i = 0, cards = []; i <= 12; i++) {
  if ((i >= 0 && i <= 8) || i == 12) {
    for (j = 0; j <= 3; j++) {
      cards.push(
        `<div class="card">
        <div class="top__string">${nominals[i]} <img src="${images[j]}" alt="${images[j]}" class = "usual__card--img">
        </div>
        <div class="bottom__string">${nominals[i]} <img src="${images[j]}" alt="${images[j]}" class = "usual__card--img">
        </div>
        </div>`
      );
    }
  } else {
    for (j = 0; j <= 3; j++) {
      cards.push(
        `<div class="card">
        <div class="top__string">${nominals[i]} <img src="${images[j]}" alt="${
          images[j]
        }" class = "usual__card--img">
        </div>
        <div>
        <img src="${images[i - 5]}" alt="${images[i - 5]}">
        </div>
        <div class="bottom__string">${nominals[i]} <img src="${
          images[j]
        }" alt="${images[j]}" class = "usual__card--img">
        </div>
        </div>`
      );
    }
  }
}
cardsFinal = cards.join(" ");
console.log(cards);

document.write(cardsFinal);
