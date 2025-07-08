const button = document.getElementById('character-button');
const sound = document.getElementById('sound');

button.addEventListener('click', () => {
  button.classList.add('shake');
  sound.currentTime = 0;
  sound.play();

  setTimeout(() => {
    button.classList.remove('shake');
  }, 300);
});
