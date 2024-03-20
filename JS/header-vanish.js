var lastScrollTop = 0;

document.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    var header = document.querySelector('.header-container');
    var title = document.querySelector('.titulo');

    if (scrollPosition > lastScrollTop && scrollPosition > 0) {
        // Scrolling hacia abajo
        title.style.color = '#f7f7f75f';
        header.style.backgroundColor = '#3b3b3b94'; // Transparente al bajar
        header.style.borderBottomColor = '#b2941b58';
    } else {
        // Scrolling hacia arriba o al principio de la página
        if (scrollPosition === 0) {
            // Estás en la parte superior de la página
            header.style.backgroundColor = '#1c4480'; // Restaura el color original
            title.style.color = '#ffffff'; // Restaura el color del título
            header.style.borderBottomColor = '#b2941b58';
        } else {
            // Scrolling hacia arriba
            var opacity = Math.min(1, 1.0 + scrollPosition / 500); // Limita la opacidad a un máximo de 1
            header.style.backgroundColor = '#3b3b3b94, ' + opacity + ')';
        }
    }

    lastScrollTop = scrollPosition;
});

