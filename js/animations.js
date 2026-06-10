// GSAP and Lenis Setup
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lenis Smooth Scrolling
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  // Page Load Transition
  const pageTransition = document.querySelector('.page-transition');
  if (pageTransition) {
    const tl = gsap.timeline();
    
    tl.to('.loader-text span', {
      y: 0,
      duration: 0.8,
      ease: 'power4.out',
      stagger: 0.1
    })
    .to('.loader-text span', {
      y: '-100%',
      duration: 0.8,
      ease: 'power4.in',
      delay: 0.5,
      stagger: 0.1
    })
    .to(pageTransition, {
      y: '-100%',
      duration: 1,
      ease: 'power4.inOut'
    }, "-=0.4");
  }

  // Fade Up Animation on Scroll
  const fadeUpElements = document.querySelectorAll('.fade-up');
  fadeUpElements.forEach(elem => {
    gsap.fromTo(elem, 
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: elem,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });

  // Staggered Cards Animation
  const staggerContainers = document.querySelectorAll('.stagger-container');
  staggerContainers.forEach(container => {
    const items = container.children;
    gsap.fromTo(items,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
        }
      }
    );
  });

  // Animated Counters
  const counters = document.querySelectorAll('.counter-val');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    gsap.fromTo(counter, 
      { innerText: 0 },
      {
        innerText: target,
        duration: 2,
        ease: 'power2.out',
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: counter,
          start: 'top 85%',
        }
      }
    );
  });

  // Magnetic Buttons
  const magneticButtons = document.querySelectorAll('.magnetic-wrap');
  magneticButtons.forEach(btn => {
    const inner = btn.querySelector('.btn') || btn.querySelector('a') || btn;
    
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const h = rect.width / 2;
      const x = e.clientX - rect.left - h;
      const y = e.clientY - rect.top - (rect.height / 2);

      gsap.to(inner, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.4,
        ease: 'power2.out'
      });
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(inner, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: 'elastic.out(1, 0.3)'
      });
    });
  });

  // Parallax Images
  const parallaxImages = document.querySelectorAll('.parallax-img');
  parallaxImages.forEach(img => {
    gsap.to(img, {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: img.parentElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  });

  // Ensure ScrollTrigger calculates correctly after all images load
  window.addEventListener('load', () => {
    ScrollTrigger.refresh();
  });
});
