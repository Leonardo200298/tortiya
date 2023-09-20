"use strict";

// Agrega un event listener al botón de la imagen del logo
document.querySelector("header .logo").addEventListener("click", toggleMenu);

// Agrega un event listener al evento de cambio de tamaño de ventana
window.addEventListener("resize", handleResize);

function toggleMenu() {
    const navigation = document.querySelector(".navigation");
    // Verifica el ancho de la ventana
    if (window.innerWidth <= 659) {
        // Si es un dispositivo móvil, agrega o elimina la clase "show"
        navigation.classList.toggle("show");
    } else {
        // Si es de escritorio, elimina la clase "show"
        navigation.classList.remove("show");
    }
}

function handleResize() {
    const navigation = document.querySelector(".navigation");
    // Verifica el ancho de la ventana al cambiar su tamaño
    if (window.innerWidth > 659) {
        // Si es mayor a 659 píxeles, elimina la clase "show" para volver a la normalidad
        navigation.classList.remove("show");
    }
}
