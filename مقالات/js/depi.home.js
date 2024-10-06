// const allIndicators = document.querySelectorAll('button.indicator')

// console.log(allIndicators)


// allIndicators.forEach((ele) => {
//   ele.addEventListener('click', () => {
//     allIndicators.forEach((ele) => {
//       ele.classList.remove('active');
//     });
//     ele.classList.add('active');
//   });
// })


const indicators = document.querySelectorAll('.indicator');
const carousel = document.querySelector('#slider');

carousel.addEventListener('slide.bs.carousel', function (event) {
  // Remove the active class from all indicators
  indicators.forEach(indicator => {
    indicator.classList.remove('active');
  });

  // Add active class to the clicked indicator
  indicators[event.to].classList.add('active');
});

