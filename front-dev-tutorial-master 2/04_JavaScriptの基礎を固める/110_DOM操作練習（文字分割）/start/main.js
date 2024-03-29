// document.addEventListener("DOMContentLoaded", function () {
//   const el = document.querySelector(".animate-title");
//   const str = el.innerHTML.trim();
//   let concatStr = '';

//   for (let c of str) {
//     // c = c.replace(' ', '&nbsp;');
//     c = c.replace(/\s+/, '&nbsp;');
//     concatStr += `<span class="char">${c}</span>`;
//   }
//   el.innerHTML = concatStr;
// });


document.addEventListener("DOMContentLoaded", function () {
  const el = document.querySelector(".animate-title");
  const str = el.innerHTML.trim().split("");

  el.innerHTML = str.reduce((acc, curr) => {
    curr = curr.replace(/\s+/, '&nbsp;');
    return `${acc}<span class="char">${curr}</span>`;
  }, "");
});
