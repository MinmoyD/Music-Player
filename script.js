let controller = document.querySelector(".controler")
let song = document.querySelector(".song")
let player = document.querySelector(".fa-play")




/*another way to get timeslaps


song.onloadedmetadata = function(){


    controller.max = song.duration;
    controller.value = song.currentTime;


}


*/





// Assuming you have a 'song' and 'controller' object defined elsewhere in your code

if (song.play()) {
    setInterval(() => {
        // console.log(song.duration, song.currentTime)
        controller.value = song.currentTime
    }, 500);
}


function playpasue() {
    console.log(song.duration, song.currentTime)


    controller.max = song.duration
    controller.value = song.currentTime

    
    if (player.classList.contains("fa-pause")) {
        song.pause()
        player.classList.remove("fa-pause")
        player.classList.add("fa-play")
    }
    else {
        song.play()
        player.classList.remove("fa-play")
        player.classList.add("fa-pause")

    }
}

controller.onchange = function () {

    song.play()
    song.currentTime = controller.value
    player.classList.remove("fa-play")
    player.classList.add("fa-pause")
}