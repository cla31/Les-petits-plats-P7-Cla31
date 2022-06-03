function display(id, elements) {
    try {
        document.getElementById(id).innerHTML = ` ${elements.map( element =>  {return element.display()
        }).join('')}`;
    } catch (erreur) {
        console.log(erreur);
    }
}


function Objects(elements, Instance) {
    try {
        objectElements = elements.map(function instance(recipe) {
            return new Instance(recipe);
        });
        return objectElements;
    } catch (erreur) {
        console.log(erreur);
    }
}




async function orchestrator(pathJson) {
    try {
        const jsonDatas = await getDatas(pathJson);
        //***Récupération des données pour les recettes et transformation en objets.
        const elements = jsonDatas.recipes;
        // console.log("Les recettes??: ", datasRecipes);
        const objectRecipes = Objects(elements, Recipe);
        // console.log("Les objets recette: ", objectRecipes);
        display("recipesCards", objectRecipes);
        //***Création des objets ingrédients:
        const ingredientsData = [];
        // console.log("début de recherche ingrédient: ", elements);
        elements.forEach(element => {
            // console.log("Array ingredient", element.ingredients);
            element.ingredients.forEach(index => {
                // console.log("Object ingredient", index.ingredient)
                ingredientsData.push(index.ingredient);
            })
        });
        // console.log("Les ingrédients dans un tableau", ingredientsData);
        const uniqueIngredients = [...new Set(ingredientsData)];
        // console.log("Les ingrédients uniques", uniqueIngredients);
        const ingredients = Objects(uniqueIngredients, Ingredient);
        // console.log("Les objets ingrédients", ingredients);
        display("ingredients", ingredients);
        //***Création des objets appareils:
        const appliancesData = [];
        elements.forEach(element => {
            // console.log("Array appareil", element.appliance);
            appliancesData.push(element.appliance);
        });
        // console.log("Les appareils dans un tableau", appliancesData);
        const uniqueAppliances = [...new Set(appliancesData)];
        // console.log("Les appareils dans un tableau sans doublons", uniqueAppliances);
        const appliances = Objects(uniqueAppliances, Device);
        // console.log("Les objets appareil ds le tableau???", appliances);
        display("appliances", appliances);
        //***Création des objets ustensiles:

    } catch (erreur) {
        console.log(erreur);
    }
}
orchestrator(pathJsonProject);