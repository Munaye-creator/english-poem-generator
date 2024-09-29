function generatePoem(event){
    event.preventDefault();



new Typewriter("#poem", {
  strings: "Yesterday, upon the stair",
  autoStart: true,
  delay: 1,
  cursor:"",
});

    
}



let poemFormElement=document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);