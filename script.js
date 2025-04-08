AOS.init();

document.querySelectorAll('.read-more-btn').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.experience-photo-card');
    card.classList.toggle('expanded');
    button.textContent = card.classList.contains('expanded') ? 'Read Less' : 'Read More';
  });
});


const typed = new Typed('#typed', {
  strings: [
    "Hi, I'm Rafi Muhammad👋",
    "Welcome to my Website!",
    "Let's Build Something Cool!"
  ],
  typeSpeed: 80,
  backSpeed: 70,
  backDelay: 2000,
  startDelay: 1000,
  loop: true,
  showCursor: true,
  cursorChar: '|',
});


VANTA.WAVES({
  el: "#vanta-bg",
  color: 0x0a1d3a,
  shininess: 50,
  waveHeight: 20,
  waveSpeed: 0.5,
  zoom: 1.2,
  backgroundColor: 0x0a1d3a,
});


particlesJS("particles-js", {
    particles: {
      number: {
        value: 40,
        density: {
          enable: true,
          value_area: 800
        }
      },
      shape: {
        type: "star",
        stroke: {
          width: 0,
          color: "#ffffff"
        }
      },
      color: {
        value: "#ffffff"
      },
      opacity: {
        value: 12,
        random: true
      },
      size: {
        value: 5,
        random: true
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse" 
        },
        onclick: {
          enable: true,
          mode: "push" 
        }
      },
      modes: {
        repulse: {
          distance: 80,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true
  });
  
