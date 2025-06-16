window.addEventListener("DOMContentLoaded", () => {
  const waveScreen = document.getElementById("waveScreen");
  const welcomeScreen = document.getElementById("welcomeScreen");
  const line2 = document.getElementById("line2");
  const bannerSection = document.getElementById("bannerSection");
  const skillsSliderWrapper = document.querySelector(".skills-slider-wrapper");
  const aboutHeading = document.getElementById("aboutHeading");
  const aboutCube = document.getElementById("aboutCube");
  const header = document.getElementById("mainHeader");
  const caseStudies = document.getElementById("caseStudies");

  // Wave → Welcome transition
  setTimeout(() => waveScreen?.classList.add("hidden"), 1000);
  setTimeout(() => {
    welcomeScreen?.classList.remove("hidden");
    line2?.classList.add("visible");
  }, 1200);
  setTimeout(() => welcomeScreen?.classList.add("hidden"), 1800);

  // Show main content
  setTimeout(() => {
    bannerSection?.classList.remove("hidden");
    bannerSection?.classList.add("show");

    aboutHeading?.classList.remove("hidden");
    aboutCube?.classList.remove("hidden");
    skillsSliderWrapper?.classList.add("show");

    // Only now show the case studies section
    caseStudies?.classList.remove("hidden");

    // Init slick slider
    $('.image-slider').slick({
  infinite: true,
        speed: 8000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        arrows: false,
        dots: false,
        pauseOnHover: false,
        variableWidth: true,
        rtl: true
    });
  }, 2600);

  // Add background to header on scroll
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header?.classList.add("scrolled-header");
    } else {
      header?.classList.remove("scrolled-header");
    }
  });
});
