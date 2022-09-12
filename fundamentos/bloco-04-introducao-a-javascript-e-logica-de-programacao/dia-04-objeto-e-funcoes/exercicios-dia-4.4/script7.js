function maiorName (nomes) {
    let name = nomes[0]
    
    for (let index in nomes){

        if (name.length < nomes[index].length)

            name = nomes[index];
    }
    return name
}

console.log(maiorName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))