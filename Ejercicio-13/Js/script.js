const perfil = document.querySelector('img');
const titulo = document.querySelector('h3')
const botones = [
    document.getElementsByTagName('button')[0],
    document.getElementsByTagName('button')[1],
    document.getElementsByTagName('button')[2]
];

botones.forEach(boton => {

    
    boton.addEventListener('click',function(){

        botones.forEach(b => b.classList.add('shadow-none'));

        const imgg = boton.querySelector('img');
        perfil.src = imgg.getAttribute('src');
        boton.classList.remove('shadow-none');
        titulo.innerText = imgg.getAttribute('alt');
    })

    
});



/*const img1 = document.getElementsByTagName('button')[0];
const img2 = document.getElementsByTagName('button')[1];
const img3 = document.getElementsByTagName('button')[2];

const perfil = document.querySelector('img');

img1.addEventListener('click',function(){
    img1.classList.remove('shadow-none');
    img2.classList.add('shadow-none');
    img3.classList.add('shadow-none');

    const imgg = img1.querySelector('img');
    perfil.src = imgg.getAttribute('src');
    
})*/
