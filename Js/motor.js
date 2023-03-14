var onoff = "apagada";
var sonidoLicuadora = document.getElementById("blender-sound");
var sonidoBotton = document.getElementById("blender-button-sound");
var licuadora = document.getElementById("blender");
function controlarLicuadora(){
    if (onoff == "apagada"){
        onoff = "encendida";
        hacerSonidoLicuadora();
        licuadora.classList.add("active");
    }
    else{
        onoff = "apagada";
        hacerSonidoLicuadora();
        licuadora.classList.remove("active");
    }
}

function hacerSonidoLicuadora(){
    if(sonidoLicuadora.paused){
        sonidoBotton.play();
        sonidoLicuadora.play();
    } else{
        sonidoBotton.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}