let menuIcon = document.querySelector('#menu-icon');
let head1 = document.querySelector('.head1');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    head1.classList.toggle('active');
}