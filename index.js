let btn__burger = document.querySelector('.btn__burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__link')
btn__burger.addEventListener('click',
function() {
btn__burger.classList.toggle('btn__burger--active');
menu.classList.toggle('header__nav--active');
document.body.classList.toggle('stop-scroll')
})

menuLinks.forEach(function(el){
    el.addEventListener('click',function(){
        btn__burger.classList.remove('btn__burger--active');
        menu.classList.remove('header__nav--active');
        document.body.classList.remove('stop-scroll')

    })
} )


