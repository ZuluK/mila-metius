// ==============================================
// 🔧 FONT SWITCHER HELPER
// ----------------------------------------------
// This script checks the URL for a special query
// parameter (?font=mulish). If it’s present, it
// changes the site’s font from the default
// "Poppins" to "Mulish" dynamically.
// ==============================================

// Wait until the entire page (HTML document) is fully loaded
document.addEventListener('DOMContentLoaded', function() {

  // Create an object that allows us to easily read query parameters from the URL
  // Example: if the URL is "index.html?font=mulish"
  // then params.get('font') will return "mulish"
  const params = new URLSearchParams(location.search);

  // Check if the user included "?font=mulish" in the URL
  if (params.get('font') === 'mulish') {

    // If true, remove the default Poppins font class from the <body>
    document.body.classList.remove('font-poppins');

    // And add the Mulish font class to switch the site’s typography
    document.body.classList.add('font-mulish');
  }
});

/* ============================================== */
/* 🌿 Global Fade-in on Scroll Animation */
/* Works site-wide for any element with .fade-in */
/* ============================================== */

document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.fade-in');

  // Create a single observer instance
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // triggers once
      }
    });
  }, {
    threshold: 0.2 // triggers when 20% of element is visible
  });

  // Observe all fade-in elements
  fadeElements.forEach(el => observer.observe(el));
});
// ===============================
// Pop-Up Showcase horizontal scroll
// ===============================
document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".showcase-track");
  const btnPrev = document.querySelector(".showcase-nav-prev");
  const btnNext = document.querySelector(".showcase-nav-next");

  if (!track || !btnPrev || !btnNext) return;

  const scrollAmount = () => track.clientWidth * 0.8;

  btnPrev.addEventListener("click", () => {
    track.scrollBy({ left: -scrollAmount(), behavior: "smooth" });
  });

  btnNext.addEventListener("click", () => {
    track.scrollBy({ left: scrollAmount(), behavior: "smooth" });
  });
});


