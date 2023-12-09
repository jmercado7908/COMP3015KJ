//alert('Hola Mundo!!');

boton = document.getElementById('boton');
boton.addEventListener('click', interaction);

function interaction() {

    titulo = document.getElementsByTagName('h1');

    titulo[0].innerHTML = 'Título Principal';
    titulo[0].style.color = 'red';
    titulo[0].style.fontSize = '5em';
    titulo[0].style.fontFamily = 'sans-serif';
    titulo[0].style.backgroundColor = 'gold';
}