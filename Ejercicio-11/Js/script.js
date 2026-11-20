const inputs = document.querySelectorAll('input');
const btn = document.querySelector('button');
const aviso1 = document.querySelector('.aviso1');
const aviso2 = document.querySelector('.aviso2');
const aviso3 = document.querySelector('.aviso3');

btn.addEventListener('click', function (e) {
    e.preventDefault();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    inputs.forEach(input => {

        if (input.type == "email") {
            if (regex.test(input.value)) {                
                input.classList.add("is-valid")
                input.classList.remove("is-invalid")
                aviso2.textContent = ""
                
            }else{
                console.log(`${input.value} - NO Válido`);
                input.classList.add("is-invalid");
                input.classList.remove('is-valid');
                aviso2.textContent = `correo invalido, falta "@", o falta "."`                               

            }
        }else if(input.type == 'number' && input.value < 18){
            input.classList.add('is-invalid');
            input.classList.remove('is-valid');
            aviso3.textContent = "debes ser mayor de edad (18 o más)"
        }else{
            input.classList.add('is-valid');
            input.classList.remove('is-invalid');
            aviso3.textContent = ""

        }if (input.value != "") {
            input.classList.add("is-valid")
            
        } else {
            
            input.classList.add("is-invalid")
        }
    });

    
})