let tarea = document.getElementById('tareas');
let nueva = document.getElementById('nuevas');

tarea.addEventListener('keydown',function(evento){

    if(evento.key === 'Enter'){

        let Ntarea = tarea.value;

        if(Ntarea !== ''){
            nueva.textContent = `Nueva tarea: ${Ntarea}`;
            tarea.value = '';
        }
    }


})



