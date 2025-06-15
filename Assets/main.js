window.addEventListener("DOMContentLoaded", () => {
  const waveScreen = document.getElementById("waveScreen");
  const welcomeScreen = document.getElementById("welcomeScreen");
  const line2 = document.getElementById("line2");
  const bannerSection = document.getElementById("bannerSection");
  const skillsSliderWrapper = document.querySelector(".skills-slider-wrapper");
  const aboutHeading = document.getElementById("aboutHeading");
  const aboutCube = document.getElementById("aboutCube");

  // Hide wave
  setTimeout(() => waveScreen?.classList.add("hidden"), 1000);

  // Show welcome
  setTimeout(() => {
    welcomeScreen?.classList.remove("hidden");
    line2?.classList.add("visible");
  }, 1200);

  // Hide welcome
  setTimeout(() => welcomeScreen?.classList.add("hidden"), 2000);

  // Show main content
  setTimeout(() => {
    bannerSection?.classList.remove("hidden");
    bannerSection?.classList.add("show");

    // Now show about heading and cube
    aboutHeading?.classList.remove("hidden");
    aboutCube?.classList.remove("hidden");

    skillsSliderWrapper?.classList.add("show");

    // Init slick
    $('.skills-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 3000,
      cssEase: 'linear',
      infinite: true,
      variableWidth: true,
      arrows: false,
      dots: false
    });
  }, 5000);
});
