// document.addEventListener('keydown', handleKeyDown);

// function handleKeyDown(event) {
//   const keycodeDisplay = document.getElementById('keycode-display');
//   keycodeDisplay.innerText = `Keycode: ${event.keyCode}`;
// }
document.addEventListener('keydown', handleKeyDown);

function handleKeyDown(event) {
  const keycodeDisplay = document.getElementById('keycode-display');
  const keyName = document.getElementById('keyName');
  const keyBoard = document.getElementById('keyBoard');
  keyName.innerText = `${event.key} `;
  keycodeDisplay.innerText = `${event.keyCode}`;
  keyBoard.innerText = `${event.code}`;
}
