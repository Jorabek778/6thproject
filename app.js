window.addEventListener('DOMContentLoaded' , ()=>{
    const title = document.querySelector('.home-content h1')
    const grapes = document.querySelector('.home-content img')
    const nav = document.querySelectorAll('.container-nav a')
    const logo = document.querySelectorAll('nav img')


const TL = gsap.timeline()

TL.from(title,{
    autoAlpha:0,
    y:-50,
    duration:1.3,  
},"-=.2").to(".middle-line" , {
    height:200,
    duration:.8
},"-=.2").to(grapes,{
    y:-50,
    autoAlpha:1,
    duration:.8
},"-=.2")
.from(nav , {
    y:-30,
    autoAlpha:0,
    stagger:.2,
    duration:.8
},"-=.4")
.from(logo , {
    y:-30,
    autoAlpha:0,
    duration:.7,
    stagger:.2
})
})