let counter = 1;

setInterval(function() {
    document.getElementById('slide' + counter).checked = true;
    counter ++;

    if( counter > 5){
        counter = 1;
    }
}, 3000);

function play() {
    var audio = document.getElementById("audio");
    audio.play();
  }
function pause() {
    var audio = document.getElementById("audio");
    audio.pause();
  }

 