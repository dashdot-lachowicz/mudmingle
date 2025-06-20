/*WORKSHOPS*/
function start() {
    if (timeoutAktiv) return;
    timeoutAktiv = true;
    timeoutVerweis = setTimeout(
       function () { move(bildIndex + 1); }, 500);
 }
 function stop() {
    clearTimeout(timeoutVerweis);
    timeoutAktiv = false;
 }

document.getElementById("idAnfang").addEventListener
("click",function(){move(0);
});

document.getElementById("idRueck").addEventListener
("click",function(){move(bildIndex - 1); 
});

document.getElementById("idVor").addEventListener
("click",function(){move(bildIndex + 1); 
});

document.getElementById("idEnde").addEventListener
("click",function(){move(bild.length - 1); 
});

document.getElementById("idStart").addEventListener
("click", start);

document.getElementById("idStop").addEventListener
("click", stop);
