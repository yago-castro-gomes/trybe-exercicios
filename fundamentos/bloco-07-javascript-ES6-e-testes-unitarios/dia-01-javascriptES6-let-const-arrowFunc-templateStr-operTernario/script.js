const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      let elseScope = `Não devo ser utilizada fora do meu escopo (else)`;
      console.log(elseScope);
    }
  }

  testingScope(true);

  function sortFunction(a ,b) {
    return (a-b)
  }

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  const sortOddsAndEvens = () => {
  // Seu código aqui.

  console.log(oddsAndEvens.sort(sortFunction)); // será necessário alterar essa linha 😉
  }

sortOddsAndEvens()

const factorial = (n) => {
    let result = 0;
}