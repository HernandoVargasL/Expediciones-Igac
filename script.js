document.addEventListener("DOMContentLoaded", function() {
    var swiper1 = new Swiper('.swiper-herobanner', {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '.swiper-pagination1',
            clickable: true,
        },
        loop: true, // Enable loop mode
        autoplay: {
        delay: 7000, // Delay between transitions (in ms)
        disableOnInteraction: false, // Stop autoplay on user interaction
        },
        on: {
        init: function() {
            var firstSlide = this.slides[0];
            firstSlide.classList.add('zoomed');
        },
        slideChangeTransitionStart: function() {
            var currentSlide = this.slides[this.activeIndex];
            var zoomedSlide = this.slides[this.previousIndex];
            
            if (zoomedSlide) {
            zoomedSlide.classList.remove('zoomed');
            }
            
            currentSlide.classList.add('zoomed');
        }
        }
    });
    
    const swiper2 = new Swiper('#swiper2', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 30,
        loop: false,
    
        // Pagination
        pagination: {
            el: '.swiper-pagination2',
            clickable: true,
        },
    
        // Navigation arrows
        navigation: {
            nextEl: '.swiper2-next',
            prevEl: '.swiper2-prev',
        }
    });

    const swiper3 = new Swiper('#swiper3', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 30,
        loop: false,
    
        // Pagination
        pagination: {
            el: '.swiper-pagination3',
            clickable: true,
        },
    
        // Navigation arrows
        navigation: {
            nextEl: '.swiper3-next',
            prevEl: '.swiper3-prev',
        }
    });

    const swiper4 = new Swiper('#swiper4', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 30,
        loop: false,
    
        // Pagination
        pagination: {
            el: '.swiper-pagination4',
            clickable: true,
        },
    
        // Navigation arrows
        navigation: {
            nextEl: '.swiper4-next',
            prevEl: '.swiper4-prev',
        }
    });

});



