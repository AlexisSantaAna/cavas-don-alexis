document.querySelector('.menuBtn').addEventListener('click', ()=> {
    document.querySelector('.navMenu').classList.toggle('show')
})

AOS.init({once: true});