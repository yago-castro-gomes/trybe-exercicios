const custo = 150;
const venda = 330;

let imposto = (custo/100) * 20;

let valorCustoTotal = custo + imposto;

let lucroPorMil = (venda-valorCustoTotal) * 1000;

if (custo < 0 || venda < 0){
    console.log('Erro')
}

console.log(lucroPorMil)