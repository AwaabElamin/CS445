
let start, textArea, textAreaValue, choosen, size;
let val = null, stop = false;
window.onload = function () {
    start = document.getElementById("start");
    textArea = document.getElementById("text-area");
    textAreaValue = "";
    choosen = document.getElementById("animation");
    size = document.getElementById("fontsize");
    stop = document.getElementById("stop");
    start.onclick = function () {
        textAreaValue = textArea.value
        start.disabled = true;
        stop.disabled = false;
        changeAnimation();
    }
    stop.onclick = function () {
        if (val != null) {
            clearInterval(val);
            textArea.value = textAreaValue ;
        } else {
            console.log(val);
            textArea.value = null;
            start.disabled = false;
            stop.disabled = true;
            stop = true;
            changeAnimation();
        }
    }
    choosen.onchange = function () {
        choosen = document.getElementById("animation");
    }
    size.onchange = changeAnimation;
}
function changeAnimation() {
    size = document.getElementById("fontsize").value;
    choosen = document.getElementById("animation");
    let animation, caseValue;
    switch (choosen.value) {
        case "Blank":
            textArea.value = null;
            animation = new Array();
            caseValue = "Blank";
            break;
        case "Exercise":
            animation = EXERCISE.split("=====\n");
            caseValue = "Exercise";            
            break;
        case "Juggler":
            animation = JUGGLER.split("=====\n");
            caseValue = "Juggler";
            break;
        case "Bike":
            animation = BIKE.split("=====\n");
            caseValue = "Bike";
            break;
        case "Dive":
            animation = DIVE.split("=====\n");
            caseValue = "Dive";
            break;
        default:
            console.log(choosen.value);
    }
    doInterval(animation, caseValue, size);
}
function doInterval(animation, caseValue, size, stop = false) {
    let i = 0;
    let sizeDigit = "12pt";
    switch (size) {
        case "Tiny":
            sizeDigit = "7pt";
            break;
        case "Small":
            sizeDigit = "10pt";
            break;
        case "Medium":
            sizeDigit = "12pt";
            break;
        case "Large":
            sizeDigit = "16pt";
            break;
        case "Extra Large":
            sizeDigit = "24pt";
            break;
        case "XXL":
            sizeDigit = "32pt";
            break;
        default:
            sizeDigit = "12pt";
            break;
    }
    const val = setInterval(function () {
        textArea.style.fontSize = sizeDigit;
        if (stop != false) {
            clearInterval(val);
        } else {
            if (i >= animation.length && choosen.value !== caseValue) {
                clearInterval(val);
                textArea.value = textAreaValue;
            } else if (i >= animation.length) {
                i = 0;
            } else {
                textArea.value = animation[i];
                ++i;
            }
        }
        
    }, 1000);
}
