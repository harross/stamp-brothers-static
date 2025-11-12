function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const heroHeadings = document.querySelectorAll(".hero-heading");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { 
        entry.target.classList.add("fadeInFromTop"); // your fade effect
        setTimeout(() => {
            entry.target.classList.add("active");
        }, 800);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  heroHeadings.forEach(h => observer.observe(h));
});


document.addEventListener("DOMContentLoaded", () => {
    const heroHeading = document.querySelectorAll(".hero-content");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fadeInFromBottom");
                entry.target.classList.add("underline-animation");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    heroHeading.forEach(heroHeading => observer.observe(heroHeading));
})

document.addEventListener("DOMContentLoaded", () => {
    const heroHeading = document.querySelectorAll(".service-card-left");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fadeInFromLeft");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    heroHeading.forEach(heroHeading => observer.observe(heroHeading));
})

document.addEventListener("DOMContentLoaded", () => {
    const heroHeading = document.querySelectorAll(".service-card-right");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fadeInFromRight");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    heroHeading.forEach(heroHeading => observer.observe(heroHeading));
})

// Glowing card/button/etc
document.addEventListener("DOMContentLoaded", () => {
    const glowingButton = document.querySelector(".glowing-button");

    let angle = 0;

    function animateGlow() {
        const radius = 10;
        const shadowX = Math.cos(angle) * radius;
        const shadowY = Math.sin(angle) * radius;

        glowingButton.style.boxShadow = `${shadowX}px ${shadowY}px 30px rgba(0, 0, 0, 0.35)`;

        angle += 0.015;
        requestAnimationFrame(animateGlow);
    }

    animateGlow();
})

