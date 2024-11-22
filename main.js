$(document).ready(function() {
    $('.menu-toggler').on('click', function() {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });
    $('.top-nav .nav-link').on('click', function() {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });
    $('nav a[href*="#"]').on('click', function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000);
    });
    //scrollup bottom
    $('#up').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });
    AOS.init({
        easing: 'ease',
        duration: 1000,
        once: true
    });
});

let currentSlide = 0;
        const slides = document.querySelectorAll('.carousel-slide');
        const texts = document.querySelectorAll('.text-content');

        function showSlide(index) {
            if (index >= slides.length) index = 0;
            if (index < 0) index = slides.length - 1;
            
            slides.forEach(slide => slide.classList.remove('active'));
            texts.forEach(text => text.classList.remove('active'));
            
            slides[index].classList.add('active');
            texts[index].classList.add('active');
            
            currentSlide = index;
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
        }