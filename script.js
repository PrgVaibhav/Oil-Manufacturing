const activePage = window.location.pathname[0];

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach((link) => {
  if (activePage === '/' && link.href.includes('index.html')) {
    link.classList.add('active');
  } else if (link.href.includes(`${activePage}`)) {
    link.classList.add('active');
  }
});
