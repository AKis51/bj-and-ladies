/*global
alert, confirm, console, Debug, opera, prompt, WSH
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
        if (arr[i] !== "A") {
            if (arr[i] === "J" || arr[i] === "Q" || arr[i] === "K") {
                sum += 10;
            } else {
                sum += parseInt(arr[i], 10);
            }
        }
    }

    // Считаем тузы
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === "A" && sum > 10) {
            sum += 1;
        } else if (arr[i] === "A" && sum <= 10) {
            sum += 11;
        }
    }
    return sum;
}

function getStatus(dealer, player) {
    "use strict";
    return "Диллер: " + dealer.join(" ") + " Игрок: " + player.join(" ") + ".";
}

var deck_size = parseInt(prompt("Какую колоду карт выбираем — 36 карт или 52 карты?"), 10);
var deck = getDeck(deck_size);

alert("Выбрана колода в " + deck_size + " карты.\r\r" + deck);

var card;
var dealer;
var player = [];

alert(getStatus());

/*
// test pullCardFromDeck function
for (i = 0; i < deck_size; i++) {
    card = getCard(deck);
    pullCardFromDeck(card, deck);
    player.push(card);
    alert("Карта: " + card + "\r\rИгрок: " + player + "\r\r" + deck);
}
*/
