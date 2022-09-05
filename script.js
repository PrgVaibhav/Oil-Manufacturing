let activePage = window.location.pathname;
// COmment
// regex for 1st subdirectory in url
let regex = /\/([^\/]*)\//;

activePage = activePage.replace(regex, '/');

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach((link) => {
  if (activePage === '/') {
    if (link.href.includes('index.html')) {
      link.classList.add('active');
    }
  } else if (link.href.includes(`${activePage}`)) {
    link.classList.add('active');
  }
});
