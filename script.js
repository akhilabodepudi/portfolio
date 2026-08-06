const year = document.querySelector("#year");
const navbar = document.querySelector("#navbar");
const toggle = document.querySelector(".mobile-toggle");
const mobileMenu = document.querySelector("#mobile-menu");

if (year) {
  year.textContent = String(new Date().getFullYear());
}

window.addEventListener("scroll", () => {
  if (!navbar) return;
  navbar.classList.toggle("scrolled", window.scrollY > 40);
});

if (toggle && mobileMenu) {
  toggle.addEventListener("click", () => {
    const open = mobileMenu.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}
