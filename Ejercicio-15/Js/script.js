const tarea = document.querySelector('input');
const prioridad = document.getElementById('selectP');
const agregar = document.getElementsByTagName('button')[0];
const lista = document.querySelector('ul');
const pendientes = document.getElementById('pendientes');

let contador = 0;

agregar.addEventListener('click',function(){

    if(tarea.value == "" || prioridad.value == ""){
        return
    }else{
        
        contador += 1;
        pendientes.textContent = `Pendientes: ${contador}`;

        const li = document.createElement('li');
        li.className = 'my-2'
        const span = document.createElement('span');
        span.textContent = `${tarea.value} : ${prioridad.value} `;
        const btnCompletar = document.createElement('button');
        btnCompletar.className = 'btn btn-primary mx-3';
        
        btnCompletar.textContent = 'completada';
        const btnEliminar = document.createElement('button');
        btnEliminar.className = 'btn btn-danger';
        btnEliminar.textContent = 'Eliminar';

        btnCompletar.addEventListener('click', function(){
            span.classList.add('text-decoration-line-through');
            btnCompletar.disabled = true;
            contador -= 1;
            pendientes.textContent = `Pendientes: ${contador}`;
        })

        btnEliminar.addEventListener('click', function(){
            if(!btnCompletar.disabled){
                contador -=1
                pendientes.textContent = `Pendientes: ${contador}`;
            }

            li.remove();

        })

        li.appendChild(span);
        li.appendChild(btnCompletar);
        li.appendChild(btnEliminar);
        lista.appendChild(li);

        tarea.value = "";




    }
})