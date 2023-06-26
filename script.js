let turnOnButton = document.querySelector('#turn-on')
let turnOffButton = document.querySelector('#turn-off')
let img = document.querySelector('img')

turnOffButton.addEventListener('click', () => img.src="assets/pic_bulboff.gif")
turnOnButton.addEventListener('click', () => img.src="assets/pic_bulbon.gif")