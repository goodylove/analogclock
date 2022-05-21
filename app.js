
let hours = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".seconds");
let deg = 6;

setInterval(() => {

         let currentDay = new Date();
         let currentHour = currentDay.getHours()*30
         console.log(currentHour);
        let currentMinutes =currentDay.getMinutes()*deg;
        let currentSeconds = currentDay.getSeconds() *deg;
        
        hours.style.transform = `rotateZ(${currentHour + (currentMinutes/12)}deg)`;
        minute.style.transform = `rotateZ(${currentMinutes}deg)`;
        second.style.transform = `rotateZ(${currentSeconds}deg)`;
        console.log(currentHour + (currentMinutes)/12*deg)
        
        },1000);
        
    
    

        
        

            
        
        
    //     let hours = document.querySelector(".hour");
    //     let minute = document.querySelector(".minute");
    //     let second = document.querySelector(".seconds");
    //     let deg = 6;
    //     function getTime() {
        
    //         let today = new Date;
    //         let userHour = today.getHours()
    //         let minDeg = 0
    //         let hourDeg = userHour * 30;
            
    //         console.log(hourDeg)
    //         console.log(minDeg);
    //     }
    // setInterval(() => {
    //     let day = new Date()
    //     let hh = day.getHours() *30
    //     let min = day.getMinutes()*deg
    //     let ss = day.getSeconds()*deg
    //     hours.style.transform = `rotate(${hh + min / 12} deg)`
    //     second.style.transform = `rotate(${ss}deg)`

        
    // }, 1000);
    // setInterval(() => {
    //     minDeg = minDeg  + 6
    //     console.log(minDeg);
    //     if (minDeg >360) {
    //         minDeg = 0
    //     }
    //     minute.style.transform = `rotateZ(${minDeg}deg)`;

    // }, 60000);

    // setInterval(() => {
    //     hourDeg = hourDeg + 1
    //     console.log(hourDeg)
    //     if (hourDeg > 360) {
    //         hourDeg = 0
    //     }
    //     minute.style.transform = `rotate(${hourDeg}deg)`
        
    // }, 60000);