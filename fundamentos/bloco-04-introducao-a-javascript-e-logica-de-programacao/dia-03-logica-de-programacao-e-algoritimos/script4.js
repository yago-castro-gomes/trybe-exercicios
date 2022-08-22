let guarda = 0;
let num = 50;
let primo = 0;

for (let i = 2; i < num; i +=1){
    for (let j = 1; j < num; j+=1){
        if (i % j == 0) {
            primo = num[i]
        }
    }
}
console.log(primo)