const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// line 1 animation

window.addEventListener("scroll", function() {
    var line = document.getElementById("line");
    var position = line.getBoundingClientRect().top;
  
    var screenHeight = window.innerHeight;
  
    if (position - screenHeight <= 0) {
      line.style.animationPlayState = "running";
    }
  });

  
//  line 2 animation

window.addEventListener("scroll", function() {
    var line = document.getElementById("line2");
    var position = line.getBoundingClientRect().top;
  
    var screenHeight = window.innerHeight;
  
    if (position - screenHeight <= 0) {
      line.style.animationPlayState = "running";
    }
  });


//   About me appearing code

// Function to handle intersection changes
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }
  
  // Create a new Intersection Observer
  const descriptionObserver = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
  
  // Target the description element
  const descriptionElement = document.getElementById('description');
  
  // Observe the description element
  descriptionObserver.observe(descriptionElement);
  
  

//   Counter increaser code

document.addEventListener("DOMContentLoaded", function () {
    var counterStatsElement = document.querySelector("#counter-stats");
    var countingElements = document.querySelectorAll(".counting");
  
    function startCountingAnimation() {
      countingElements.forEach(function (countingElement) {
        var countTo = parseInt(countingElement.getAttribute("data-count"));
        var duration = 5000;
        var step = Math.ceil(countTo / (duration / 10));
        var currentCount = 0;
  
        var countingInterval = setInterval(function () {
          currentCount += step;
          if (currentCount >= countTo) {
            countingElement.textContent = countTo;
            clearInterval(countingInterval);
          } else {
            countingElement.textContent = currentCount;
          }
        }, 10);
      });
    }
  
    var options = {
      rootMargin: "0px",
      threshold: 0.5, // Adjust this threshold value as needed
    };
  
    var observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          startCountingAnimation();
          observer.unobserve(entry.target);
        }
      });
    }, options);
  
    observer.observe(counterStatsElement);
  });
  


//   Typing effect title appearing code

document.addEventListener("DOMContentLoaded", function() {
  // Create an Intersection Observer
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        // Start the typewriter effect when the element becomes visible
        startTypewriterEffect(entry.target);
        observer.unobserve(entry.target);
      }
    });
  });

  // Function to start the typewriter effect
  function startTypewriterEffect(element) {
    var textElement = element.querySelector("h1");
    textElement.style.opacity = 1; // Show the element
  
    // Trigger the typewriter effect animation
    textElement.style.animationPlayState = "running";
  }
  

  // Get the typewriter element
  var typewriterElement = document.querySelector(".typewriter");

  // Observe the typewriter element
  observer.observe(typewriterElement);
});



// Partenrs code
// const partnerTitle = document.getElementById('partnerTitle');

// const observer = new IntersectionObserver((entries, observer) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.style.opacity = 1;
//       observer.unobserve(entry.target);
//     }
//   });
// }, { threshold: 0.1 });

// observer.observe(partnerTitle);


const slideTrack = document.querySelector('.slide-track');
const slides = Array.from(document.querySelectorAll('.slide'));

let currentSlide = 0;
const slideWidth = slides[currentSlide].offsetWidth;

function scrollSlider() {
  slideTrack.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
  currentSlide = (currentSlide + 1) % slides.length;
}

setInterval(scrollSlider, 5000);



// partners title animation

window.addEventListener('scroll', function() {
  var partnerTitle = document.getElementById('partnerTitle');
  var rect = partnerTitle.getBoundingClientRect();

  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    partnerTitle.classList.add('appear');
  } else {
    partnerTitle.classList.remove('appear');
  }
});








// line 3  

window.addEventListener("scroll", function() {
  var line = document.getElementById("line3");
  var position = line.getBoundingClientRect().top;

  var screenHeight = window.innerHeight;

  if (position - screenHeight <= 0) {
    line.style.animationPlayState = "running";
  }
});
// line 4
window.addEventListener("scroll", function() {
  var line = document.getElementById("line4");
  var position = line.getBoundingClientRect().top;

  var screenHeight = window.innerHeight;

  if (position - screenHeight <= -10) {
    line.style.animationPlayState = "running";
  }
});



// Make the sponsors appear on scroll

window.addEventListener('scroll', function() {
  var partnerTitle = document.getElementById('slider');
  var rect = partnerTitle.getBoundingClientRect();

  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    partnerTitle.classList.add('appear');
  } else {
    partnerTitle.classList.remove('appear');
  }
});




// 3D effect code for the cards
VanillaTilt.init(document.querySelectorAll(".card"), {
  glare: true,
  reverse: true,
  "max-glare": 0.15
});



// Animation for the reviews title
window.addEventListener('DOMContentLoaded', (event) => {
  const animatedDiv = document.querySelector('#animatedDiv');

  let observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if(entry.isIntersecting) {
              entry.target.style.animationPlayState = 'running';
          } else {
              entry.target.style.animationPlayState = 'paused';
          }
      });
  });

  observer.observe(animatedDiv);
});

// 

window.addEventListener('scroll', function() {
  var partnerTitle = document.getElementById('textt');
  var rect = partnerTitle.getBoundingClientRect();

  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    partnerTitle.classList.add('appear');
  } else {
    partnerTitle.classList.remove('appear');
  }
});

// Footer taking me to the top of the page
document.getElementById("topButton").addEventListener("click", scrollToTop);

function scrollToTop(event) {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}



  function scrollToDescription() {
    const descriptionSection = document.getElementById('description');
    descriptionSection.scrollIntoView({ behavior: 'smooth' });
  }

  function scrollToWork(){
    const workSection = document.getElementById('partnerTitle');
    workSection.scrollIntoView({behavior: 'smooth'});
  }

