// based on Wes Bos tutorial

window.addEventListener('keydown', function(e) {
    // console.log('pressed!');
    const drumPad = document.querySelector(`.drum-pad[data-key="${e.keyCode}"]`)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    // console.log(audio);
    if (!audio) return
    audio.currentTime = 0
    audio.play()
    
    drumPad.classList.add('active')
})

const drumPads = document.querySelectorAll('.drum-pad')

function removeActiveClass(e) {
    if (!e.propertyNasme == 'transition') return
    this.classList.remove('active')
}

drumPads.forEach( drum => drum.addEventListener('transitionend', removeActiveClass ))