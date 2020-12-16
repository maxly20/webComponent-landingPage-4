'use strict';

window.onload = function () {
  setTimeout(logo, 500);
  setTimeout(images, 500);
  setTimeout(menu1, 500);
  setTimeout(menu2, 500);
  setTimeout(media, 500);
  setTimeout(slider, 500);
  setTimeout(content, 500);
  setTimeout(nav, 500);
};

function logo() {
  const logo = document.querySelector('.logo h1');
  logo.style.opacity = '1';
}
function images() {
  const img = document.querySelector('.img');
  img.style.opacity = '1';
  link.style.transform = 'translateX(-960px)';
}
function menu1() {
  const links = document.querySelectorAll('.menu1 li');
  links.forEach((link) => {
    link.style.opacity = '1';
    link.style.transform = 'translate(0)';
  });
}
function menu2() {
  const links = document.querySelectorAll('.menu2 li');
  links.forEach((link) => {
    link.style.opacity = '1';
    link.style.transform = 'translate(0)';
  });
}
function media() {
  const medias = document.querySelectorAll('.media li');
  medias.forEach((media) => {
    media.style.opacity = '1';
    media.style.transform = 'translateY(0)';
  });
}
function slider() {
  const sliders = document.querySelectorAll('.slider li');
  sliders.forEach((slider) => {
    slider.style.opacity = '1';
    slider.style.transform = 'translateY(0)';
  });
}
function content() {
  const h1 = document.querySelector('.content h1');
  h1.style.opacity = '1';
  h1.style.transform = 'translateY(0)';
  const p = document.querySelector('.content p');
  p.style.opacity = '1';
  p.style.transform = 'translateY(0)';
  const btn = document.querySelector('.content button');
  btn.style.opacity = '1';
  btn.style.transform = 'translateY(0)';
}
function nav() {
  const nav = document.querySelector('.navigation');
  nav.style.opacity = '1';
  nav.style.transform = 'translateY(0)';
}
