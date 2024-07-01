"use strict";
//Selecting elements
const dayEl = document.querySelector(".home__description--day");
const timeEl = document.querySelector(".home__description--time");
//Getting day of the week
const day = new Date().getDay();
console.log(day);
if (day === 1) dayEl.textContent = "Monday";
else if (day === 2) dayEl.textContent = "Tuesday";
else if (day === 3) dayEl.textContent = "Wednesday";
else if (day === 4) dayEl.textContent = "Thursday";
else if (day === 5) dayEl.textContent = "Friday";
else if (day === 6) dayEl.textContent = "Saturday";
else if (day === 7) dayEl.textContent = "Sunday";
//Getting Time
timeEl.textContent = `${new Date().getUTCHours()}:${new Date().getUTCMinutes()}`;

//# sourceMappingURL=index.672d4772.js.map
