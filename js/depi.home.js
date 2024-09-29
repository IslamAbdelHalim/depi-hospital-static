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





const companiesPagination = document.querySelectorAll('.paginationCompanies .carousel-indicator button');


companiesPagination.forEach((btn) => {
  btn.addEventListener('click', () => {
    companiesPagination.forEach((btn) => {
      btn.classList.remove('isactive');
    });
    btn.classList.add('isactive');
  });
});


const lis = document.querySelectorAll('footer ul li');

lis.forEach((btn) => {
  btn.addEventListener('click', () => {
    lis.forEach((li) => {
      li.classList.remove('active');
    });
    btn.classList.add('active');
  });
});