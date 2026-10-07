// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', open);
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// Scroll-triggered reveal animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Pricing toggle (monthly / yearly)
const billingToggle = document.getElementById('billingToggle');
const amounts = document.querySelectorAll('.price .amount');

billingToggle.addEventListener('click', () => {
  const yearly = billingToggle.getAttribute('aria-checked') === 'true';
  billingToggle.setAttribute('aria-checked', String(!yearly));
  amounts.forEach(el => {
    el.textContent = yearly ? el.dataset.monthly : el.dataset.yearly;
  });
});

// Demo check-in button (hero phone mockup)
const demoCheck = document.getElementById('demoCheck');
const todayDot = document.querySelector('.dot.today');

demoCheck.addEventListener('click', () => {
  todayDot.classList.remove('today');
  todayDot.classList.add('done');
  demoCheck.textContent = 'Checked in ✓';
  demoCheck.disabled = true;
  demoCheck.style.opacity = '0.6';
});

// Navbar background on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 10 ? '0 4px 20px rgba(0,0,0,.3)' : 'none';
}, { passive: true });
