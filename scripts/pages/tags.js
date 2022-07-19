//2.4
function displayTagIngredients() {
    const tagsIngr = document.querySelector(".tagsIngredient");
    // console.log("chosen tags ds display", chosenTags);
    tagsIngr.innerHTML = ` ${chosenIngredients.map( item =>  
        {return ` 
        <div class="tagSelected" style="background-color:#007bff;">
            ${item}
            <img class="closeIngredients" src="assets/images/close.svg" class="ml-5 mb-1" alt="" />
        </div>
        `
    }).join('')}`;
        let cross = document.querySelectorAll(".closeIngredients");
        // console.log("crooooss",cross)
        cross.forEach((tags, index) => tags.addEventListener("click", e=>{
            // console.log("INDEEEEEEEX",index);
            let element = e.target;
            // suppression de l'element graphique
            element.parentNode.remove(element);
            // console.log("ChosenIngr avant 1",chosenIngredients);
            chosenIngredients = chosenIngredients.filter(e => e !== chosenIngredients[index]);
            // console.log("ChosenIngr après 2",chosenIngredients);
            orchestrator();
        }));
}
//2.4
function displayTagAppliances(){
    const tagsIngr = document.querySelector(".tagsAppliance");
    tagsIngr.innerHTML =` ${chosenAppliances.map( item =>  
        {return ` 
    <div class="tagSelected" style="background-color:#28a745;">${item}
        <img class="closeAppliances" src="assets/images/close.svg" class="ml-5 mb-1" alt="" />
    </div>`
    }).join('')}`;
    let cross = document.querySelectorAll(".closeAppliances");
        cross.forEach((tags, index) => tags.addEventListener("click", e=>{
            // console.log("INDEEEEEEEX",index);
            let element = e.target;
            // suppression de l'element graphique
            element.parentNode.remove(element);
            chosenAppliances = chosenAppliances.filter(e => e !== chosenAppliances[index]);
            orchestrator();
        }));

}
//2.4
function displayTagUstensils(){
    const tagsUs = document.querySelector(".tagsUstensils");
    tagsUs.innerHTML =` ${chosenUstensils.map( item =>  
        {return ` 
    <div class="tagSelected" style="background-color:#dc3545;">${item}
        <img class="closeUstensils" src="assets/images/close.svg" class="ml-5 mb-1" alt="" />
    </div>`
    }).join('')}`;
    let cross = document.querySelectorAll(".closeUstensils");
        cross.forEach((tags, index) => tags.addEventListener("click", e=>{
            // console.log("INDEEEEEEEX",index);
            let element = e.target;
            // suppression de l'element graphique
            element.parentNode.remove(element);
            chosenUstensils = chosenUstensils.filter(e => e !== chosenUstensils[index]);
            orchestrator();
        }));

}