/*global
alert, confirm, console, Debug, opera, prompt, WSH, document
*/
/*jslint plusplus: true */

function getRandomInt(min, max) {
    "use strict";
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// alert(getRandomInt(1, 10));

/*

function getCard(deck) {
    "use strict";
    var cards;

    if (deck === 36) {
        cards = ["cA", "c6", "c7", "c8", "c9", "c10", "cJ", "cQ", "cK",
                 "dA", "d6", "d7", "d8", "d9", "d10", "dJ", "dQ", "dK",
                 "hA", "h6", "h7", "h8", "h9", "h10", "hJ", "hQ", "hK",
                 "sA", "s6", "s7", "s8", "s9", "s10", "sJ", "sQ", "sK"];
        return cards[getRandomInt(0, cards.length - 1)];
    }

    if (deck === 52) {
        cards = ["cA", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10", "cJ", "cQ", "cK",
                 "dA", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "d10", "dJ", "dQ", "dK",
                 "hA", "h2", "h3", "h4", "h5", "h6", "h7", "h8", "h9", "h10", "hJ", "hQ", "hK",
                 "sA", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "sJ", "sQ", "sK"];
        return cards[getRandomInt(0, cards.length - 1)];
    }
}

*/

function getDeck(deck_size) {
    "use strict";
    var deck;

    if (deck_size === 36) {
        deck = ["cA", "c6", "c7", "c8", "c9", "c10", "cJ", "cQ", "cK",
                "dA", "d6", "d7", "d8", "d9", "d10", "dJ", "dQ", "dK",
                "hA", "h6", "h7", "h8", "h9", "h10", "hJ", "hQ", "hK",
                "sA", "s6", "s7", "s8", "s9", "s10", "sJ", "sQ", "sK"];
        return deck;
    }

    if (deck_size === 52) {
        deck = ["cA", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10", "cJ", "cQ", "cK",
                "dA", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "d10", "dJ", "dQ", "dK",
                "hA", "h2", "h3", "h4", "h5", "h6", "h7", "h8", "h9", "h10", "hJ", "hQ", "hK",
                "sA", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "sJ", "sQ", "sK"];
        return deck;
    }
}

function getCard(deck) {
    "use strict";
    return deck[getRandomInt(0, deck.length - 1)];
}

function pullCardFromDeck(card, deck) {
    "use strict";
    var i;
    for (i = 0; i < deck.length; ++i) {
        if (deck[i] === card) {
            deck.splice(i, 1);
            break;
        }
    }
    return deck;
}

function getSum(arr) {
    "use strict";
    var i, sum = 0;
    // Считаем все карты кроме тузов
    for (i = 0; i < arr.length; i++) {
        if (arr[i].charAt(1) !== "A") {
            if (arr[i].charAt(1) === "J" || arr[i].charAt(1) === "Q" || arr[i].charAt(1) === "K") {
                sum += 10;
            } else if (arr[i].charAt(1) === "1" && arr[i].charAt(2) === "0") {
                sum += 10;
            } else {
                sum += parseInt(arr[i].charAt(1), 10);
            }
        }
    }

    // Считаем тузы
    for (i = 0; i < arr.length; i++) {
        if (arr[i].charAt(1) === "A" && sum > 10) {
            sum += 1;
        } else if (arr[i].charAt(1) === "A" && sum <= 10) {
            sum += 11;
        }
    }
    return sum;
}

function getStatus(dealer, player) {
    "use strict";
    return "Диллер: " + dealer.join(" ") + " Игрок: " + player.join(" ") + ".";
}



// Выбираем колоду - 36 карт или 52
// var deck_size = parseInt(prompt("Какую колоду карт выбираем — 36 карт или 52 карты?"), 10);
var deck_size = 52;

// Получаем колоду
var deck = getDeck(deck_size);

// alert("Выбрана колода в " + deck_size + " карты.\r\r" + deck);

document.getElementById("deck").innerHTML = deck;

// Раздаем карты дилеру
var i;
var card;
var dealer = [];
for (i = 0; i < 1; i++) {
    card = getCard(deck);
    deck = pullCardFromDeck(card, deck);
    dealer.push(card);
}

document.getElementById("dealer-cards").innerHTML = dealer;


// раздаем карты игроку
var player = [];
for (i = 0; i < 2; i++) {
    card = getCard(deck);
    deck = pullCardFromDeck(card, deck);
    player.push(card);
}

document.getElementById("player-cards").innerHTML = player;

/*
alert("Карты дилера: " + dealer + " dealer.charAt(1): " + dealer[0].charAt(1) + " Сумма  = " + getSum(dealer) + "\n" +
      "Карты игрока: " + player + " player.charAt(1): " + player[0].charAt(1) + " Сумма  = " + getSum(player) + "\n");


var answer;

do { // Сдаём карту игроку либо прекращаем игру
    if (getSum(player) < 21) {

        answer = parseInt(prompt(getStatus(dealer, player) + " Хотите ещё карту? 1 - да, иначе - нет"), 10);

        if (answer === 1) {
            card = getCard(deck);
            deck = pullCardFromDeck(card, deck);
            player.push(card);
        }

        alert(getStatus(dealer, player));
    } else {
        answer = 0;
    }
} while (answer === 1);

while (getSum(dealer) < 17) { // Сдаём карты дилеру, если нужно
    card = getCard(deck);
    deck = pullCardFromDeck(card, deck);
    dealer.push(card);
}

alert(deck);

alert("Карты дилера: " + dealer + " dealer.charAt(1): " + dealer[0].charAt(1) + " Сумма  = " + getSum(dealer) + "\n" +
      "Карты игрока: " + player + " player.charAt(1): " + player[0].charAt(1) + " Сумма  = " + getSum(player) + "\n");

if (getSum(player) === 21) {
    alert(getStatus() + " Игрок победил — BlackJack!");
} else if (getSum(player) > 21) {
    alert("Дилер: " + getSum(dealer) + " Игрок: " + getSum(player) + " Игрок проиграл — Перебор!");
} else if (getSum(player) > getSum(dealer)) {
    alert("Дилер: " + getSum(dealer) + " Игрок: " + getSum(player) + ". Игрок победил!");
} else if (getSum(player) < getSum(dealer)) {
    alert("Дилер: " + getSum(dealer) + " Игрок: " + getSum(player) + ". Дилер победил!");
} else if (getSum(player) === getSum(dealer)) {
    alert("Дилер: " + getSum(dealer) + " Игрок: " + getSum(player) + ". Ничья!");
}
*/
// alert(getStatus());

/*
// test pullCardFromDeck function
for (i = 0; i < deck_size; i++) {
    card = getCard(deck);
    pullCardFromDeck(card, deck);
    player.push(card);
    alert("Карта: " + card + "\r\rИгрок: " + player + "\r\r" + deck);
}
*/
