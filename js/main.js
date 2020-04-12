$(window).on('load', () => {
    setTimeout(() => {
        $('.js-loaderWrap').fadeOut();
    }, 800);
});

const childEle = $('.js-carouselWrap').find('.innerImageWrap').length;
let counter = 1;

$(document).ready(() => {
    /* Navigation animation */
    $('.js-mainLink').on('click', (event) => {
        event.stopPropagation();
        event.preventDefault();

        if ($(window).outerWidth() <= 900) {
            $('.js-hamburger').removeClass('active')
            $('.js-menuList, .js-mobileOverlay').removeClass('show');
            setTimeout(() => {
                $('.js-menuList').removeClass('active');
                $('.js-mobileOverlay').removeClass('active');
            }, 300);
        }

        const sectionId = $(event.currentTarget).attr('href');

        $('html,body').animate({scrollTop: $(sectionId).offset().top - (sectionId === '#portfolio' ? 100 : 50)}, 'slow');
    });

    let scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".js-nav").addClass("scrolled");
        $('.backToHomeLink').addClass('show');
    } else {
        $('.backToHomeLink').removeClass('show');
    }
    
    $(window).scroll(function() {    
        scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $(".js-nav").addClass("scrolled");
            $('.backToHomeLink').addClass('show');
        } else {
            $(".js-nav").removeClass("scrolled");
            $('.backToHomeLink').removeClass('show');
        }
    }); 

    let outerWidth = $('.js-carouselWrap').outerWidth();
    
    $(window).on('resize', () => {
        $('.js-carouselWrap').outerWidth('100%');
        outerWidth = $('.js-carouselWrap').outerWidth();
    });

    $('.js-rigthArrow').on('click', (event) => {
        event.stopPropagation();
        if (counter < 3)  {
            counter++;
            $('.js-carouselWrap').animate( { scrollLeft: '+='+outerWidth }, 1000);
            dotSetActiveInactive(counter);
        }
    });

    $('.js-leftArrow').on('click', (event) => {
        event.stopPropagation();
        if (counter > 1) {
            counter--;
            $('.js-carouselWrap').animate( { scrollLeft: '-='+outerWidth }, 1000);
            dotSetActiveInactive(counter);
        }
    });

    $('.js-dotCarousel a').on('click', (event) => {
        event.stopPropagation();
        const carouselValue = $(event.currentTarget).data('value');
        counter = carouselValue + 1;
        $('.js-carouselWrap').animate( { scrollLeft: (outerWidth * carouselValue) }, 1000);
        dotSetActiveInactive(counter);
    })

    // Menu open for mobile
    $('.js-hamburger').on('click', (event) => {
        event.stopPropagation();
        if (!$(event.currentTarget).hasClass('active')) {
            $(event.currentTarget).addClass('active');
            $('.js-mobileOverlay').addClass('active');
            
            setTimeout(() => {
                $('.js-mobileOverlay').addClass('show');
            }, 100);

            setTimeout(() => {
                $('.js-menuList').addClass('active');
            }, 300);
    
            setTimeout(() => {
                $('.js-menuList').addClass('show');
            }, 600);
        } else {
            $(event.currentTarget).removeClass('active')
            $('.js-menuList, .js-mobileOverlay').removeClass('show');
            setTimeout(() => {
                $('.js-menuList').removeClass('active');
                $('.js-mobileOverlay').removeClass('active');
            }, 300);
        }
    });

    // Read more event for Services
    $('.js-readMore').on('click', (event) => {
        event.stopPropagation();
        $(event.currentTarget).closest('.servicePointers').find('p').toggleClass('showMore');
        if ($(event.currentTarget).text().toLowerCase() === 'read more') {
            $(event.currentTarget).text('Read Less');
        } else {
            $(event.currentTarget).text('Read More');
        }
    });

    // Tabination feature
    $('.js-tabLink').on('click', (event) => {
        event.stopPropagation();
        event.preventDefault();
        $('.js-tabLink').removeClass('active');
        const tabBody = $(event.currentTarget).attr('href');
        $(event.currentTarget).addClass('active')
        $('.js-tabBody').fadeOut();
        if (tabBody === '#body2') {
            $('.js-boxWrap').fadeOut();
        } else {
            $('.js-boxWrap').fadeIn();
        }
        setTimeout(() => {
            $(tabBody).fadeIn();
        }, 400);
    });

    $('#track').on('click', (event) => {
        event.stopPropagation();
        const trackingNumber = $('.js-inputTracking').val();

        if (trackingNumber.length < 1) {
            $('.js-inputTracking').addClass('error');
            $('#errorMessage').text('Please enter valid tracking number!').fadeIn();
        }
    });

    $('.js-inputTracking').on('keyup', (event) => {
        const trackingValue = $(event.currentTarget).val();
        if (trackingValue.length > 0) {
            $('.js-inputTracking').removeClass('error');
            $('#errorMessage').text('Please enter valid tracking number!').fadeOut();
        }
    });

    // Accordion feature
    $('.js-titleAccordion').on('click', (event) => {
        event.stopPropagation();
        if (!$(event.currentTarget).hasClass('active')) {
            $('.js-titleAccordion').removeClass('active');
            $('.js-bodyAccordion').removeClass('active');
            $(event.currentTarget).addClass('active');
            $(event.currentTarget).siblings('.js-bodyAccordion').addClass('active');
        } else {
            $(event.currentTarget).removeClass('active');
            $(event.currentTarget).siblings('.js-bodyAccordion').removeClass('active');
        }
    });

    // Testimonial slider
    let outerTesimonial = $('.js-testimonial').outerWidth();
    $(window).on('resize', () => {
        $('.js-testimonial').outerWidth('100%');
        outerTesimonial = $('.js-testimonial').outerWidth();
    });
    let counterTestimonial = 1;
    $('.js-portfolioCarousel a').on('click', (event) => {
        event.stopPropagation();
        const carouselValue = $(event.currentTarget).data('value');
        counterTestimonial = carouselValue + 1;
        $('.js-testimonial').animate( { scrollLeft: (outerTesimonial * carouselValue) - 10 }, 1000);
        testimonialCourasel(counterTestimonial);
    })
});

function dotSetActiveInactive(counter) {
    $('.js-dotCarousel').find('a').removeClass('active');
    $('.js-dotCarousel').find('a:nth-child('+ counter +')').addClass('active');
}

function testimonialCourasel(counter) {
    $('.js-portfolioCarousel').find('a').removeClass('active');
    $('.js-portfolioCarousel').find('a:nth-child('+ counter +')').addClass('active');
}

function vidplay() {
    var video = document.getElementById("video1");
    if (video.paused) {
       video.play();
       $('.js-playVideo').hide();
    } else {
       video.pause();
    }
 }