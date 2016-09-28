/*global
alert, confirm, console, Debug, opera, prompt, WSH
*/

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

alert(getDeck(36));
