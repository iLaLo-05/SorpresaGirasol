const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');

// Ajusta el tamaño del canvas para que ocupe toda la ventana
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Cargar la imagen del girasol
const girasolImg = new Image();
girasolImg.src = 'girasol.png';

// Función para dibujar estrellas
function drawStars() {
    for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 2;

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
    }
}

// Función para dibujar la imagen del girasol
function drawGirasol() {
    const x = (canvas.width - 170) / 2;
    const y = (canvas.height - 250) / 2;
    ctx.drawImage(girasolImg, x, y, 250, 250);
}

// Función para dibujar el texto
function drawText() {
    ctx.fillStyle = '#FF69B4'; // Color del texto
    ctx.font = '30px Arial'; // Fuente y tamaño
    ctx.textAlign = 'center'; // Alinear al centro
    ctx.fillText('¡Rosa, sé que es muy tarde, pero con mucho cariño, aquí están tus flores amarillas!', canvas.width / 2, 40); // Texto y posición
}

// Esperar a que la imagen se cargue antes de dibujar
girasolImg.onload = function() {
    drawStars();
    drawGirasol();
    drawText(); // Llamar a la función para dibujar el texto
};
