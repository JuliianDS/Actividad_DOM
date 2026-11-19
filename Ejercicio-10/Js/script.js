/*------botones------*/
const btn_verde = document.querySelector('.btn-success');
const btn_amarillo = document.querySelector('.btn-warning');
const btn_rojo = document.querySelector('.btn-danger');
/*------semaforos------*/ 
const semaforo1 = document.querySelector('.circulo1');
const semaforo2 = document.querySelector('.circulo2');
const semaforo3 = document.querySelector('.circulo3')
/*------avisos------*/ 
const aviso1 = document.querySelector('.text-success');
const aviso2 = document.querySelector('.text-warning');
const aviso3 = document.querySelector('.text-danger');


btn_verde.addEventListener('click',function(){
    semaforo2.classList.remove('bg-warning')
    semaforo2.classList.add('shadow-none')
    semaforo3.classList.remove('bg-danger')
    semaforo3.classList.add('shadow-none')
    aviso2.textContent = ""
    aviso3.textContent = ""

    semaforo1.classList.remove('shadow-none');
    semaforo1.classList.add('bg-success');
    aviso1.textContent = "Puedes avanzar"
})
btn_amarillo.addEventListener('click',function(){
    semaforo3.classList.remove('bg-danger')
    semaforo3.classList.add('shadow-none')
    semaforo1.classList.remove('bg-success')
    semaforo1.classList.add('shadow-none')
    aviso1.textContent = ""
    aviso3.textContent = ""

    semaforo2.classList.remove('shadow-none');
    semaforo2.classList.add('bg-warning')
    aviso2.textContent = "Precaución"
})
btn_rojo.addEventListener('click',function(){
    semaforo2.classList.remove('bg-warning')
    semaforo2.classList.add('shadow-none')
    semaforo1.classList.remove('bg-success')
    semaforo1.classList.add('shadow-none')
    aviso2.textContent = ""
    aviso1.textContent = ""

    semaforo3.classList.remove('shadow-none');
    semaforo3.classList.add('bg-danger')
    aviso3.textContent = "Detente"
    
})