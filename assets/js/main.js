
// logos carousel
$('.logo-carousel').owlCarousel({
  loop: true,
  margin: 15,
  rtl: true,
  nav: false,
  dots: false,
  mouseDrag: true,
  touchDrag: true,
  autoplay: false,
  autoplayTimeout: 2000,
  autoplayHoverPause: false,
  responsive: {
    0: { items: 3 },
    600: { items: 5 },
    1000: { items: 7 }
  }
});

// poster carousel
$('.poster-carousel').owlCarousel({
  loop: true,
  margin: 15,
  rtl: true,
  nav: false,
  dots: false,
  mouseDrag: true,
  touchDrag: true,
  autoplay: false,
  autoplayTimeout: 2000,
  autoplayHoverPause: false,
  responsive: {
    0: { items: 2 },
    600: { items: 4 },
    1000: { items: 5 }
  }
});

// match carousel
$('.match-carousel').owlCarousel({
  loop: true,
  margin: 15,
  rtl: true,
  nav: false,
  dots: false,
  mouseDrag: true,
  touchDrag: true,
  autoplay: false,
  autoplayTimeout: 2000,
  autoplayHoverPause: false,
  responsive: {
    0: { items: 2 },
    600: { items: 4 },
    1000: { items: 4 }
  }
});

$('.cast-carousel').owlCarousel({
    loop: true,
    margin: 12,
    nav: true,
    dots: true,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    responsive: {
      0: {
        items: 3
      },
      576: {
        items: 4
      },
      768: {
        items: 5
      },
      992: {
        items: 6
      }
    }
  });


function selectPlan(plan) {
  const monthlyBox = document.getElementById('monthlyPlan');
  const yearlyBox = document.getElementById('yearlyPlan');
  const checkMonthly = document.getElementById('checkMonthly');
  const checkYearly = document.getElementById('checkYearly');

  if (plan === 'monthly') {
    monthlyBox.classList.add('active');
    yearlyBox.classList.remove('active');
    checkMonthly.classList.remove('hidden');
    checkYearly.classList.add('hidden');
  } else {
    yearlyBox.classList.add('active');
    monthlyBox.classList.remove('active');
    checkYearly.classList.remove('hidden');
    checkMonthly.classList.add('hidden');
  }
}

function confirmSelection() {
  const isMonthly = document.getElementById('monthlyPlan').classList.contains('active');
  const selected = isMonthly ? 'Monthly Premium ($24.99/month)' : 'Yearly Premium ($179.99/year)';
  alert("You have selected: " + selected);
}