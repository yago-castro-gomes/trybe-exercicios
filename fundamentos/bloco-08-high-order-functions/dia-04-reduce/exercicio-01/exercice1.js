const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
    // escreva seu código aqui
    return arrays.reduce((acomulator, curr) => acomulator.concat(curr), [])
  }

console.log(flatten())