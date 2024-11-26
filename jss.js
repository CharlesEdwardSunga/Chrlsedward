// Dark mode toggle functionality
const toggle = document.getElementById('ToggleDark');
const body = document.body;

body.classList.add('dark-theme');  // Ensuring dark theme by default
toggle.classList.add('bi-brightness-high-fill');

toggle.addEventListener('click', function () {
    if (body.classList.contains('dark-theme')) {
        body.classList.replace('dark-theme', 'light-theme');
        toggle.classList.replace('bi-brightness-high-fill', 'bi-moon-fill');
    } else {
        body.classList.replace('light-theme', 'dark-theme');
        toggle.classList.replace('bi-moon-fill', 'bi-brightness-high-fill');
    }
});

// Particle Background Effect
const particleContainer = document.querySelector('.particle-background');
const particles = [];
const particleDistanceThreshold = 100; // Distance threshold for particle movement

// Create 100 particles with random positions inside the container
for (let i = 0; i < 100; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particleContainer.appendChild(particle);
    particles.push(particle);
}

// Function to update particle positions based on mouse movement
function updateParticles(x, y) {
    particles.forEach(particle => {
        const particleX = particle.offsetLeft;
        const particleY = particle.offsetTop;
        const distance = Math.hypot(particleX - x, particleY - y);

        if (distance < particleDistanceThreshold) {
            const moveX = (x - particleX) / 20;
            const moveY = (y - particleY) / 20;
            particle.style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
            particle.style.transform = '';
        }
    });
}

// Sparkle effect for cursor
const sparkleContainer = document.querySelector('.particle-container');

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.width = `${Math.random() * 2 + 2}px`;
    sparkle.style.height = `${Math.random() * 2 + 2}px`;
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;
    sparkle.style.backgroundColor = ' #1da1f2';

    sparkleContainer.appendChild(sparkle);

    // Animate the sparkle
    requestAnimationFrame(() => {
        sparkle.style.transform = `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px) scale(0.8)`;
        sparkle.style.opacity = '0';
    });

    setTimeout(() => sparkle.remove(), 800);
}



// Track mouse movement for particles and sparkles
document.addEventListener('mousemove', (event) => {
    updateParticles(event.clientX, event.clientY); // Update particle positions
    createSparkle(event.clientX, event.clientY); // Create sparkle effect
});


// Scroll effect for timeline items
const timelineItems = document.querySelectorAll('.timeline-item');

const onScroll = () => {
    timelineItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100 && rect.bottom > 100;

        if (isVisible) {
            item.classList.add('show'); // Add the 'show' class when in view
        } else {
            item.classList.remove('show'); // Remove the 'show' class when out of view
        }
    });
};

// Attach scroll event listener
window.addEventListener('scroll', onScroll);

// Trigger animation on initial load
onScroll();

// HEADER Scrolled Effect
window.addEventListener("scroll", function () {
    const header = document.querySelector("header"); // Changed from '#header' to 'header'
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

//------ABOUT
document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector(".abt-title");
    const profilePic = document.querySelector(".abt-profile-pic");
  
     // Ensure the title is hidden initially
  title.classList.add("hidden");

    // Intersection Observer to toggle visibility on scroll
    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            } else {
              entry.target.classList.remove("visible");
            }
          });
        },
        { threshold: 0.5 } // Trigger when 50% of the title is visible
      );
    
      observer.observe(title);
    });

  observer.observe(abt-title);

    // Interactive profile picture glow effect
    profilePic.addEventListener("mouseenter", () => {
      profilePic.style.boxShadow = "0 0 30px rgba(29, 161, 242, 0.8)";
    });
  
    profilePic.addEventListener("mouseleave", () => {
      profilePic.style.boxShadow = "none";
    });

