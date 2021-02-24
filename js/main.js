const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click',() => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu');

const navLink = document.querySelectorAll('.nav__link');


function linkAction(){
    //active link
    navLink.forEach((link) => {
        link.classList.remove('active');
        this.classList.add('active');
    })

    //remove menu mobile

    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

navLink.forEach(link => link.addEventListener('click',linkAction));
