let audio = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
console.log('This is alarm.js');
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
    e.preventDefault();
    let alarmTime = new Date(alarm.value);
    let now = new Date();
    alarmHelp.innerHTML = `<b style="color: green;">Setting alarm on ${alarmTime}</b>`
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
        message.innerHTML = `<b style="color: green;">Alarm will ringing on ${alarmTime}</b>`
        alarm.classList.remove('is-invalid');
        alarm.classList.add('is-valid');
    } else {
        alarmHelp.innerHTML = `<b style="color: red;">Time is Invalid. Set a future Time.</b>`
        message.innerHTML = `<b style="color: red;">Cannot set alarm on.${alarmTime}</b>`
        alarm.classList.add('is-invalid');
        alarm.classList.remove('is-valid');
        status.innerHTML = `<b style="color: red; background-color: white;">Error! Time cannot display. {>.._..<}`
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
                let second = leftTime / 1000;
                status.innerHTML = `<b>Time left: ${second}s</b>`
            }, 1000);
        } else {
            status.innerHTML = `<b>Time Left: 0s;</b>`
        }

    }, 1000)
}

function audioPlay() {
    audio.play();
}
stop.addEventListener('click', (e) => {
    e.preventDefault();
    location.reload();
})