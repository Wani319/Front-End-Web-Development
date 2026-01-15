// ===== FutureEd Hub JavaScript =====

// Confirm JS connection
console.log("FutureEd Hub JavaScript connected successfully");

// Smooth scroll ONLY for same-page anchors
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    // Ignore empty or invalid hashes
    if (targetId === "#") return;

    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      e.preventDefault();
      targetSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Get Started button (only on home page)
const getStartedBtn = document.querySelector(".btn");

if (getStartedBtn) {
  getStartedBtn.addEventListener("click", () => {
    console.log("Get Started clicked");
  });
}

// Card hover animation (safe for all pages)
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-5px)";
    card.style.boxShadow = "0 15px 30px rgba(0,0,0,0.12)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
    card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.05)";
  });
});

// Footer year auto-update (targets ONLY copyright)
const footerYear = document.querySelector("footer");

if (footerYear) {
  const year = new Date().getFullYear();
  footerYear.querySelector("p").innerHTML = `&copy; ${year} FutureEd Hub`;
}

