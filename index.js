console.log("hi");
var touchsurface = document.getElementById('touchsurface'),
startX,
startY,
distX,
distY,
threshold = 150, //required min distance traveled to be considered swipe
allowedTime = 300, // maximum time allowed to travel that distance
elapsedTime,
startTime

function handleswipe(isrightswipe){
if (isrightswipe=='left')
    touchsurface.innerHTML = 'Congrats, you\'ve made a <span style="color:red">right swipe!</span>'
else if(swiperightBol=='right'){
    touchsurface.innerHTML = 'Condition for right swipe met';
}
}

document.addEventListener('touchstart', function(e){
touchsurface.innerHTML = ''
var touchobj = e.changedTouches[0]
distX = 0
startX = touchobj.pageX
startY = touchobj.pageY
startTime = new Date().getTime() // record time when finger first makes contact with surface
e.preventDefault()
}, false)

document.addEventListener('touchmove', function(e){
e.preventDefault() // prevent scrolling when inside DIV
}, false)

document.addEventListener('touchend', function(e){
var touchobj = e.changedTouches[0]
distX = touchobj.pageX - startX // get total dist traveled by finger while in contact with surface
distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
elapsedTime = new Date().getTime() - startTime // get time elapsed
// check that elapsed time is within specified, horizontal dist traveled >= threshold, and vertical dist traveled <= 100
if (elapsedTime <= allowedTime){ // first condition for awipe met
    if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
        swiperightBol = (distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
    }
}
handleswipe(swiperightBol)
e.preventDefault()
}, false)

