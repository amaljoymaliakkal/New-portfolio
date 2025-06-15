window.addEventListener("DOMContentLoaded", () => {
  const waveScreen = document.getElementById("waveScreen");
  const welcomeScreen = document.getElementById("welcomeScreen");
  const line2 = document.getElementById("line2");
  const bannerSection = document.getElementById("bannerSection");
  const skillsSliderWrapper = document.querySelector(".skills-slider-wrapper");

  setTimeout(() => waveScreen?.classList.add("hidden"), 1000);

  setTimeout(() => {
    welcomeScreen?.classList.remove("hidden");
    line2?.classList.add("visible");
  }, 1200);

  setTimeout(() => welcomeScreen?.classList.add("hidden"), 2000);

  setTimeout(() => {
    bannerSection?.classList.remove("hidden");
    bannerSection?.classList.add("show");

    // Show slider now
    skillsSliderWrapper?.classList.add("show");

    // Initialize slider
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
