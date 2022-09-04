let activePage = window.location.pathname;

// const subDirectory = activePage.replace(/\.tld\/([^/]+)\//, '');

const subDirectory = '/Oil-Manufacturing/';
activePage = activePage.replace(subDirectory, '/');

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
