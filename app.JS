const menu = document.querySelector('#mobile-menu');
const menulinks = document.querySelectorAll('.navbar_menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menulinks.forEach(links =>{
    links.classList.toggle('active');
    });
});