const NB_SLIDES = 8;
const SPEED = 2000; // en ms

var slideshow = document.querySelector("#slideshow");
var script = document.querySelector("script");
var pathSlide = script.dataset.nohome == "true" ? "../img/slideshow/slide" : "img/slideshow/slide";
var cpt = 0; // compteur de slides

console.log("Chemin vers les slides : ", pathSlide);


// FONCTIONS

function startSlideshow()
{
  setTimeout(
    function()
    {
      cpt++;

      // On change l'image du slideshow grâce au compteur de slides
      slideshow.style.backgroundImage = "url('"+pathSlide+cpt+".jpg')";

      // On réinitialise le compteur de slides
      // si on a atteint la dernière image
      if(cpt == NB_SLIDES) cpt = 0;

      // On appelle à nouveau la méthode (récursion)
      startSlideshow();
    },
    SPEED
  );
}

// RUNNING SLIDES !
startSlideshow();