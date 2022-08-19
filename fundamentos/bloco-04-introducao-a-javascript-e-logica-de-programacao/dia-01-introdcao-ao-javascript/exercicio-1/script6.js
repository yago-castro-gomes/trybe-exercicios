let peca = prompt('Qual peça você escolhe?').toLocaleLowerCase()

if (peca =='peao') {
    document.write('Andou uma pra frente')
}
else if (peca == 'bispo'){
    document.write('Andou diagonal')
}
else if (peca == 'cavalo'){
    document.write('Andou em L')
}
else if (peca == 'torre'){
    document.write('andou reto até o fim')
}
else if (peca == 'rainha'){
    document.write('andou uma casa para o lado que quiser')
}
else if (peca == 'rei'){
    document.write('andou para uma casa adjacente')
}