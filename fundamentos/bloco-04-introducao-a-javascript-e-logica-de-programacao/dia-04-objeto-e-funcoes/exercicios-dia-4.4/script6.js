function minValue (numeros)
{
    let guardaMenor = 0;
    
    for (let indice in numeros)
    {
        if (numeros[guardaMenor] > numeros[indice])
        {
        guardaMenor = indice;
        }
    }
    return guardaMenor
}
console.log(minValue([2,3,4,5,38,1,8]))
