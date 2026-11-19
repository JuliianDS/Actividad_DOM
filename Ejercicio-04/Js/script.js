function cambioColor(){
    let Ccolor = document.getElementById('color')
    let fondo = document.getElementById('fondo')

    if(Ccolor.value == "azul"){        
        fondo.classList.remove('bg-warning','bg-success','bg-pink')
        fondo.classList.add('bg-primary');
    }
    if(Ccolor.value == "amarillo"){        
        fondo.classList.remove('bg-primary','bg-success','bg-pink')
        fondo.classList.add('bg-warning');
    }
    if(Ccolor.value == "verde"){        
        fondo.classList.remove('bg-warning','bg-primary','bg-pink')
        fondo.classList.add('bg-success');
    }
    if(Ccolor.value == "rosa"){        
        fondo.classList.remove('bg-warning','bg-success','bg-primary')
        fondo.classList.add('bg-pink');
    }
    

}