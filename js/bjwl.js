/*global
alert, confirm, console, Debug, opera, prompt, WSH
*/

function getRandomInt(min, max) {
    "use strict";
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

alert(getRandomInt(1, 10));
