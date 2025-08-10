const typingElement = document.getElementById('typing');
const texts = ["Full Stack Developer", "AI/ML Enginner" , "python", "Web Developer"];
let i = 0;
let j = 0;
let isDeleting = false;

function type() {
  typingElement.textContent = texts[i].substring(0, j);
  if (!isDeleting) {
    j++;
    if (j === texts[i].length) {
      isDeleting = true;
      setTimeout(type, 2000);
      return;
    }
  } else {
    j--;
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % texts.length;
    }
  }
  setTimeout(type, isDeleting ? 50 : 100);
}

document.addEventListener("DOMContentLoaded", type);

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');
  const body = document.body;

  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggle.textContent = '☀️';
  }

  toggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    toggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
});

