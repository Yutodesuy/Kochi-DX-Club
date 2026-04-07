document.body.classList.add("js-ready");

const GOOGLE_FORM_URL = "";

const body = document.body;
const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const revealItems = document.querySelectorAll(".reveal");
const yearNode = document.querySelector("#year");
const formLinks = document.querySelectorAll("[data-form-link]");

if (yearNode) {
  yearNode.textContent = new Date().getFullYear().toString();
}

formLinks.forEach((link) => {
  if (GOOGLE_FORM_URL) {
    link.setAttribute("href", GOOGLE_FORM_URL);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noreferrer");
    link.classList.remove("is-pending");
    return;
  }

  link.setAttribute("href", "#apply-note");
  link.classList.add("is-pending");
});

const setHeaderState = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
};

const revealInView = () => {
  revealItems.forEach((item) => {
    const rect = item.getBoundingClientRect();

    if (rect.top < window.innerHeight * 0.92) {
      item.classList.add("is-visible");
    }
  });
};

setHeaderState();
revealInView();
window.addEventListener("scroll", setHeaderState, { passive: true });
window.addEventListener("resize", revealInView, { passive: true });

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const nextExpanded = menuToggle.getAttribute("aria-expanded") !== "true";
    menuToggle.setAttribute("aria-expanded", String(nextExpanded));
    body.classList.toggle("nav-open", nextExpanded);
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    body.classList.remove("nav-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -32px 0px",
    }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
