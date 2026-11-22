const inputP = document.getElementById('inputP');
const inputG = document.getElementById('inputG');
const inputV = document.getElementById('inputV');
const tabla = document.querySelector('tbody');
const lista = document.querySelector('ul');
const btn = document.querySelector('button');
const p = document.querySelector('p');
const alerta = document.querySelector('span');
let inicio = true;
let presupuesto = 0;

btn.addEventListener('click', function () {
    alerta.classList.remove('alert');
    alerta.innerText = ``;
    
    if (inputP.value != "" && inputG.value != "" && inputV.value != "") {

        if (inicio == true) {
            presupuesto = Number(inputP.value) - Number(inputV.value)
            
            tabla.innerHTML += `
                <tr>
                    <td class="border border-dark">${inputP.value}</td>
                    <td class="border border-dark">${inputV.value}</td>
                    <td class="border border-dark">${presupuesto}</td>
                </tr>
            `
            lista.innerHTML += `
                <li>${inputG.value}: ${inputV.value}</li>
            `
            inicio = false;
            inputG.value = "";
            inputV.value = "";
            inputP.value = presupuesto
            
        }else if(inicio == false){
            let Npresupuesto = presupuesto - Number(inputV.value);
            tabla.innerHTML += `
                <tr>
                    <td class="border border-dark">${presupuesto}</td>
                    <td class="border border-dark">${inputV.value}</td>
                    <td class="border border-dark">${Npresupuesto}</td>
                </tr>
            `
            lista.innerHTML += `
                <li>${inputG.value}: ${inputV.value}</li>
            `
            if(presupuesto < inputV.value){
                p.innerText = `Cuidado!! haz superado tu presupuesto`
            }
            presupuesto = Npresupuesto
            inputG.value = "";
            inputV.value = "";
            inputP.value = presupuesto            
        }




    } else {
        alerta.classList.add('alert');
        alerta.innerText = `Hay campos invalidos o vacios`
    }

})





