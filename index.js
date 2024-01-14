
function animationHandling(button) {
    button.classList.add('clicked', 'animated');
    setTimeout(function(){
        button.classList.remove('clicked', 'animated')
    }, 150);
}

function audioHandling(audioId) {
    const audio = document.getElementById(audioId);
    audio.currentTime = 0;
    audio.play()
}

function keyDown(event) {
    var clickedButton = document.querySelector('.child-btn[data-key="' + event.key.toUpperCase() + '"]');

    if (clickedButton) {
        animationHandling(clickedButton);
        audioHandling('audio' + event.key.toUpperCase())
    }
}

document.addEventListener('keydown', keyDown)