const wakeUp = () => 'Acordando!!'
const breakFast = () => 'Bora tomar café!!'
const sleep = () => 'Partiu Dormir!!'

const doingThis = (func) => func();

console.log(doingThis(wakeUp))
console.log(doingThis(breakFast))
console.log(doingThis(sleep))