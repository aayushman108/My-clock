function myFunction(){
    const time = new Date();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    const year = time.getFullYear();
    const month = time.getMonth();
    const date = time.getDate();
    const secondInDeg= second*360/60;
    const minuteInDeg= (minute+ second/60)*360/60 ;
    const hourInDeg= (hour+ minute/60 +second/3600)*360/12;
    if(hour>12){
        document.querySelector("#hours").innerHTML=hour-12;
        document.querySelector("#Dn").innerHTML=" PM";
    }
    else{
        document.querySelector("#hours").innerHTML=hour;
        document.querySelector("#Dn").innerHTML=" AM";
    }
    document.querySelector("#minutes").innerHTML=minute;
    document.querySelector("#seconds").innerHTML=second;
    document.querySelector("#year").innerHTML=year;
    document.querySelector("#month").innerHTML=month+1;
    document.querySelector("#date").innerHTML=date;
    document.querySelector("#hour-hand").style.transform=`rotate(${hourInDeg}deg)`;
    document.querySelector("#minute-hand").style.transform=  `rotate(${minuteInDeg}deg)`;
    document.querySelector("#second-hand").style.transform= `rotate(${secondInDeg}deg)`;
}
setInterval(myFunction, 1000);