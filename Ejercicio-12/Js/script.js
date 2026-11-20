const input = document.querySelector('input');
const btn = document.querySelector('button');
const contenedor = document.getElementById('tabla');



btn.addEventListener('click',function(){
    
    if(input.value != ''){ 
        document.querySelector('span').innerHTML = ""       
        contenedor.getElementsByTagName('tr')[0].innerHTML = ""
        contenedor.getElementsByTagName('tr')[1].innerHTML = ""
        for(let i = 1; i <= 10; i++){
            let contar = Number(input.value) * i
            contenedor.getElementsByTagName('tr')[0].innerHTML += `<th class="border border-dark p-2">${i}</th>`
            contenedor.getElementsByTagName('tr')[1].innerHTML += `<td class="border border-dark p-2">${contar}</td>`
            
        }
        input.value = ""
    }else{
        document.querySelector('span').innerHTML = `<p class="text-danger fs-5">No ingresaste ningun numero</p>`
        contenedor.getElementsByTagName('tr')[0].innerHTML = ""
        contenedor.getElementsByTagName('tr')[1].innerHTML = ""
    }


})