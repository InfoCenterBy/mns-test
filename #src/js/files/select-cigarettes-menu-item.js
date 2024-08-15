document.addEventListener("DOMContentLoaded", function() {
  const currentPage = window.location.pathname;
  const menuItems = document.querySelectorAll('.cigarettes__menu-item a');
  console.log(menuItems)
  menuItems.forEach(item => {
      const href = "/" + item.getAttribute('href');
      if (href.includes(currentPage)) {
          item.classList.add('active');
      }
  });
});