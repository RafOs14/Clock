

function startClock(){

    let today = new Date();
    let hr = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? hr - 12 : hr;

    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);

    document.getElementById("hour").innerHTML = hr;
    document.getElementById("minute").innerHTML = min;
    document.getElementById("second").innerHTML = sec;
    document.getElementById("ampm").innerHTML = ap;

    let time = setTimeout(function (){
        startClock();
    }, 500);
}

function checkTime(i){
    if(i < 10){
        i = "0" + i;
    }
    return i;
}
