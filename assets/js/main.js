
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

  
  // Owl Carousel 03
  $(".movies-serice-cal").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: false,
    autoplayTimeout: 3000,
    responsive: {
      0: { items: 2 },
      576: { items: 2 },
      768: { items: 5 },
      992: { items: 7 }
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


  const video = document.getElementById('video');
  const videoContainer = document.getElementById('videoContainer');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const progress = document.getElementById('progress');
  const currentTimeDisplay = document.getElementById('currentTime');
  const totalTimeDisplay = document.getElementById('totalTime');
  const leftArrow = document.getElementById('leftArrow');
  const rightArrow = document.getElementById('rightArrow');
  const volumeToggle = document.getElementById('volumeToggle');


  let lastClickTime = 0;

  // Prevent single click on controls from toggling video
  videoContainer.addEventListener('click', (e) => {
    const now = new Date().getTime();
    const timeDiff = now - lastClickTime;
    lastClickTime = now;

    // Prevent click when dragging or clicking UI controls
    const isControl = e.target.closest('.controls') || e.target.closest('.settings-icons') || e.target.tagName === 'INPUT';
    if (isControl) return;

    if (timeDiff > 300) {
      togglePlayPauseOverlay();
    }
  });

  function togglePlayPauseOverlay() {
    if (video.paused) {
      playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    } else {
      playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }
    playPauseBtn.style.display = 'block';

    playPauseBtn.onclick = () => {
      togglePlay();
    };

    setTimeout(() => {
      playPauseBtn.style.display = 'none';
    }, 1000);
  }

  function togglePlay() {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }

  function rewind() {
    video.currentTime = Math.max(0, video.currentTime - 10);
    showArrow(leftArrow);
  }

  function forward() {
    video.currentTime = Math.min(video.duration, video.currentTime + 10);
    showArrow(rightArrow);
  }

  function showArrow(element) {
    element.style.display = 'block';
    setTimeout(() => element.style.display = 'none', 1000);
  }

  video.addEventListener('timeupdate', () => {
    const percentage = (video.currentTime / video.duration) * 100;
    progress.value = percentage;
    progress.style.background = `linear-gradient(to right, #3396FF ${percentage}%, #ccc ${percentage}%)`;
    currentTimeDisplay.textContent = formatTime(video.currentTime);
  });

  video.addEventListener('loadedmetadata', () => {
    totalTimeDisplay.textContent = formatTime(video.duration);
  });

  progress.addEventListener('input', () => {
    const percentage = progress.value;
    video.currentTime = (percentage / 100) * video.duration;
    progress.style.background = `linear-gradient(to right, #3396FF ${percentage}%, #ccc ${percentage}%)`;
  });

  function formatTime(time) {
    const mins = Math.floor(time / 60).toString().padStart(2, '0');
    const secs = Math.floor(time % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  }

  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  volumeToggle.addEventListener('click', () => {
    video.muted = !video.muted;
    volumeToggle.className = video.muted ? 'fas fa-volume-mute' : 'fas fa-volume-up';
  });

  // password icon - show 


// -- for profile dropdownElements
  document.addEventListener("DOMContentLoaded", function(){
  const dropdownElements = document.querySelectorAll('.dropdown-toggle');
  dropdownElements.forEach(function(dropdownToggleEl){
    new bootstrap.Dropdown(dropdownToggleEl);
  });
});
