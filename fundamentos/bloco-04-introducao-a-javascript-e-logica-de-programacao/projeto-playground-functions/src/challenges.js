// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  let triangulo = (base * height) / 2;

  return triangulo;
}

// Desafio 3
function splitSentence(str) {
  let divide = str.split([' ']);
  return divide;
}

// Desafio 4
function concatName(array) {
  let primeiraPalavra = array[0];
  let ultimaPalavra = array[array.length - 1];
  let retorno = `${ultimaPalavra}, ${primeiraPalavra}`;
  return retorno;
}

// Desafio 5
function footballPoints(wins, ties) {
  let time = wins * 3 + ties * 1;

  return time;
}

// Desafio 6
function highestCount(maior) {
  let contador = maior[0];
  let vezes = 0;

  for (let i in maior) {
    if (maior[i] > contador) {
      contador = maior[i];
    }
  }
  for (let i2 in maior) {
    if (contador === maior[i2]) {
      vezes += 1;
    }
  }
  return vezes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = Math.abs(cat1 - mouse);
  let distancia2 = Math.abs(cat2 - mouse);

  if (distancia1 < distancia2) {
    return 'cat1';
  }
  if (distancia2 < distancia1) {
    return 'cat2';
  }
  if (distancia1 === distancia2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let vazio = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 !== 0 && array[i] % 5 !== 0) {
      array[i] = 'bug!'
      vazio.push(array[i])
    }
    else if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      array[i] = 'fizzBuzz'
      vazio.push(array[i])
    }
    else if (array[i] % 5 === 0) {
      array[i] = 'buzz'
      vazio.push(array[i])
    }
    else if (array[i] % 3 === 0){
      array[i] = 'fizz'
      vazio.push(array[i])
    }
  }
    return vazio
  }
  

// Desafio 9
function encode(str) {
  let texto = '';
  for (i in str){
switch(str[i]) {
  case 'a': texto += '1'
  break;
  case 'e': texto += '2'
  break;
  case 'i': texto += '3'
  break;
  case 'o': texto += '4'
  break;
  case 'u': texto += '5' 
  break;
  default: texto += str[i]
  break;
}
}
  return texto;
}

function decode(str) {
  let texto = '';
  for (i in str){
switch(str[i]) {
  case '1': texto += 'a'
  break;
  case '2': texto += 'e'
  break;
  case '3': texto += 'i'
  break;
  case '4': texto += 'o'
  break;
  case '5': texto += 'u' 
  break;
  default: texto += str[i]
  break;
}
}
  return texto;
}

// Desafio 10
function techList(array, nome) {
  let objeto = [];

  for (let i in array) {
    if (i < array) {
      objeto.push({'tech': array[i], 'name': nome})
    }}

  objeto.sort(function (a, b) {
    if (a.tech < b.tech) {
      return -1;
    }
    return true;
  });

  if (objeto.length == [0]) {
    return 'Vazio!';
  }
  return objeto;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
