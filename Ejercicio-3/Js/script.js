let parrafo = document.getElementById('parrafo');
let copiado = document.getElementById('copiado');

parrafo.addEventListener('input', function(){

    copiado.innerText = parrafo.value


})