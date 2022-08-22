let guarda = 0;
let num = 50;
let primo = 0;

for (let i = 2; i < num; i +=1){
    
    guarda = i

    if (guarda % i === 0){
        return false
    }
    return num > 1;
}
console.log(primo)