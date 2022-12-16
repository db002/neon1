const nav = document.querySelector('#nav');
const menu = document.querySelector('#menu');
const menuimg = document.querySelector('#menuimg');

menu.onclick = () => {
    if (nav.classList.toggle('open')) {
        menuimg.src = "images/close.png";
    }
    else {
        menuimg.src = "images/menu.png";
    }
}