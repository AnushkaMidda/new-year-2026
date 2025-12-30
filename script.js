// --------------------
// BUTTON: REDIRECT
// --------------------
const btn = document.getElementById('transitionBtn');

btn.addEventListener('click', () => {
  document.body.style.transition = "opacity 1s ease";
  document.body.style.opacity = "0";

  setTimeout(() => {
    window.location.href = "confessions.html";
  }, 1000);
});

// --------------------
// CONFETTI
// --------------------
for (let i = 0; i < 40; i++) {
  const confetti = document.createElement('div');
  confetti.className = 'confetti';
  confetti.style.left = Math.random() * 100 + 'vw';
  confetti.style.animationDuration = 3 + Math.random() * 3 + 's';
  confetti.style.width = confetti.style.height = 4 + Math.random() * 4 + 'px';
  confetti.style.opacity = 0.4 + Math.random() * 0.6;
  document.body.appendChild(confetti);
}

