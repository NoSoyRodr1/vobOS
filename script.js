AOS.init();
function reproducirAudio() {
    var audio = new Audio('./assets/inicio.mp3');
    audio.play();
    setTimeout(function() {
        window.scrollTo(0, 0);
        window.location.reload();
    }, 3900);
}
function reproducirAudioo() {
    var audio = new Audio('./assets/empezar.wav');
    audio.play();
}
