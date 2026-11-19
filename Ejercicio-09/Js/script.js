const nombre = document.getElementById('nombre');
const profesion = document.getElementById('profesion');
const url = document.getElementById('url')

const Cnombre = document.querySelector('h3');
const Cprofesion = document.querySelector('p');
const img = document.querySelector('img')

nombre.addEventListener('keyup',function(){
    Cnombre.innerText = nombre.value;
})
profesion.addEventListener('keyup',function(){
    Cprofesion.innerText = profesion.value;
})
url.addEventListener('keyup',function(){
    img.setAttribute('src',url.value);
})