//2.4
function displayTagIngredients() {
    const tagsIngr = document.querySelector(".tagsIngredient");
    tagsIngr.innerHTML = ` ${chosenIngredients.map( item =>  
        {return ` 
        <div class="tagSelected" style="background-color:#007bff;">
            ${item}
            <img class="closeIngredients" src="assets/images/close.svg" class="ml-5 mb-1" alt="" />
        </div>
        `
    }).join('')}`;
        let cross = document.querySelectorAll(".closeIngredients");
        cross.forEach((tags, index) => tags.addEventListener("click", e=>{
            let element = e.target;
            element.parentNode.remove(element);
            chosenIngredients = chosenIngredients.filter(e => e !== chosenIngredients[index]);
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
            let element = e.target;
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
            let element = e.target;
            element.parentNode.remove(element);
            chosenUstensils = chosenUstensils.filter(e => e !== chosenUstensils[index]);
            orchestrator();
        }));

}