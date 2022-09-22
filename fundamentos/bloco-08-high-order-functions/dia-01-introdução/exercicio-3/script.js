const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];



const compar = (solutions, studante) => {
    if (studante === solutions) {
        return 1
    }
    if (studante === 'N.A') {
        return 0
    }
    return -0.5;
    }

const teste = (solutions, studante, callback) => {
    let count = 0;
        for (let index = 0; index < solutions.length; index +=1){
            const actionReturn = callback(solutions[index], studante[index]);
            count += actionReturn;
        }
        return `Resultado final: ${count} pontos`
}


console.log(teste(RIGHT_ANSWERS, STUDENT_ANSWERS, compar))