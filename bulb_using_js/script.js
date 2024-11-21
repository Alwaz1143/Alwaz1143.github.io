
document.addEventListener("DOMContentLoaded", function(){
    let toggle = document.querySelector(".switch");
    let warning = document.querySelector(".warning");
    let audio = new Audio("bijlee_ka_bill.mp3");
    function showWarning(){
        warning.style.visibility = "visible";
    }
    function hideWarning(){
        warning.style.visibility = "hidden";
    }
    toggle.addEventListener("mouseover", showWarning);
    toggle.addEventListener("mouseout", hideWarning);
    toggle.addEventListener("click",function(){
        if (document.getElementById('bulb').src.includes("off.png")){
            document.querySelector('#bulb').src = "on.png";
            document.querySelector('#bijlikabill').src = "bijli ka bill.jpeg";
            toggle.src = "switch_on.png";
            audio.play();
        }
        else if (document.getElementById('bulb').src.includes("on.png")){
            document.querySelector('#bijlikabill').src = "";
            document.querySelector('#bulb').src = "off.png";
            toggle.src = "switch_off.png";
        }
    })

})
