
const clapAudio = document.getElementById("clap-audio")
const hihatAudio = document.getElementById("hihat-audio")
const kickAudio = document.getElementById("kick-audio")
const openhatAudio = document.getElementById("openhat-audio")
const boomAudio = document.getElementById("boom-audio")
const rideAudio = document.getElementById("ride-audio")
const snareAudio = document.getElementById("snare-audio")
const tomAudio = document.getElementById("tom-audio")
const tinkAudio = document.getElementById("tink-audio")

document.addEventListener('keydown', function(event) {

    if (event.key.toUpperCase() === 'Q') {
        if(clapAudio.paused){
            clapAudio.play()
        } else {
            clapAudio.pause();
            clapAudio.currentTime = 0;
        }
    }
    if (event.key.toUpperCase() === 'S') {
        hihatAudio.play()
    }
    if (event.key.toUpperCase() === 'D') {
        kickAudio.play()
    }
    if (event.key.toUpperCase() === 'F') {
        openhatAudio.play()
    }
    if (event.key.toUpperCase() === 'G') {
        boomAudio.play()
    }
    if (event.key.toUpperCase() === 'H') {
        clapAudio.play()
    }
    if (event.key.toUpperCase() === 'J') {
        snareAudio.play()
    }
    if (event.key.toUpperCase() === 'K') {
        tomAudio.play()
    }
    if (event.key.toUpperCase() === 'L') {
        tinkAudio.play()
    }
  });