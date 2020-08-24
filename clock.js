setInterval(() => {
    date = new Date();
    //get hours, minutes, seconds
    hTime = date.getHours();
    mTime = date.getMinutes();
    sTime = date.getSeconds();
    //calculate rotation for every hour, minute and second
    hRotation = 30*hTime+mTime/2;
    mRotation = 6*mTime;
    sRotation = 6*sTime;
    //apply the rotation
    hour.style.transform =`rotate(${hRotation}deg)`;
    minute.style.transform =`rotate(${mRotation}deg)`;
    second.style.transform =`rotate(${sRotation}deg)`;
}, 1000);

function displayTime() {
    document.getElementById('time').innerHTML = new Date();
}
setInterval(displayTime, 1000);
