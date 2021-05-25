/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','left-bar-section')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.link-section')

function linkAction(){
    const navMenu = document.getElementById('left-bar-section')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.left-bar-section a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.left-bar-section a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.Intro', {origin:'bottom', delay: 100, interval: 100})
sr.reveal('.home__img', {origin:'bottom', delay: 300})
sr.reveal('.Descript', {origin:'bottom', delay: 200})
sr.reveal('.heading', {origin:'right', delay: 300})
sr.reveal('.hideme', {origin:'bottom', delay: 300})
sr.reveal('.cd-btn', {delay: 500})
sr.reveal('.skills__name', {distance: '20px', delay: 50, interval: 100})
sr.reveal('#img', {origin:'left', delay: 400})

/*SCROLL TIMELINE*/

sr.reveal('#timeline-header-1', {origin:'bottom', delay: 300})
sr.reveal('#timeline-content-1', {origin:'bottom', delay: 300})
sr.reveal('#timeline-header-2', {origin:'bottom', delay: 300})
sr.reveal('#timeline-content-2', {origin:'bottom', delay: 300})
sr.reveal('#timeline-header-3', {origin:'bottom', delay: 300})
sr.reveal('#timeline-content-3', {origin:'bottom', delay: 300})
sr.reveal('#timeline-header-4', {origin:'bottom', delay: 300})
sr.reveal('#timeline-content-4', {origin:'bottom', delay: 300})
sr.reveal('#timeline-header-5', {origin:'bottom', delay: 300})
sr.reveal('#timeline-content-5', {origin:'bottom', delay: 300})
sr.reveal('#timeline-header-6', {origin:'bottom', delay: 300})
sr.reveal('#timeline-content-6', {origin:'bottom', delay: 300})
sr.reveal('.contact__input', {delay: 400})
sr.reveal('.contact__button', {delay: 600})



sr.reveal('.endline', {delay: 500, interval: 100})



