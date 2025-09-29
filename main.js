document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const overlay = document.querySelector(".overlay");

  // toggle menu + overlay
  if (menuToggle && navLinks && overlay) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      overlay.classList.toggle("active");
    });

    overlay.addEventListener("click", () => {
      navLinks.classList.remove("active");
      overlay.classList.remove("active");
    });
  }

  // dropdown click toggle (mobile)
  const dropdown = document.querySelector(".dropdown > a");
  if (dropdown) {
    dropdown.addEventListener("click", (e) => {
      e.preventDefault();
      dropdown.parentElement.classList.toggle("open");
    });
  }

  // close menu when clicking a link (except dropdown opener)
  const navItems = document.querySelectorAll(".nav-links a:not(.dropdown > a)");
  navItems.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      overlay.classList.remove("active");
    });
  });
});
