var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3, // Quantos slides mostrar por vez
    spaceBetween: 30, // Espaçamento entre slides
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true, // Ativa loop infinito
    autoplay: {
        delay: 3000, // Intervalo entre as mudanças de slide (em milissegundos)
        disableOnInteraction: false, // Mantém o autoplay após interação do usuário
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 1,
        },
    }
});
