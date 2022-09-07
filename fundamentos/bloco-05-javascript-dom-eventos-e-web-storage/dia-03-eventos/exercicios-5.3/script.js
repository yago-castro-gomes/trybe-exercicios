let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let dias = document.querySelector('#days')

for (let i = 0;i < decemberDaysList.length; i +=1){
    let cria = document.createElement('li');
    dias.appendChild(cria)
    cria.innerText = decemberDaysList[i]
    cria.classList.add('day')

    if(decemberDaysList[i] === 24 || decemberDaysList[i] === 25 ||decemberDaysList[i] === 31){
        cria.classList.remove('day')
        cria.classList.add('days-holiday')
    }
}