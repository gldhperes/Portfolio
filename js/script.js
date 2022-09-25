// let light = document.querySelector('.light')
let body = document.querySelector('body')
let projects = document.querySelector('.buttons')

// light.onclick = function(){
//     body.classList.toggle('active')
// }

// projects.onclick = function(){
//     document.querySelector('#projects').classList.toggle('more')
// }

const inicial = document.querySelector('h3')
function typeWriter(element){
    const textArray = element.innerHTML.split('')
    element.innerHTML = ''
    setTimeout(function(){
        textArray.forEach((letra, i) => { //Para cada elemento um index
            setTimeout(function(){
                element.innerHTML += letra
            }, 75 * i)
        })
    }, 2000)
}   
typeWriter(inicial)

window.scrl = ScrollReveal({ reset:true});
ScrollReveal({ distance: '20px' });
//ScrollReveal de #home
scrl.reveal('.apresentation', {duration: 3000});
scrl.reveal('.buttonLinke', {duration: 9000})
scrl.reveal('.buttonGitHub', {duration: 9000})
scrl.reveal('.ilustracao', {duration: 3000})
//ScrollReveal de #about
scrl.reveal('.programacao', {duration : 4000, origin: 'right'})
scrl.reveal('.contentAbout', {duration : 2000, origin: 'left'})
//ScrollReveal de #projects
scrl.reveal('.contentProjects', {duration: 2000})
//ScrollReval de footer
scrl.reveal('.contentFooter', {duration: 1000})