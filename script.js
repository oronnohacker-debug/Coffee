// Smooth scroll for navigation
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    if(this.getAttribute('href').includes('.html')) return;
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});
