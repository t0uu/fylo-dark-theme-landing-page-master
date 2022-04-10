const form = document.getElementById('form');
const email = document.getElementById('email')
const span = document.querySelector('form span')
console.log(span);
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
form.addEventListener('submit', e => {
    e.preventDefault()
    let mail = email.value.trim()
    if(mail === ""){
        span.innerText = "email can't be empty"
    }else if(!emailRegex.test(mail)){
        span.innerText = "Please enter a valida email address"
    }else{
        span.innerText = 'Correct!'
        span.classList.add('success')
    }
})















// Animations ScrollReveal
ScrollReveal().reveal('.MainBox .NavList', {delay: 800, easing: 'ease-in'})
ScrollReveal().reveal('.ContImg img', {delay: 1000, easing: 'ease-in'})
ScrollReveal().reveal('.SectionOne h1', {delay: 1500, easing: 'ease-out'})
ScrollReveal().reveal('.SectionOne .Container-Box p', {delay: 1500, easing: 'ease-out'})
ScrollReveal().reveal('.SectionOne .StartBtn', {delay: 1500, easing: 'ease-out'})
ScrollReveal().reveal('.SectionOne .Container-Box h2', {delay: 500, easing: 'ease'})
ScrollReveal().reveal('.SectionOne .Container-Box img', {delay: 500, easing: 'ease'})
ScrollReveal().reveal('.SectionTwo .ContImgProduc .ProductiveImg ', {delay: 600, easing: 'ease'})
ScrollReveal().reveal('.SectionTwo h2', {delay: 700, easing: 'ease-in-out'})
ScrollReveal().reveal('.SectionTwo p', {delay: 900, easing: 'ease-in-out'})
ScrollReveal().reveal('.SectionTwo .ContainerBtn', {delay: 1000, easing: 'ease-in-out'})
ScrollReveal().reveal('.SectionTwo .ContainerArticle', {delay: 700, easing:'ease'})
ScrollReveal().reveal('form h2',{delay: 600, easing: 'ease-in'})
ScrollReveal().reveal('form label',{delay: 800,easing: 'ease-in-out'})
ScrollReveal().reveal('form .Submit',{delay: 800,easing: 'ease-in-out'})



