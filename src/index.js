function displayPoem(response){
    new Typewriter("#poem", {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor:"",
});

}



function generatePoem(event){
    event.preventDefault();


    let instructionsInput=document.querySelector("#user-instructions");
    let apiKey="a71d5a5a04be4tba9o64b1471ce0fb03";
    let prompt=`User instructions:Generate a English poem about ${instructionsInput.value}`;
    let context="You are a Poem expert and love to write short poems.Your mission is to generate a 4 line poem and separate each line with a <br/>.Do not include a title. Make sure to follow the user instructions.Sign the poem with `SheCodes AI` inside a <strong> ";
    let apiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;



    let poemElement=document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML=`<div class="generating"> ⏳Generating poem about ${instructionsInput.value}</div>`;

    
  
axios.get(apiUrl).then(displayPoem);

    
}



let poemFormElement=document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);