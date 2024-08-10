document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    const menuItems = document.querySelectorAll('.sidebar__list a');
    console.log(currentPath);

    menuItems.forEach(function(item) {
        let currentHref = "/" + item.getAttribute('href') ;
        console.log(currentHref);
        if (currentHref === currentPath) {
            item.classList.add('active');
        }
    });
});
