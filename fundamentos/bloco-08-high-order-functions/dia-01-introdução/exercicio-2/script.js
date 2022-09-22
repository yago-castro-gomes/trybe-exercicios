const sortear = () => {
    const random = parseInt(Math.random() * (6 - 1) + 1);
    return random
}
const aposta = (num) => {
    if (num == sortear()) return "Parabéns você Ganhou" 
    return "Tente novamente"
}

console.log(aposta(5))


const numberChecker = (myNumber, number) => myNumber === number;
const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);
  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};
console.log(lotteryResult(2, numberChecker));