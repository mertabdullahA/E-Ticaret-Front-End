let search = document.querySelector('.search-box');
document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
}

window.addEventListener('scroll', function () {
    var navbar = document.getElementById('nav');
    var icon = this.document.getElementById('search-icon');
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = '#fff'; /* Scroll aşağıda, navbar arka plan rengini beyaz yap */
        icon.style.color = '#020102';
        navbar.style.transition = '0.5s';
        navbar.style.boxShadow = '4px 4px 20px rgb(15 54 55 / 10%)';

    } else {
        icon.style.color = '#f6f6f6';

        navbar.style.backgroundColor = 'transparent'; /* Scroll yukarıda, şeffaf arka plan */
        navbar.style.boxShadow = '0px 0px 0px rgb(15 54 55 / 10%)';

    }
});


document.addEventListener('DOMContentLoaded', function () {
    var openPopupButton = document.getElementById('openPopup');
    var popup = document.getElementById('popup');
    var overlay = document.getElementById('overlay');
    var closeButton = document.querySelector('.close-btn');

    openPopupButton.addEventListener('click', function () {
        popup.style.display = 'block';
        overlay.style.display = 'block';
    });

    closeButton.addEventListener('click', function () {
        popup.style.display = 'none';
        overlay.style.display = 'none';
        popupImage.classList.remove('zoomed');

    });

    overlay.addEventListener('click', function () {
        popup.style.display = 'none';
        overlay.style.display = 'none';
        popupImage.classList.remove('zoomed');

    });
    zoomContainer.addEventListener('click', function () {
        popupImage.classList.toggle('zoomed');
    });

    zoomContainer.addEventListener('mousemove', function (e) {
        if (popupImage.classList.contains('zoomed')) {
            var rect = zoomContainer.getBoundingClientRect();
            var x = e.clientX - rect.left;
            var y = e.clientY - rect.top;
            popupImage.style.transformOrigin = `${x}px ${y}px`;
        }
    });

});
