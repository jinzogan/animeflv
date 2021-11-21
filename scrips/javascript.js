// JavaScript Document

function overlay(){

  document.querySelector(".agregados .items > .fa-play-circle" ," ::before  ").classList.add("descripcion-contenido-onmouse");;

}

document.querySelector(".titulo").addEventListener("click", function(){

    document.querySelector(".animes-emision .titulo .fa-chevron-down").classList.toggle("rotate-icon");
    document.querySelector(".animes-emision .menu-sidebar-emision").classList.toggle("down");
    
  })



