// Фильтр на мобильных устройствах
const sidebarBurgerBtn = document.querySelector('.sidebar__btn');
const subMenu = document.querySelector('.sidebar__submenu');
const sidebarIstorisBtn = document.querySelector('.sidebar__button');
const istorisMenu = document.querySelector('.sidebar__menu--storis');

// Клик по кнопке для показа фильтра

sidebarBurgerBtn.onclick = function () {
  subMenu.classList.toggle('open');
};

sidebarIstorisBtn.onclick = function () {
  istorisMenu.classList.toggle('open');
};
