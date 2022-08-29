let el = document.getElementById('elementoOndeVoceEsta');
let pai = document.getElementById('pai')
el.parentElement.style.color = 'blue' //elemento pai
el.firstElementChild.innerText = 'Olá meu nome é Yago' //elemento primeiro filho do filho
pai.firstElementChild //elemento primeiro filho a partir do pai
el.previousElementSibling // primeiro filho a partir do elementoOndeVoceEsta
el.nextSibling //acessa o texto atenção!
el.nextElementSibling //<section id=​"terceiroFilho">​</section>
pai.lastElementChild.previousElementSibling //acessa o terceiro filho a partir do pai