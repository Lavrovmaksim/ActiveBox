const mobileMenu = document.querySelectorAll('.header .header__container button')

mobileMenu[0].onclick = function () {
    const menu = document.querySelectorAll('.header .menu')
    const myMenu = menu [0]
    if (myMenu.classList.contains('menu-active')) {
        myMenu.classList.remove('menu-active')
        myMenu.classList.add('menu-inactive')
    } else {
        myMenu.classList.add('menu-active')
        myMenu.classList.remove('menu-inactive')
    }
}