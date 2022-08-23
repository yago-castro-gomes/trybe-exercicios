function maxValue (numeros)
{
    let guardaMaior = 0;
    
    for (let indice in numeros)
    {
        if (numeros[guardaMaior] < numeros[indice])
        {
        guardaMaior = indice;
        }
    }
    return guardaMaior
}
console.log(maxValue([2,3,4,5,38,7,8]))
