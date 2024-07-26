document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    const menuItems = document.querySelectorAll('.sidebar__list a');

    menuItems.forEach(function(item) {
        let currentHref = "/" + item.getAttribute('href') ;
        if (currentHref === currentPath) {
            item.classList.add('active');
        }
    });
});
