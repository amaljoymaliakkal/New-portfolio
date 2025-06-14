// ===== Intro Sequence =====
window.addEventListener("DOMContentLoaded", () => {
  const waveScreen = document.getElementById("waveScreen");
  const welcomeScreen = document.getElementById("welcomeScreen");
  const line1 = document.getElementById("line1");
  const line2 = document.getElementById("line2");
  const bannerSection = document.getElementById("bannerSection");

  setTimeout(() => {
    waveScreen?.classList.add("hidden");
  }, 1000);

  setTimeout(() => {
    welcomeScreen?.classList.remove("hidden");
    line1?.classList.add("visible");
  }, 1200);

  setTimeout(() => {
    line2?.classList.add("visible");
  }, 2000);

  setTimeout(() => {
    welcomeScreen?.classList.add("hidden");
  }, 3200);

  setTimeout(() => {
    bannerSection?.classList.add("show");
  }, 4000);
});

// ===== Scrollspy Behavior =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let currentSectionId = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      currentSectionId = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSectionId}`) {
      link.classList.add("active");
    }
  });
});
