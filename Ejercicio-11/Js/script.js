const inputs = document.querySelectorAll('input');
const btn = document.querySelector('button');
const aviso1 = document.querySelector('aviso1');
const aviso2 = document.querySelector('aviso2');
const aviso3 = document.querySelector('aviso3');

btn.addEventListener('click', function () {
    let contador = 0;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    inputs.forEach(input => {

        if (input.type == "email") {
            if (regex.test(input.value)) {
                console.log(`${input.value} - Válido`);
                input.classList.add("is-valid")
                input.classList.remove("is-invalid")
                
            }else{
                console.log(`${input.value} - NO Válido`);
                input.classList.add("is-invalid");
                input.classList.remove('is-valid');
                               

            }
        }
        //
        if(input.type == 'number' && input.value < 18){
            input.classList.add('is-invalid');
            input.classList.remove('is-valid');
            aviso3.textContent = ""
        }else{
            input.classList.add('is-valid');
            input.classList.remove('is-invalid');
            aviso3.textContent = "debes ser mayor de edad"
        }
        // 
        if (input.value != "") {
            input.classList.add("is-valid")
        } else {
            contador = contador + 1;
            input.classList.add("is-invalid")
        }
    });

    if (contador > 0) {
        console.log("algo anda mal");
    } else {
        console.log("niceee todo good")
    }
})