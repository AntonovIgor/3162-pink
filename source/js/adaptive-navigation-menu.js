"use strict";

(function() {

    var MAIN_NAV_CLASS = 'main-nav';
    var MAIN_NAV_TOGGLE_CLASS = 'main-nav__toggle';
    var MAIN_NAV_ITEM_CLASS = 'main-nav__item';
    var MAIN_NAV_LIST_CLASS = 'main-nav__list';
    var MAIN_NAV_LIST_NOJS_CLASS = 'main-nav__list--nojs';
    var MAIN_NAV_ITEM_NOJS_CLASS = 'main-nav__item--nojs'
    var MAIN_NAV_NOJS_CLASS = 'main-nav--nojs';
    var MAIN_NAV_TOGGLE_NOJS_CLASS = 'main-nav__toggle--nojs';
    var MAIN_NAV_OPEN_CLASS = 'main-nav--open';
    var MAIN_NAV_TOGGLE_OPEN_CLASS = 'main-nav__toggle--open';
    var MAIN_NAV_ITEM_LOGO_OPEN_CLASS = 'main-nav__item--logo-open';

    var mainNavigationMenu = document.querySelector('.' + MAIN_NAV_CLASS);
    var mainNavigationMenuToggleBtn = document.querySelector('.' + MAIN_NAV_TOGGLE_CLASS);
    var mainNavigationMenuItem = mainNavigationMenu.querySelector('.' + MAIN_NAV_ITEM_CLASS);
    var mainNavigationMenuList = mainNavigationMenu.querySelector('.' + MAIN_NAV_LIST_CLASS);

    mainNavigationMenu.classList.remove(MAIN_NAV_NOJS_CLASS);
    mainNavigationMenuToggleBtn.classList.remove(MAIN_NAV_TOGGLE_NOJS_CLASS);
    mainNavigationMenuList.classList.remove(MAIN_NAV_LIST_NOJS_CLASS);
    mainNavigationMenuItem.classList.remove(MAIN_NAV_ITEM_NOJS_CLASS);

    mainNavigationMenuToggleBtn.addEventListener("click", function(evt) {
        evt.preventDefault();

        if (mainNavigationMenu.classList.contains(MAIN_NAV_OPEN_CLASS)) {
            mainNavigationMenu.classList.remove(MAIN_NAV_OPEN_CLASS);
            mainNavigationMenuToggleBtn.classList.remove(MAIN_NAV_TOGGLE_OPEN_CLASS);
            mainNavigationMenuItem.classList.add(MAIN_NAV_ITEM_LOGO_OPEN_CLASS);
            return;
        }
        
        mainNavigationMenuItem.classList.remove(MAIN_NAV_ITEM_LOGO_OPEN_CLASS);
        mainNavigationMenu.classList.add(MAIN_NAV_OPEN_CLASS);
        mainNavigationMenuToggleBtn.classList.add(MAIN_NAV_TOGGLE_OPEN_CLASS);
        
    });

})();