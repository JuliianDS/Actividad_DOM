
let peso = document.getElementById('pesos');
let estatura = document.getElementById('estaturas');
const btn_cal = document.getElementById('btn_calculo');
let resultado= document.getElementById('calculos');

btn_cal.addEventListener('click',function(){

    let pesos = Number(peso.value);
    let estaturas = Number(estatura.value);

    if(peso <= 0){
        resultado.textContent = "escribe un peso valido, numeros validos";

    }
    else if(estatura <= 0){
        resultado.textContent = "escribe una estatura valida (1.70) "
    }
    else{
        let IMC = pesos / (estaturas * estaturas);

        if (IMC < 18.5) {
            resultado.style.color = "blue";   // Bajo peso
        } else if (IMC < 25) {
            resultado.style.color = "green";  // Peso normal
        } else if (IMC < 30) {
            resultado.style.color = "orange"; // Sobrepeso
        } else {
            resultado.style.color = "red";    // Obesidad
        }

        resultado.textContent = "Tu IMC es " + IMC.toFixed(2);
    }

})

    
    
