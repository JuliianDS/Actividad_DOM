const clave = document.getElementById('clave');
const sugerencias = document.getElementById('suge');

clave.addEventListener('keydown',function(){
    const largo = clave.value.length;

    if( largo < 6){
        sugerencias.innerText = `Menos de 6 caracteres, contraseña insegura`
        sugerencias.classList.remove('text-warning','text-success')
        sugerencias.classList.add('text-danger')
        
    }else if(largo <10){
        sugerencias.innerText = `Contraseña aceptable`
        sugerencias.classList.remove('text-danger','text-success')
        sugerencias.classList.add('text-warning')
    }else if(largo > 9){
        sugerencias.innerText = `Contraseña fuerte`
        sugerencias.classList.remove('text-danger','text-warning')
        sugerencias.classList.add('text-success')
    }
})