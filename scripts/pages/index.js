// Les tableaux
let recipes = [];
let ingredients = [];
let appliances = [];
let ustensils = [];

//fonction qui permet d'afficher:
function display(id, elements) {
    try {
        document.getElementById(id).innerHTML = ` ${elements.map( element =>  {return element.display()
        }).join('')}`;
    } catch (erreur) {
        console.log(erreur);
    }
}

//fonction qui permet de transformer les éléments d'un tableau en objets:
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

//fonction qui permet d'afficher les recettes
function displayRecipes() {
    const objectRecipes = Objects(recipes, Recipe);
    // console.log("Les objets recette: ", objectRecipes);
    display("recipesCards", objectRecipes);
}

//fonction qui permet d'afficher les ingrédients
function displayIngredients() {
    recipes.forEach(element => {
        // console.log("Array ingredient", element.ingredients);
        element.ingredients.forEach(index => {
            // console.log("Object ingredient", index.ingredient)
            ingredients.push(index.ingredient);
        })
    });
    // console.log("Les ingrédients dans un tableau", ingredientsData);
    const uniqueIngredients = [...new Set(ingredients)];
    // console.log("Les ingrédients uniques", uniqueIngredients);
    ingredients = Objects(uniqueIngredients, Ingredient);
    // console.log("Les objets ingrédients", ingredients);
    display("ingredients", ingredients);

}

//fonction qui permet d'afficher les appareils:
function displayAppliances() {
    recipes.forEach(element => {
        // console.log("Array appareil", element.appliance);
        appliances.push(element.appliance);
    });
    // console.log("Les appareils dans un tableau", appliancesData);
    const uniqueAppliances = [...new Set(appliances)];
    // console.log("Les appareils dans un tableau sans doublons", uniqueAppliances);
    appliances = Objects(uniqueAppliances, Device);
    // console.log("Les objets appareil ds le tableau???", appliances);
    display("appliances", appliances);

}

//fonction qui permet d'afficher les ustensiles:
function displayUstensils() {
    recipes.forEach(element => {
        // console.log("Array ustensiles", element.ustensils);
        element.ustensils.forEach(index => {
            // console.log("Object ustensiles", index);
            ustensils.push(index);
        })
    });
    const uniqueUstensils = [...new Set(ustensils)];
    ustensils = Objects(uniqueUstensils, Ustensil);
    display("ustensils", ustensils);

}

//fonction moteur de la page:
async function init(pathJson) {

    try {
        const jsonDatas = await getDatas(pathJson);
        //***Récupération des données pour les recettes et transformation en objets.
        recipes = jsonDatas.recipes;
        // console.log("Les recettes??: ", recipes);
        orchestrator();


    } catch (erreur) {
        console.log(erreur);
    }
}
// La fonction qui orchestre le jeux de données:
function orchestrator() {
    displayRecipes();
    displayIngredients();
    displayAppliances();
    displayUstensils();

}

init(pathJsonProject);