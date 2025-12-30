// --------------------
// CONFESSIONS DATA
// --------------------
const confessions = [
  "I never learned to say no, and I struggle to express my emotions 😔",
  "I carried a lack of confidence from childhood; praise was rare, expectations high 💭",
  "Numbers mattered more than love or emotional support in my home 📊",
  "I compare myself to friends and siblings, forgetting to honor my own journey 😢",
  "I witnessed broken bonds and learned not to trust blindly ❤️‍🩹",
  "I chased perfection, missing the beauty in imperfection ✨",
  "I looked for love outside because it was missing at home 💌",
  "I say 'I'm fine' when I am not 😶",
  "I aim for perfection but often overlook the magic in flaws 🌱",
  "I felt love and appreciation were always lacking ❤️",
  "I smiled through the year, but I don't recall truly feeling okay 😔",
  "Everyone thinks I'm confident; I rehearse every word before speaking 🗣️",
];

// --------------------
// SHOW ALL CONFESSIONS AT ONCE WITH SUBTLE RISE
// --------------------
const confessionContainer = document.querySelector('.confession-text');

confessions.forEach(text => {
  const div = document.createElement('div');
  div.classList.add('confession');
  div.textContent = text;

  // Initial style for subtle rise effect
  div.style.opacity = 0;
  div.style.transform = "translateY(40px)";
  div.style.transition = "opacity 1.5s ease, transform 1.5s ease";
  div.style.textShadow = "0 0 0 rgba(214, 180, 106, 0)";

  confessionContainer.appendChild(div);

  // Animate after tiny delay
  setTimeout(() => {
    div.style.opacity = 1;
    div.style.transform = "translateY(0)";
    div.style.textShadow = "0 0 15px rgba(214,180,106,0.3), 0 0 30px rgba(214,180,106,0.2)";
  }, 100);
});


