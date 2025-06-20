const bild = ["img/slideshow/sglasur.jpg","img/slideshow/svasee.jpg",
   "img/slideshow/sfrau.jpg", "img/slideshow/steller.jpg", "img/slideshow/skind.jpg", "img/slideshow/stools.jpg"];

let bildIndex = 0,
   timeoutVerweis,
   timeoutAktiv = false;

function move(zahl) {
   bildIndex = zahl;
   if (bildIndex >= bild.length)
      bildIndex = 0;
   else if (bildIndex < 0)
      bildIndex = bild.length - 1;

   document.getElementById("idBild").src = bild[bildIndex];

   if (timeoutAktiv)
      timeoutVerweis = setTimeout(
         function () { move(bildIndex + 1); }, 2000);
}

