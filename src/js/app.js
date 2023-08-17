'use strict';

/**
 * =================================================================
 * TODO: Implement function here
 * =================================================================
 */

(function menuMobile() {
  const classActive = 'active';
  const menuButton = document.querySelector('.menu-burger');
  const navigation = document.querySelector('.header-nav');
  menuButton.addEventListener('click', function () {
    navigation.classList.toggle(classActive);
  });

  const navigationItems = navigation.querySelectorAll('a');
  navigationItems.forEach(function (item) {
    item.addEventListener('click', function () {
      navigation.classList.toggle(classActive);
    });
  });
})();
