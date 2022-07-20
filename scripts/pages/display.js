//2.2 fonction qui permet d'afficher les recettes
function displayRecipes(recipesToDisplay) {
    document.getElementById("recipesCards").innerHTML = ` ${recipesToDisplay.map( element =>  {return element.display()
    }).join('')}`;
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//2.3
//Les ingrédients
function displayIngredientsFromRecipes(allRecipes) {
    let allIngredients = [];
    allRecipes.forEach(element => {
        element.ingredients.forEach(index => {
            allIngredients.push(index.ingredient);
        })
    });
    allIngredients = [...new Set(allIngredients)].sort();
    ingredients = Objects(allIngredients, Ingredient);
    document.getElementById("ingredients").innerHTML = ` ${ingredients.map( element =>  {return element.display() }).join('')}`;
    allIngredients = Array.from(document.querySelectorAll(".ingredient"));
    allIngredients.forEach((item) => {
        item.addEventListener("click", () => {
            if (!chosenIngredients.includes(item.dataset.element.toLowerCase())) {
                chosenIngredients.push(
                    item.dataset.element.toLowerCase());
            }
            document.querySelector("#inputBlue").value = '';
            orchestrator();
        });

    });

};
////////////////////////////////////////////////////////////////////////////
//2.3
//Les appareils
function displayAppliancesFromRecipes(allRecipes) {
    let allAppliances = [];
    allRecipes.forEach(element => {
        allAppliances.push(element.appliance);

    });
    allAppliances = [...new Set(allAppliances)].sort();
    appliances = Objects(allAppliances, Device);
    document.getElementById("appliances").innerHTML = ` ${appliances.map( element =>  {return element.display() }).join('')}`;
    allAppliances = Array.from(document.querySelectorAll(".appliance"));
    allAppliances.forEach((item) => {
        item.addEventListener("click", () => {
            if (!chosenAppliances.includes(item.dataset.element.toLowerCase())) {
                chosenAppliances.push(
                    item.dataset.element.toLowerCase()
                );
            }
            document.querySelector("#inputGreen").value = '';
            orchestrator();
        });
    });
};

////////////////////////////////////////////////////////////////////////////
//2.3
//Les ustensils
function displayUstensilsFromRecipes(allRecipes) {
    let allUstensils = [];
    allRecipes.forEach(element => {
        element.ustensils.forEach(index => {
            allUstensils.push(index);
        })
    });
    allUstensils = [...new Set(allUstensils)].sort();
    ustensils = Objects(allUstensils, Ustensil);
    document.getElementById("ustensils").innerHTML = ` ${ustensils.map( element =>  {return element.display() }).join('')}`;
    allUstensils = Array.from(document.querySelectorAll(".ustensil"));
    allUstensils.forEach((item) => {
        item.addEventListener("click", () => {
            if (!chosenUstensils.includes(item.dataset.element.toLowerCase())) {
                chosenUstensils.push(
                    item.dataset.element.toLowerCase()
                );
            }
            document.querySelector("#inputRed").value = '';
            orchestrator();
        });
    });

};