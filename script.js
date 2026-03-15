/* ================================================================
   PORTFOLIO SCRIPT – Vamshi Krishna Bharadwaj Valluri
   Handles: navbar scroll, mobile menu, typewriter effect,
            scroll-reveal animations, skill bars, back-to-top
================================================================ */

'use strict';

/* ----------------------------------------------------------------
   1. NAVBAR – background on scroll + active link highlighting
---------------------------------------------------------------- */
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');

  function onScroll() {
    // Add 'scrolled' class for background blur effect
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Highlight the active nav link based on scroll position
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Run once on load
})();


/* ----------------------------------------------------------------
   2. MOBILE MENU – hamburger toggle
---------------------------------------------------------------- */
(function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  function closeMenu() {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on link click
  mobileLinks.forEach(link => link.addEventListener('click', closeMenu));

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
      closeMenu();
    }
  });
})();


/* ----------------------------------------------------------------
   3. TYPEWRITER EFFECT – cycles through role descriptions
---------------------------------------------------------------- */
(function initTypewriter() {
  const el = document.getElementById('typewriter-text');
  if (!el) return;

  const phrases = [
    'CS (Data Science) Student',
    'ML Researcher & Explorer',
    'Python Developer',
    'Statistical Thinker',
    'NLP Enthusiast',
    'Data Science Practitioner',
  ];

  let phraseIndex = 0;
  let charIndex   = 0;
  let isDeleting  = false;
  let typingSpeed = 80;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      el.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 45;
    } else {
      el.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 80;
    }

    // Transition between phrases
    if (!isDeleting && charIndex === currentPhrase.length) {
      // Pause at end before deleting
      typingSpeed = 1800;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 400; // Short pause before typing next
    }

    setTimeout(type, typingSpeed);
  }

  // Slight delay before starting
  setTimeout(type, 600);
})();


/* ----------------------------------------------------------------
   4. SCROLL-REVEAL ANIMATIONS
      Elements with [data-animate] fade in when entering viewport
---------------------------------------------------------------- */
(function initScrollReveal() {
  const elements = document.querySelectorAll('[data-animate]');

  if (!window.IntersectionObserver) {
    // Fallback: just show everything
    elements.forEach(el => el.classList.add('animate-in'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.getAttribute('data-delay') || 0;

        setTimeout(() => {
          el.classList.add('animate-in');
        }, parseInt(delay, 10));

        observer.unobserve(el);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px',
  });

  elements.forEach(el => observer.observe(el));
})();


/* ----------------------------------------------------------------
   5. SKILL BARS – animate progress bars on scroll
---------------------------------------------------------------- */
(function initSkillBars() {
  const bars = document.querySelectorAll('.skill-fill');

  if (!window.IntersectionObserver) {
    bars.forEach(bar => {
      bar.style.width = bar.getAttribute('data-width') + '%';
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const targetWidth = bar.getAttribute('data-width') + '%';
        // Small delay to let the section animate in first
        setTimeout(() => {
          bar.style.width = targetWidth;
        }, 200);
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.4 });

  bars.forEach(bar => observer.observe(bar));
})();


/* ----------------------------------------------------------------
   6. BACK-TO-TOP BUTTON
---------------------------------------------------------------- */
(function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();


/* ----------------------------------------------------------------
   7. CONTACT FORM – simple client-side feedback
      (Actual sending requires a backend/Formspree integration)
---------------------------------------------------------------- */
(function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    // If the action still has the placeholder URL, prevent submit and alert user
    if (form.action.includes('YOUR_FORM_ID')) {
      e.preventDefault();
      showFormMessage(
        'info',
        'Form not yet connected. Please email me directly at vamshikbharadwaj@gmail.com, or set up Formspree by replacing YOUR_FORM_ID in the form action.'
      );
      return;
    }

    // Otherwise let Formspree handle the actual submission
    // You can add a success handler here if you use AJAX with Formspree
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sending…';
    btn.disabled = true;
  });

  function showFormMessage(type, text) {
    // Remove existing message
    const existing = form.querySelector('.form-feedback');
    if (existing) existing.remove();

    const msg = document.createElement('div');
    msg.className = 'form-feedback';
    msg.style.cssText = `
      padding: 12px 16px;
      border-radius: 8px;
      font-size: 0.85rem;
      line-height: 1.5;
      background: ${type === 'info' ? 'rgba(99,102,241,0.1)' : 'rgba(16,185,129,0.1)'};
      border: 1px solid ${type === 'info' ? 'rgba(99,102,241,0.3)' : 'rgba(16,185,129,0.3)'};
      color: ${type === 'info' ? '#818cf8' : '#10b981'};
    `;
    msg.textContent = text;
    form.appendChild(msg);
  }
})();


/* ----------------------------------------------------------------
   8. SMOOTH SCROLL for all anchor links (backup for older browsers)
---------------------------------------------------------------- */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const offset = 80; // navbar height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();


/* ----------------------------------------------------------------
   9. SECTION REVEAL – trigger hero text animation on load
---------------------------------------------------------------- */
(function initHeroAnimation() {
  const heroText = document.querySelector('#hero .hero-text');
  const heroAvatar = document.querySelector('#hero .hero-avatar');

  if (heroText) {
    setTimeout(() => {
      heroText.style.opacity = '1';
      heroText.style.transform = 'none';
    }, 100);
  }
  if (heroAvatar) {
    setTimeout(() => {
      heroAvatar.style.opacity = '1';
      heroAvatar.style.transform = 'none';
    }, 300);
  }
})();
