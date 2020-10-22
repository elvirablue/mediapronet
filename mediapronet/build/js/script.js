document.addEventListener("DOMContentLoaded",() => {
  let buttonToggleMenu = document.querySelector('.menu [data-button-toggle-menu]');
  let menu = document.querySelector('.menu');
  let navigation = document.querySelector('.menu .menu__navigation');

  function closeMenu() {
    menu.classList.remove('menu--opened');
  }

  document.addEventListener('click', (event) => {
    const menuLink = 'navigation__item-link';
    if (
      !navigation.contains(event.target) &&
      !buttonToggleMenu.contains(event.target) ||
      event.target.className === menuLink) {
      closeMenu();
    }
  });

  buttonToggleMenu.addEventListener("click" , () => {
    menu.classList.toggle('menu--opened');
  });

  let buttonToggleMapPanel = document.querySelector('.map-panel [data-button-toggle-map-panel]');
  let mapPanel = document.querySelector('.map-panel');

  buttonToggleMapPanel.addEventListener("click" , () => {
    mapPanel.classList.toggle('map-panel--opened');
  });

  let tabsDescription = document.querySelectorAll('[data-tab-button]');
  let contentDescription = document.querySelectorAll('[data-tab-content]');
  let activeTabNumber = '1';

  function setActiveTabDescription(number) {
    let tab = [...tabsDescription].find(item => item.dataset.callContent === number);
    let content = [...contentDescription].find(item => item.dataset.tabContent === number);
    if (tab && content) {
      tab.parentElement.classList.add('swiper-tabs__item--active');
      content.classList.add('description__content--active', 'animate__animated', 'animate__fadeIn');
    } else {
      console.error('Error toggle tab-description');
    }
  }

  function clearActiveTabDescription() {
    [...tabsDescription].forEach((button) => {
      button.parentElement.classList.remove('swiper-tabs__item--active');
    });
    [...contentDescription].forEach((button) => {
      button.classList.remove('description__content--active', 'animate__animated', 'animate__fadeIn');
    });
  }

  [...tabsDescription].forEach((button) => {
    button.addEventListener('click', () => {
      activeTabNumber = button.dataset.callContent;
      clearActiveTabDescription();
      setActiveTabDescription(activeTabNumber);
    });
  });
});
