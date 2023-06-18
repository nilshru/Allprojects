const endDate = "12 June 2023 4:28:00 pm"; // you can change it from backend
document.getElementById('end-date').innerHTML = endDate;
const inputs = document.querySelectorAll("input");
var head = document.getElementById("head");

function clock() {
    const end = new Date(endDate);
    const now = new Date();
    var diff = (end - now) / 1000;

    if (diff <= 0) {
        var ml = head.innerHTML = "This site is Live Injoy 🎉";
        window.location.href = "https://nilshru.github.io/nileshresume";//provide link of the website

        // console.log(ml);
    }
    if (diff < 0) return;
    
    // convert into days, hours, minutes, and seconds
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
    
}

// initial call
clock();

/**
 *  1 day = 24 hrs
 *  1 hr = 60 mins
 *  60 min = 3600 sec
 */
setInterval(clock, 1000);
