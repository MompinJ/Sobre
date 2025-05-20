console.log("JS cargado correctamente 😎");

const sobre = document.getElementById('sobre');
const fondo = document.getElementById('fondo');
const particulasContenedor = document.getElementById('particulas-contenedor');

// Función que crea partículas flotantes
function generarParticulas(cantidad = 30) {
    particulasContenedor.innerHTML = ''; // limpia las anteriores
    for (let i = 0; i < cantidad; i++) {
        const p = document.createElement('div');
        p.classList.add('particula');
        p.style.left = Math.random() * 100 + 'vw';
        p.style.bottom = '-' + Math.random() * 20 + 'vh';
        p.style.animationDuration = (3 + Math.random() * 3) + 's';
        p.style.opacity = Math.random();
        particulasContenedor.appendChild(p);
    }
}

// Al hacer clic en el sobre
sobre.addEventListener('click', function () {
    this.classList.toggle('abierto');
    fondo.classList.toggle('oscuro');
    particulasContenedor.classList.toggle('activo');

    if (this.classList.contains('abierto')) {
        generarParticulas(40);
    } else {
        particulasContenedor.innerHTML = ''; // limpia si se cierra
    }
});
