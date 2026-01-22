// ===== FutureEd Hub JavaScript =====

// Confirm JS connection
console.log("FutureEd Hub JavaScript connected successfully");

// Smooth scroll for same-page anchors
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      e.preventDefault();
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Get Started button animation (scale effect on hover)
const getStartedBtn = document.querySelector(".btn");
if (getStartedBtn) {
  getStartedBtn.addEventListener("mouseenter", () => {
    getStartedBtn.style.transition = "transform 0.3s ease";
    getStartedBtn.style.transform = "scale(1.1)";
  });

  getStartedBtn.addEventListener("mouseleave", () => {
    getStartedBtn.style.transform = "scale(1)";
  });

  getStartedBtn.addEventListener("click", () => {
    console.log("Get Started clicked");
  });
}

// Card hover animation (lift and shadow)
document.querySelectorAll(".card").forEach(card => {
  card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";

  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)";
    card.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
    card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.05)";
  });
});

// Fade in elements on scroll (optional, for polish)
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

fadeElements.forEach(el => observer.observe(el));

// Footer year auto-update
const footer = document.querySelector("footer");
if (footer) {
  const year = new Date().getFullYear();
  footer.querySelector("p").innerHTML = `&copy; ${year} FutureEd Hub`;
}


