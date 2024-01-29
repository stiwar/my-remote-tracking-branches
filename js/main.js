window.onload = function(){
    alert('Sitio cargado correctamente!');
}

const miH1 = document.querySelector('h1');
miH1.addEventListener('mouseover', function() {
    this.style.color = 'blue'; // Cambia el color cuando el mouse está sobre el h1
});

miH1.addEventListener('mouseout', function() {
    this.style.color = 'chocolate'; // Restaura el color original cuando el mouse sale del h1
});

let primerParrafo = document.getElementById('firstParagraph');

primerParrafo.addEventListener('mouseover', function() {
    this.style.color = 'green'; // Cambia el color cuando el mouse está sobre el h1
});

primerParrafo.addEventListener('mouseout', function() {
    this.style.color = 'red'; // Restaura el color original cuando el mouse sale del h1
});