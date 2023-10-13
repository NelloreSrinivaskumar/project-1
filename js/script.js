burger = document.querySelector('.burger')
navBar = document.querySelector('.navbar')
navList = document.querySelector('.navlist')
rightNav = document.querySelector('.rightnav')




burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navBar.classList.toggle('h-nav-resp');
})
