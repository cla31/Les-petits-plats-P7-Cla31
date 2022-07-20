//Pour la partie 2.1
function filterIngredients(recipesToFilter) {
    let selectedIngredients = recipesToFilter;
    chosenIngredients.forEach((item) => {
        selectedIngredients = selectedIngredients.filter(
            (recipe) =>
            recipe.ingredients.find((elt) =>
                elt.ingredient.toLowerCase().includes(item)
            )
        );
    });
    return selectedIngredients;
}
//2.1
function filterAppliances(recipesToFilter) {
    let selectedAppliances = recipesToFilter;
    chosenAppliances.forEach((item) => {
        selectedAppliances = selectedAppliances.filter(
            (recipe) =>
            recipe.appliance.toLowerCase().includes(item)

        );
    });
    return selectedAppliances;
}
//2.1
function filterUstensils(recipesToFilter) {
    let selectedUstensils = recipesToFilter;
    chosenUstensils.forEach((item) => {
        selectedUstensils = selectedUstensils.filter((recipe) =>
            recipe.ustensils.find((elt) =>
                elt.toLowerCase().includes(item)
            )
        );
    });
    return selectedUstensils;
}