var buttonStatus = true;
var button = document.getElementById("test");
var text = document.getElementById("obj");

button.onclick = function (){
    if (buttonStatus){
        buttonStatus = false;
        text.style.display = "none";
        button.innerHTML = "show text";
    }
    else {
        buttonStatus = true;
        text.style.display = "inline";
        button.innerHTML = "hide text";
    }
};


