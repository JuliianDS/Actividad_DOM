function enviarNombre(){
    let nombre = document.getElementById('i_nombre').value;
    
    if(nombre == ''){
        alert("bro se te olvido escribir el nombre, el cerebro no es de adorno")

    }else{
        document.getElementById('saludar').innerText=nombre
        document.getElementById('saluda').innerText="hola " + nombre + ", como has estado?";
        
    }
    
}