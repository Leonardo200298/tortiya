/* NUMERO_DESTINO = +542494634669
MENSAJE_PREDETERMINADO = Hola!  */
// Ahora puedes acceder a las variables de entorno como process.env.NUMERO_DESTINO y process.env.MENSAJE_PREDETERMINADO
var numeroDestino = "+542494698885";
var mensajePredeterminado = "Hola,encargare mi tortiya";

// Crea la función para abrir el enlace de WhatsApp
function abrirWhatsApp() {
    var enlaceWhatsApp = "https://wa.me/" + numeroDestino + "?text=" + encodeURIComponent(mensajePredeterminado);
    window.open(enlaceWhatsApp);
}

// Asocia la función al botón de encargar
document.querySelector("#encargarButton").addEventListener("click", abrirWhatsApp);
