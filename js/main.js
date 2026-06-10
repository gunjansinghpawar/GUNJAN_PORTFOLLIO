document.addEventListener('DOMContentLoaded', () => {
  // Custom Cursor
  const cursor = document.querySelector('.custom-cursor');
  const links = document.querySelectorAll('a, button, .magnetic-wrap');

  if (cursor) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });

    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
      });
      link.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
      });
    });
  }

  // Mobile Menu
  const menuBtn = document.querySelector('.menu-btn');
  const fsMenu = document.querySelector('.fs-menu');
  let isMenuOpen = false;

  if (menuBtn && fsMenu) {
    menuBtn.addEventListener('click', () => {
      isMenuOpen = !isMenuOpen;
      if (isMenuOpen) {
        fsMenu.classList.add('open');
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        
        // Animate links in
        const menuLinks = fsMenu.querySelectorAll('a');
        menuLinks.forEach((link, index) => {
          link.style.transitionDelay = `${0.2 + (index * 0.1)}s`;
        });
      } else {
        fsMenu.classList.remove('open');
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        
        const menuLinks = fsMenu.querySelectorAll('a');
        menuLinks.forEach((link) => {
          link.style.transitionDelay = '0s';
        });
      }
    });
  }

  // Navbar Scroll Effect
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // Set Active Link based on current URL
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a, .fs-menu-links a');
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });
});
