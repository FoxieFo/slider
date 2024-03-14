const sliderData = [
  {
    city: "Rostov-on-Don, LCD admiral",
    area: "81 m2",
    time: "3.5 months",
    cost: "Upon Request"
  },
  {
    city: "Sochi, Thieves",
    area: "105 m2",
    time: "4 months",
    cost: "Upon Request"
  },
  {
    city: "Rostov-on-Don, Patriotic",
    area: "93 m2",
    time: "3 months",
    cost: "Upon Request"
  }
];

const sliderImages = document.querySelector('.slider-images');
const slides = Array.from(sliderImages.querySelectorAll('img'));
const prevButton = document.querySelector('.slider-button__left');
const nextButton = document.querySelector('.slider-button__right');
const sliderOptions = document.querySelector('.slider-options');
const options = Array.from(sliderOptions.querySelectorAll('li'));
const sliderDots = document.querySelector('.slider-button__circles');
const dots = Array.from(sliderDots.querySelectorAll('div'));

const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

options.forEach((option, index) => {
  option.addEventListener('click', () => {
    slideIndex = index;
    updateSlider();
  });
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    slideIndex = index;
    updateSlider();
  });
});

function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
};

function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
};

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      // display the current slide
      slide.style.display = 'block';
      // apply animation
      slide.classList.add('slide-in');
      // update options color
      options[index].classList.add('slider-option--colored');
      // update dots color
      dots[index].innerHTML = `<img src="./img/active-button.svg"></img>`
      // update the apartment info
      const currentData = sliderData[index];
      document.querySelector('.city').textContent = currentData.city;
      document.querySelector('.area').textContent = currentData.area;
      document.querySelector('.time').textContent = currentData.time;
      document.querySelector('.cost').textContent = currentData.cost;
    } else {
      slide.classList.remove('slide-in');
      slide.style.display = 'none';
      options[index].classList.remove('slider-option--colored');
      dots[index].innerHTML = `<img src="./img/non-active-button.svg"></img>`
    }
  });
};

updateSlider();