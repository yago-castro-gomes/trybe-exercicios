let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = 0;
let compare = 0;

for(let i = 0; i < numbers.length; i += 1)
{
    if (compare == 0)
    {
        menor = numbers[i];
        compare += 1
    } 
    if (numbers[i] < menor){
        menor = numbers[i]
    }
}
console.log(menor)