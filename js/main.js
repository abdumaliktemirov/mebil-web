// swipper1

let swiper = new Swiper(".mySwiper", {

    speed: 1000,
    spaceBetween: 32,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    grabCursor: true,
    navigation: {
        nextEl: ".swipper-button-next",
        prevEl: ".swipper-button-prev",
    },
});


// swipper 2
var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1000,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".slide-pagination",
        clickable: true,
    },
});




// swipper 3
var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 4,
    spaceBetween: 30,
    speed: 1000,
    autoplay: {
        delay: 1300,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swipper-button-next",
        prevEl: ".swipper-button-prev",
    },
});

// swipper 4
var swiper4 = new Swiper(".mySwiper4", {
    slidesPerView: 6,
    spaceBetween: 40,
    speed: 1000,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    grabCursor: true,
    navigation: {
        nextEl: ".swipper-button-next",
        prevEl: ".swipper-button-prev",
    },
});