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
})();
