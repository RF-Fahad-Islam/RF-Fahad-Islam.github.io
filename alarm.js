let ringtones = document.getElementById('inputRingtones');
let demo = document.getElementById('demo');
let test = document.getElementById('stop');
let optDiv = document.getElementById('optDiv');
function check() {
    if (ringtones.value === "sevish") {
        console.log("carSound");
         audio = new Audio("http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3");
    }
    else if(ringtones.value === "engine"){
        audio = new Audio("http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/fx/engine-12.ogg");
    }
    else if(ringtones.value === "background"){
        audio = new Audio("http://codeskulptor-demos.commondatastorage.googleapis.com/descent/background%20music.mp3");
    }
    else if(ringtones.value === "crumb"){
        audio = new Audio("http://codeskulptor-demos.commondatastorage.googleapis.com/descent/Crumble%20Sound.mp3");
    }
    else {
        console.log('else');
    audio = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
    }
}


demo.addEventListener('click', ()=> {
    check();
    audio.play();
})
test.addEventListener('click', ()=> {
   location.reload();
})
// audio.play();
//grab documents contents
let alarm = document.getElementById('alarm');
let alarmBtn = document.getElementById('alarmBtn');
let status = document.getElementById('status');
let stop = document.getElementById('stopBtn');
let message = document.getElementById('message');
let alarmHelp = document.getElementById('alarmHelp');
//click listener for alarm button
alarmBtn.addEventListener('click', setAlarm);

function setAlarm(e) {
    check()
    console.log('This is alarm.js');
    e.preventDefault();
    let alarmTime = new Date(alarm.value);
    let now = new Date();
    console.log(`Setting alarm on ${alarmTime}...`);
    let leftTime = alarmTime - now;
    console.log(`Left time ${leftTime}`);
    if (leftTime >= 0) {
        statusBar(alarmTime);
        setTimeout(() => {
            console.log('Times up');
            message.innerHTML = `<b>Ringing Now! Click stop button to stop the alarm</b>`
            audioPlay();
        }, leftTime);
        alarmHelp.innerHTML = `<b style="color: green;">Alarm successfully set. show details on status bar.</b>`
        message.innerHTML = `<b style="color: green;">Alarm will ringing on ${alarmTime.toLocaleDateString()}<hr>Time: ${alarmTime.toLocaleTimeString()}</b><hr>`
        alarm.classList.remove('is-invalid');
        alarm.classList.add('is-valid');
    } else {
        alarmHelp.innerHTML = `<b style="color: red;">Time is Invalid. Set a future Time.</b>`
        message.innerHTML = `<b style="color: red;">Cannot set  alarm on ${alarmTime.toLocaleDateString()}<hr>Time: ${alarmTime.toLocaleTimeString()}</b><hr>`
        alarm.classList.add('is-invalid');
        alarm.classList.remove('is-valid');
        status.innerHTML = `<b style="color: red; background-color: white;">Error! Time cannot display. {>.._..<} <hr> Reason: You enter a past Time or date`
    }
}
//showing the time on status bar
function statusBar(time) {
    setInterval(() => {
        let now = new Date();
        let leftTime = time - now;
        if (leftTime >= 0) {
            setInterval(() => {
                now = new Date();
                leftTime = time - now;
                let timeState = leftTime / 1000;
                let second = leftTime / 1000;
                let state = 's';
                if (timeState < 0) {
                    timeState = 'NAN'
                }
                if (timeState > 60) {
                    timeState = timeState / 60;
                    timeState = timeState.toFixed(3);
                    state = 'm'
                    if (timeState > 60) {
                        timeState = timeState / 60;
                        timeState = timeState.toFixed(3);
                        state = 'h'
                    }
                    if (timeState > 24) {
                        timeState = timeState / 60;
                        timeState = timeState.toFixed(3);
                        state = 'd'
                    }
                }
                status.innerHTML = `<b>Time left: ${timeState}${state}</b>`
            }, 100);
        } else {
            status.innerHTML = `<b>Time Left: 0s;</b>`
        }

    }, 100)
}

function audioPlay() {
    audio.play();
    audio.loop();
}
stop.addEventListener('click', (e) => {
    e.preventDefault();
    location.reload();
})