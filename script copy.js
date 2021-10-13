window.addEventListener('keydown', function (e) {
	// console.log(e.keyCode)
	const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
	
	// console.log(audio);
	// console.log(key);
	if(!audio) return;
	audio.currentTime = 0;
	audio.play();
	key.classList.add('playing');
	// key.classList.remove('playing');

})

function removeTransition(e) {
	// console.log(e);
	if (e.propertyName !== 'transform') return;
	// console.log(e.propertyName);
	this.classList.remove('playing')

}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));