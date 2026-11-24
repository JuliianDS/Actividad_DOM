const tarea = document.querySelector('input');
const prioridad = document.getElementById('selectP');
const agregar = document.getElementsByTagName('button')[0];
const lista = document.querySelector('ul');

let contador = 0;

agregar.addEventListener('click',function(){

    if(tarea.value == "" || prioridad.value == ""){
        return
    }else{
        
        contador += 1

        lista.innerHTML += `<li class="mx-auto"><span>
        ${tarea.value} : ${prioridad.value}</span>
        <button class="btn btn-primary" >completada</button>       
        </li>`
        


        









    }
})