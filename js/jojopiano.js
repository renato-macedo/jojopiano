// First we get the reference of every single key and add an event listener on them

var piano = document.querySelector('.piano');

var keys = piano.querySelectorAll('.key')

keys.forEach(addClickListeners)

// This this library implemented the fade effect better than me so I just use it

var audio = new Howl({
    src: ['./assets/giornotheme.mp3'],
    volume: 0.1
})

function addClickListeners(key) {
    key.addEventListener('mousedown',  () => {
        audio.play();
        audio.fade(0.5, 0, 1500);
    })
    
    key.addEventListener('mouseup',  (e) => {
        audio.fade(0.5, 0, 1500);
        audio.pause();
    })
    
    key.addEventListener('mouseleave', (e) => {
        audio.fade(0.5, 0, 1500);
        audio.pause();
    })

    key.addEventListener('touchstart', (e) => {
        e.preventDefault()
        audio.play();
        audio.fade(0.5, 0, 1000);
        
    })

    key.addEventListener('touchend', (e) => {
        audio.fade(0.5, 0, 1500);
        audio.pause();
    })


    

}

