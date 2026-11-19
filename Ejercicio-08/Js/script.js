const producto = document.getElementById('producto');
const agregar = document.getElementById('agregar');
const aviso = document.getElementById('aviso');
const lista = document.querySelector("ul");

agregar.addEventListener('click',function(){

    const Nproducto = producto.value;

    if(producto.value == ''){
        aviso.innerText = `No ingresaste producto, intentalo nuevamente`
        return    
    }
    aviso.innerText = ""
    lista.innerHTML += `<li> ${producto.value}</li>`;
    producto.value = ""

    


})