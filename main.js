// ========== Mobile Nav Toggle ==========
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ========== Smooth Scrolling ==========
document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    // Auto-close nav on mobile
    navLinks.classList.remove('active');
  });
});

// ========== Typing Animation ==========
const typedText = document.querySelector('.typed');
const words = ['Software Engineer', 'Problem Solver', 'Lifelong Learner'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  if (!typedText) return;
  const currentWord = words[wordIndex];
  typedText.textContent = currentWord.substring(0, charIndex);

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) wordIndex = (wordIndex + 1) % words.length;
  }

  const typingSpeed = isDeleting ? 80 : 150;
  setTimeout(type, typingSpeed);
}

type();

// ========== Show More Toggle ==========
document.querySelectorAll('.btn-show-more').forEach(btn => {
  btn.addEventListener('click', () => {
    const section = btn.closest('.section');
    section.classList.toggle('expanded');
    btn.textContent = section.classList.contains('expanded') ? 'Show Less' : 'Show More';
  });
});

// ========== Highlight Active Nav Link on Scroll ==========
const sections = document.querySelectorAll('.section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let currentSection = '';
  sections.forEach(sec => {
    const sectionTop = sec.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      currentSection = sec.getAttribute('id');
    }
  });

  navItems.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
});
