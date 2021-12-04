$(function () {
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }

  $('.reviews__items').slick({
    nextArrow: '<button type="button" class="slick-next slick-btn"><img src="images/arrow-next.svg"></button>',
    prevArrow: '<button type="button" class="slick-prev slick-btn"><img src="images/arrow-prev.svg"></button>',
    responsive: [
      {
          breakpoint: 721,
          settings: {
            arrows: false,
          }
    }],
  });

  $('.news__items').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    nextArrow: '<button type="button" class="news-slick-next news-slick-btn"><img src="images/next-arrow.svg"></button>',
    prevArrow: '<button type="button" class="news-slick-prev news-slick-btn"><img src="images/arrow-prev.svg"></button>',
    responsive: [
      {
          breakpoint: 1290,
          settings: {
            arrows: false,
          }
      },
      {
          breakpoint: 1160,
          settings: {
            arrows: false,
              slidesToShow: 2,
              slidesToScroll: 3
          }
      },
      {
        breakpoint: 800,
        settings: {
          arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
  ],


  })

});