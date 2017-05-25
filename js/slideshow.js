const NB_SLIDES = 8;
const SPEED = 2000; // en ms

var slideshow = document.querySelector("#slideshow");
var cpt = 0; // compteur de slides


// FONCTIONS

function startSlideshow()
{
  setTimeout(
    function()
    {
      cpt++;

      // On change l'image du slideshow grâce au compteur de slides
      slideshow.style.backgroundImage = "url('img/slideshow/slide"+cpt+".jpg')";

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