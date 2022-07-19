//Pour la partie 2.1
//Filtre des ingrédients
function filterIngredients(recipesToFilter) {
    //Filtre les recettes selon les ingrédients choisis
    let selectedIngredients = recipesToFilter;
    chosenIngredients.forEach((item) => {
        // console.log("ITEM", item);
        selectedIngredients = selectedIngredients.filter(
            (recipe) =>
            recipe.ingredients.find((elt) =>
                // console.log(item, elt.ingredient);
                elt.ingredient.toLowerCase().includes(item)
            )
        );
        // console.log("selected ingredients", selectedIngredients);
    });
    return selectedIngredients;
}
//2.1
//Filtre des appareils
function filterAppliances(recipesToFilter) {
    let selectedAppliances = recipesToFilter;
    chosenAppliances.forEach((item) => {
        // console.log("item", item);
        selectedAppliances = selectedAppliances.filter(
            (recipe) =>
            // console.log(recipe.appliance)
            recipe.appliance.toLowerCase().includes(item)

        );
    });
    // console.log("selectedAppliance++++++++", selectedAppliances);
    return selectedAppliances;
}
//2.1
//Filtre les ustensils
function filterUstensils(recipesToFilter) {
    //Filtre les recettes filtrées par appareils, selon les ustensiles choisis
    let selectedUstensils = recipesToFilter;
    chosenUstensils.forEach((item) => {
        // console.log("item ustensils", item);
        selectedUstensils = selectedUstensils.filter((recipe) =>
            recipe.ustensils.find((elt) =>
                elt.toLowerCase().includes(item)
            )
        );
    });
    // console.log("selectedUstensils++++++++", selectedUstensils);
    return selectedUstensils;
}