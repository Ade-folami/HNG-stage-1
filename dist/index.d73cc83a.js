const t=document.querySelector(".home__description--day"),e=document.querySelector(".home__description--time"),n=new Date().getDay();console.log(n),1===n?t.textContent="Monday":2===n?t.textContent="Tuesday":3===n?t.textContent="Wednesday":4===n?t.textContent="Thursday":5===n?t.textContent="Friday":6===n?t.textContent="Saturday":7===n&&(t.textContent="Sunday"),e.textContent=`${new Date().getUTCHours()}:${new Date().getUTCMinutes()}`;
//# sourceMappingURL=index.d73cc83a.js.map