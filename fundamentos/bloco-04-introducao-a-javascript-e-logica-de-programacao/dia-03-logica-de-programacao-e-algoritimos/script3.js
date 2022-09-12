let array = ['java', 'javascript', 'python', 'html', 'css'];
let guarda = '';
let result = '';

for (let i = 0; i < array.length; i += 1) {
    
    guarda = array[i];
    
    if (result.length < guarda.length){
        result = guarda
    }
}
console.log(result)

for (let i = 0; i < array.length; i += 1) {
    
    guarda = array[i];
    
    if (result.length > guarda.length){
        result = guarda
    }
}
console.log(result)
