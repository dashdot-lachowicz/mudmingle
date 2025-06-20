let burger = document.querySelector('#burger');
    
let menue = document.querySelector('#menue');

function menu(){
        menue.classList.toggle('einblenden');
        this.classList.toggle('kreuz');
    }
burger.addEventListener("click",menu);

/*SHOPS*/
"use strict";

jQuery(document).ready(function(){
    function removeOverlay(){
        $("#overlay, #overlay-container").remove();
    }

    $(".gallery-item").click(function(event){
        event.preventDefault(); 
        
        removeOverlay(); 

        let overlay = $("<div>",{id: "overlay"});
        let container = $("<div>",{id:"overlay-container"}).click(removeOverlay);

        let src = $(this).attr("href");
        let image = $("<img>",{
            id:"overlay-image",
            src: src
        });

        $(container).append(image);
        $("body").append(overlay, container);

    });
});

