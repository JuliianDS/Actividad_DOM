const presion = document.getElementById('press');
let presiones = document.getElementById('presionados')
let contador = 0
press.addEventListener('click', function (){
    
    contador = contador +1;
    document.getElementById('presionados').innerText=contador;

    if(contador == 10){
        presiones.classList.add('text-success')
        
    }   
})
function limpiarContador(){

    contador = 0;
    presiones.innerText = contador;
    presiones.classList.remove('text-success')

}