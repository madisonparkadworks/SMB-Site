// Dark Mode Toggle
function toggleDarkMode(){ document.body.classList.toggle('dark'); }

// Scroll animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){ entry.target.classList.add('visible'); }
  });
},{threshold:0.1});

document.querySelectorAll('.service-card,.plan,.testimonial,.contact-form').forEach(el => observer.observe(el));
