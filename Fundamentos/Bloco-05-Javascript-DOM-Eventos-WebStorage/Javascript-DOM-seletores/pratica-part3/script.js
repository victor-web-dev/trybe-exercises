let sections = document.getElementsByTagName('section');
let div = document.getElementsByTagName('h3');
let header = document.getElementById('header-container');
let footer = document.getElementById('footer-container');
footer-container
console.log(sections);
console.log(div);

function trocaCor (tag, cor) {
  for (let key = 0; key < tag.length; key += 1) {
    tag[key].style.backgroundColor = cor[key];
  }
}
let cor1 = ['black', 'black','pink', 'pink', ];
let cor2 = ['orange', 'yellow'];

header.style.backgroundColor = 'green';
footer.style.backgroundColor = 'blue';

trocaCor(sections, cor2);
trocaCor(div, cor1);


