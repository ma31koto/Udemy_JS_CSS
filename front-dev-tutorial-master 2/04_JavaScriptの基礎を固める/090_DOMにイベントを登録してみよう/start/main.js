const btn = document.querySelector('#btn');
const h1 = document.querySelector('h1');

// const hello = function() {
//   alert('hello');
// };
// function hello() {
//   this.style.color = 'red';
// };


function changeColor() {
  h1.style.color = 'red';
};
function changeBgColor() {
  h1.style.backgroundColor = 'green';
};


btn.addEventListener('click', changeColor);
btn.addEventListener('click', changeBgColor);
// btn.addEventListener('click', hello);
// btn.removeEventListener('click', hello);