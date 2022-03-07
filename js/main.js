document.getElementById('player').addEventListener("mouseover",sumarPuntos);
puntos= 0;
tiempo = 60;
necesarios = 60;


function sumarPuntos() {
    puntos++;
    document.getElementById("puntos").innerHTML = "PUNTOS:<b>" + puntos + "/"+ necesarios + "  </b>";
    randNum = Math.round(Math.random()*500);
    randNum2 = Math.round(Math.random()*500);
    document.getElementById("player").style.marginTop = randNum + "px"; 
    document.getElementById("player").style.marginLeft = randNum2 + "px"; 
    if (puntos == 60) {
        alert("Ganaste el game");
    }
}

function restarTiempo() {
        tiempo--;
 
       document.getElementById("tiempo").innerHTML = " &nbsp;&nbsp;&nbsp; TIEMPO:"+ tiempo;
        if (tiempo == 0) {
            alert("Perdiste");
            tiempo = 0;
            puntos = 0;
        }



}

setInterval(restarTiempo,1000);