let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let seconds = document.getElementById("seconds");

let set_clock = setInterval(() => {
    let date_now = new Date();

    let hr = date_now.getHours();
    let min = date_now.getMinutes();
    let sec = date_now.getSeconds();

    let calculate_hr = (hr * 30) + (min / 2);
    let claculate_min = (min * 6) + (sec / 10);
    let calculate_sec = sec * 6;

    hour.style.transform = `rotate(${calculate_hr}deg)`;
    minute.style.transform = `rotate(${claculate_min}deg)`;
    seconds.style.transform = `rotate(${calculate_sec}deg)`;
},1000);
