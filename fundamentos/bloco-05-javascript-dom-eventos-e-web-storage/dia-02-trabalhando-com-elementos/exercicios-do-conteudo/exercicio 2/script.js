let el = document.querySelector('#elementoOndeVoceEsta');
let pai = document.querySelector('#pai')
let filhoDoFilho = document.querySelector('#primeiroFilhoDoFilho')

let brother = document.createElement('section');
pai.appendChild(brother);

let son = document.createElement('section');
el.appendChild(son);

let sonOfSon = document.createElement('section');
filhoDoFilho.appendChild(sonOfSon);
sonOfSon.parentNode.nextElementSibling.parentElement.nextElementSibling
