const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    toggleBtn.textContent = '☀️';
}
toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        toggleBtn.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        toggleBtn.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});

// Smooth scroll para el footer
document.querySelectorAll('footer a').forEach(link => {
    link.addEventListener('click', function (e) {
        // Solo para enlaces internos con #
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Botón volver arriba
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Efecto hover en las secciones
const secciones = document.querySelectorAll('.fondo');
secciones.forEach(seccion => {
    seccion.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
    });

    seccion.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 3px 12px rgba(0, 0, 0, 0.08)';
    });
});

// Efecto hover en el perfil
const profile = document.querySelector('.profile');
profile.addEventListener('mouseenter', function () {
    this.style.transform = 'translateY(-5px)';
    this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
});

profile.addEventListener('mouseleave', function () {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = '0 3px 18px rgba(0, 0, 0, 0.12)';
});

// Efecto escribir el título (typewriter)
const titulo = document.querySelector('.title');
const textoOriginal = titulo.textContent;
titulo.textContent = '';
let i = 0;

function escribir() {
    if (i < textoOriginal.length) {
        titulo.textContent += textoOriginal.charAt(i);
        i++;
        setTimeout(escribir, 80);
    }
}

// Iniciar efecto después de medio segundo
setTimeout(escribir, 500);

