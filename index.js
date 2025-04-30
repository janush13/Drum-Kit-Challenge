var numberOfButtons = document.querySelectorAll(".drum").length;
var currentAudio = null;

for(var i=0;i<numberOfButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        
        var buttonInnerHTML = this.innerHTML;
        buttonAnimation(buttonInnerHTML);

        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime=0;
        }
        switch (buttonInnerHTML) {
            case "T":
                currentAudio = new Audio("sound/Aadiye Kolluthe.mp3");
                break;

            case "H":
                currentAudio = new Audio("sound/Annal Mele.mp3");
                break;

            case "E":
                currentAudio = new Audio("sound/Ava Enna.mp3");
                break;

            case "R":
                currentAudio = new Audio("sound/Mundhinam.mp3");
                break;

            case "A":
                currentAudio = new Audio("sound/Nenjukkul Peidhidum.mp3");
                break;

            case "P":
                currentAudio = new Audio("sound/Oh Shanthi Shanthi.mp3");
                break;

            case "Y":
                currentAudio = new Audio("sound/Yethi Yethi Yeththi.mp3");
                break;
        
            default:
                console.log(buttonInnerHTML); 
        }
        currentAudio.play();
    });
}

document.addEventListener("keypress",function(event) {

    makeSound(event.key.toUpperCase());
    buttonAnimation(event.key.toUpperCase())

});

function makeSound(key) {

    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime=0;
    }
    switch (key) {
        case "T":
            currentAudio = new Audio("sound/Aadiye Kolluthe.mp3");
            break;

        case "H":
            currentAudio = new Audio("sound/Annal Mele.mp3");
            break;

        case "E":
            currentAudio = new Audio("sound/Ava Enna.mp3");
            break;

        case "R":
            currentAudio = new Audio("sound/Mundhinam.mp3");
            break;

        case "A":
            currentAudio = new Audio("sound/Nenjukkul Peidhidum.mp3");
            break;

        case "P":
            currentAudio = new Audio("sound/Oh Shanthi Shanthi.mp3");
            break;

        case "Y":
            currentAudio = new Audio("sound/Yethi Yethi Yeththi.mp3");
            break;
    
        default:
            console.log(key); 
    }
    currentAudio.play();
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
       activeButton.classList.remove("pressed");
    }, 100);
}