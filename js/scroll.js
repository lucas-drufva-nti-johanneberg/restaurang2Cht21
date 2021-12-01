
window.onscroll = function() {    
    var body = document.getElementsByTagName('body')[0]
    var logo = document.getElementById('logo');
    var title = document.getElementById('title');
    if(window.pageYOffset < 200){
        title.style.transform = `translateY(${window.pageYOffset}px)`
    }
    var subtitle = document.getElementById('subtitle');
    subtitle.style.opacity = `${100-window.pageYOffset}%`
    if ( window.pageYOffset > 100 ) {
        logo.style.transform = `translateY(${window.pageYOffset-145}px)`
        
        //logo.style.
        console.log("Scrollat långt")
    }
    if (window.pageYOffset > 100 && window.pageYOffset < 150){
        logo.style.filter = `blur(${(window.pageYOffset-100)/5}px)`
        logo.style.opacity = `${100-((window.pageYOffset-100)/2)}%`
    }
}