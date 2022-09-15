let submitButton = document.getElementById('send');
let inputs = document.querySelectorAll('input')
document.getElementById('myInputId').DatePickerX.init();

// submitButton.addEventListener('click', (e) =>{
//     e.preventDefault()
// })

function notDefault(e){
    e.preventDefault();
    for (resultado in inputs){
    console.log(inputs[resultado].value)
    }
}

submitButton.addEventListener('click', notDefault)