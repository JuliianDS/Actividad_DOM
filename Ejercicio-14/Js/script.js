const inputP = document.getElementById('inputP');
const inputG = document.getElementById('inputG');
const inputV = document.getElementById('inputV');
const tabla = document.querySelector('tbody');
const lista = document.querySelector('ul');
const btn = document.querySelector('button');
const p = document.querySelector('p');
let presupuesto = inputP.value;
btn.addEventListener('click', function(){
    presupuesto = calculo;
    if(inputV != ""){
        let calculo = presupuesto - inputV.value;
        tabla.innerHTML += `
        <tr>
            <td>${presupuesto}</td>
            <td>${inputG.value}</td>
            <td>${calculo}</td>
        </tr>
        `
        lista.innerHTML += `
        <li>${inputG.value}: ${inputV.value}</li>        
        `
    }
    
})