
//give a message after timer (well done)
startButton = document.querySelector("#starter")

oceanbutton = document.querySelector("#ocean")
mountainbutton = document.querySelector("#mountains")
spacebutton = document.querySelector("#space")

ambientbutton = document.querySelector("#ambientbutton")
pianobutton = document.querySelector("#pianobutton")
relaxingbutton = document.querySelector("#relaxingbutton")

ambient = document.querySelector("#ambient")
piano = document.querySelector("#piano")
relaxing = document.querySelector("#relaxing")
ding = document.querySelector("#ding")
body = document.querySelector("#body")

clockDiv = document.querySelector("#app")

video = document.querySelector("#video")




startButton.addEventListener("click", function() {
startTimer();
startButton.disabled = true
})



oceanbutton.addEventListener("click", function() {
    body.classList.remove("mountains");
    body.classList.toggle("ocean");
    /* clockDiv.classList.toggle("appOutline"); */
    body.classList.remove("space")
})

mountainbutton.addEventListener("click", function() {
    body.classList.remove("ocean");
    body.classList.toggle("mountains");
   /*  clockDiv.classList.toggle("appOutline"); */
    body.classList.remove("space")
})
spacebutton.addEventListener("click", function() {
    body.classList.remove("ocean");
    body.classList.remove("mountains");
   /*  clockDiv.classList.toggle("appOutline"); */
    body.classList.toggle("space")
})

function togglePlay(aud) {
    if (aud.paused) {
        aud.play();
    }
    else {
        aud.pause();
    }
};

ambientbutton.addEventListener("click", function() {
    togglePlay(ambient);
    if (piano.play || relaxing.play){
        piano.pause();
        relaxing.pause();
    }
}) 

pianobutton.addEventListener("click", function() {
    togglePlay(piano);
    if(ambient.play || relaxing.play){
        ambient.pause();
        relaxing.pause();
    }
})

relaxingbutton.addEventListener("click", function() {
    togglePlay(relaxing);
    if(ambient.play || piano.play) {
        ambient.pause();
        piano.pause();
    }
})
//make an input to set timer
//put actions on dropdowns
//find a way to make the ding play
function dingSound() {
ding.play();
}
