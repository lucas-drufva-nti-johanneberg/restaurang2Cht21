
window.onscroll = function() {    
    var body = document.getElementsByTagName('body')[0]
    var logo = document.getElementById('logo');
    var title = document.getElementById('title');
    var boxB = document.getElementById('B');
    var boxC = document.getElementById('C');
    console.log(window.pageYOffset)
    if(window.pageYOffset < 400){
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

    if (window.pageYOffset > 150 && window.pageYOffset < 500) {
        boxB.style.transform = `translateY(${200 - (((window.pageYOffset - 150) * (200 - 0)) / (500 - 150))}px)`
        console.log("Transformed: " +(((window.pageYOffset - 150) * (400 - 0)) / (400 - 150)) )
        console.log("cool:" +  (400 - (((window.pageYOffset - 150) * (400 - 0)) / (400 - 150))))
        boxC.style.transform = `translateY(${400 - (((window.pageYOffset - 150) * (400 - 0)) / (500 - 150))}px)`
    }
}