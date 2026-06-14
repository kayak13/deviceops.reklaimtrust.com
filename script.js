const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

document.querySelectorAll(".lead-form").forEach((form) => {
  form.addEventListener("submit", () => {
    const note = form.querySelector("[data-form-note]");
    if (note) {
      note.textContent = "Submitting your business repair account request.";
    }
  });
});
