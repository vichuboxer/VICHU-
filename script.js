const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  navLinks.classList.toggle("is-open", !isExpanded);
});

navLinks.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("is-open");
  }
});

document.querySelector("#year").textContent = new Date().getFullYear();

const contactForm = document.querySelector("#contact-form");
const feedback = document.querySelector("#form-feedback");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  feedback.classList.remove("error");

  if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
    feedback.textContent = "Please complete all fields before sending.";
    feedback.classList.add("error");
    return;
  }

  if (!emailPattern.test(emailInput.value.trim())) {
    feedback.textContent = "Please check your email address and try again.";
    feedback.classList.add("error");
    return;
  }

  feedback.textContent = "Thanks for your note! This demo form is ready to connect to a backend.";
  contactForm.reset();
});
