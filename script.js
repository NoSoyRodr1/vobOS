AOS.init();
function reproducirAudio() {
    var audio = new Audio('./assets/inicio.mp3');
    audio.play();
    setTimeout(function() {
      window.location.reload(); // Recarga la página actual
    }, 3900); // Tiempo de espera antes de recargar (ajústalo según la duración del audio)
}
function reproducirAudioo() {
    var audio = new Audio('./assets/empezar.wav');
    audio.play();
}