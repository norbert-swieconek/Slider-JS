const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

let counter = 0;

// position slides
slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
});

// arrows
nextBtn.addEventListener('click', function () {
    counter++;
    carousel();
});
prevBtn.addEventListener('click', function () {
    counter--;
    carousel();
});

// dots
dots.forEach(function (dot, index) {
    dot.addEventListener('click', function() {
        counter = index;
        translateSlide();
    })
});

// working with slides
function carousel () {
    if (counter === slides.length) {
        counter = 0;
    }
    if (counter < 0) {
        counter = slides.length - 1;
    }

    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });  
};

// moving slides
function translateSlide () {
    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;      
    }); 
};

// Auto Slider
setInterval(autoPlaying, 5000);

function autoPlaying () {
    counter++;         
    if (counter >= 4) {
        counter = 0;
    };  
    translateSlide();
};
