const tabbar = document.querySelector('#tabbar')
const listEntries = tabbar.querySelectorAll('li')

listEntries.forEach((entry, entryIndex) => {

    let button = entry.querySelector('button'),
        tweenEntries,
        tweenBackground,
        tweenIcons;

    button.addEventListener('pointerdown', e => {

        tabbar.classList.add('pressed');

        [...listEntries].filter(e => e.classList.contains('active'))[0].classList.remove('active')
        entry.classList.add('active')

        gsap.set(tabbar, {
            '--dot-left': entry.offsetLeft + entry.offsetWidth / 2 + 'px'
        })

        tweenEntries = gsap.to([...listEntries].filter((e, i) => i !== entryIndex), {
            x(i) {
                return i < entryIndex ? 12 : -12
            },
            y: -4,
            duration: .6,
            delay: .2,
            ease: 'power2.out'
        })

        tweenBackground = gsap.to(tabbar, {
            '--background-scale-x': .9,
            '--background-scale-y': 1.1,
            '--dot-y': -116 + 'px',
            duration: .5,
            delay: .2,
            ease: 'power2.out'
        })

        tweenIcons = gsap.to(button.querySelectorAll('svg'), {
            y: -112,
            duration: .55,
            delay: .15,
            ease: 'power2.out'
        })

    })

    button.addEventListener('pointerup', e => {

        tabbar.classList.remove('pressed')

        tweenEntries.pause()
        tweenBackground.pause()
        tweenIcons.pause()

        gsap.to(tabbar, {
            '--background-scale-x': 1,
            '--background-scale-y': 1,
            duration: .8,
            ease: 'elastic.out(1, .4)'
        })

        gsap.to([...listEntries].filter((e, i) => i !== entryIndex), {
            x: 0,
            y: 0,
            duration: .8,
            ease: 'elastic.out(1, .4)'
        })

        gsap.to(entry, {
            '--button-opacity': 0,
            duration: .25
        })

        gsap.to(button.querySelectorAll('svg'), {
            scale: 0,
            duration: .25
        })

        gsap.to(tabbar, {
            '--dot-scale': 0,
            duration: .25,
            onComplete() {
                gsap.set(tabbar, {
                    '--dot-y': 0,
                    '--dot-scale': 1
                })
                gsap.set(button.querySelectorAll('svg'), {
                    y: 0
                })
                gsap.to(entry, {
                    '--button-opacity': 1,
                    duration: .25
                })
                gsap.to(button.querySelectorAll('svg'), {
                    scale: 1,
                    duration: .25
                
                })
            }
        })

    })

});
//-------------------  menu botones -------------------------------//
document.getElementById("btn-inicio").onclick = function(){
    document.getElementById("inicio").style.display = "block";
    document.getElementById("usuario").style.display = "none";
    document.getElementById("devocional").style.display = "none";

};
document.getElementById("btn-devocional").onclick = function(){
    document.getElementById("devocional").style.display = "block";
    document.getElementById("usuario").style.display = "none";
    document.getElementById("inicio").style.display = "none";

}
document.getElementById("btn-user").onclick = function(){

    document.getElementById("usuario").style.display = "block";
    document.getElementById("inicio").style.display = "none";
    document.getElementById("devocional").style.display = "none";

}
//-------------------  menu scroll - display none -------------------------------//
function debug(e){
    let menuPrincipal = document.getElementById("menu");
    if(e.type != "scroll"){
        menuPrincipal.style.display= "block";
    }else{
        menuPrincipal.style.display= "none";
        setTimeout(()=>{
            menuPrincipal.style.display= "block";
        }, 1000);
    }
    
}
