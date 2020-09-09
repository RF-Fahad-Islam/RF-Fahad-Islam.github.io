console.log("connected");
let clock = document.getElementById('clock')
setInterval(() => {
    let d = new Date()
    let hTime = d.getHours();
    let mTime = d.getMinutes();
    let sTime = d.getSeconds();
    //set AM or PM 
    if (hTime < 12) {
        boldText = 'AM'
    } else if (hTime === 12) {
        boldText = "PM"
    } else {
        boldText = "PM"
        hTime -= 12;
    }
    //set seconds 00
    if (sTime < 10) {
        sTime = `0${sTime}`;
    }
    //set minutes 00
    if (mTime < 10) {
        mTime = `0${mTime}`;
    }
    let time = `${hTime}:${mTime}:${sTime} ${boldText}`
    clock.innerHTML = time;
}, 1000);