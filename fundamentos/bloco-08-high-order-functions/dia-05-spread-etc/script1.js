// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Morango', 'Kiwi', 'Melancia'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Melão', 'Abacate', 'Banana'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
  const allFruits = [...fruit, ...additional]

  return allFruits
  
};

console.log(fruitSalad(specialFruit, additionalItens));