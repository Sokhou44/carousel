
"use strict"

const button = document.getElementById ("btn");

const images = document.querySelectorAll(".carousel img");

let index = 0;

function afficherImage(i) {
    for (let j = 0; j < images.length; j++) {
        images[j].classList.remove("actif");
}

  images[i].classList.add("actif");

}

  afficherImage(index);

  button.addEventListener("click", function() {
    index = index + 1;
  
  if (index >= images.length) {
    index = 0;
  } 

  afficherImage(index);
});