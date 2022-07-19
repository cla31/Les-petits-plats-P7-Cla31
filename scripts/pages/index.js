//implémentation de la barre de recherche

let recipes = [];

//Tableaux
let chosenIngredients = [];
let chosenAppliances = [];
let chosenUstensils = [];





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

//1
//fonction moteur de la page, récupère le jeu de données:
async function init(pathJson) {

    try {
        //1.1
        let listRecipes;
        const jsonDatas = await getDatas(pathJson);
        const objetsRecipes = jsonDatas.recipes;
        listRecipes = Objects(objetsRecipes, Recipe);
        // console.log("RECIPES", recipes);
        //Test pour 8000 recettes:
        recipes = [
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,

            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,

            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,

            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,

            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,

            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,

            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,

            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
            ...listRecipes,
        ];
        console.log("recipes", recipes);
        orchestrator();

    } catch (erreur) {
        console.log(erreur);
    }
}

init(pathJsonProject);

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

//2:
function orchestrator() {
    //2.1
    const recipesSearchBar = allRecipesFilter(recipes);
    //2.1.Tri de la liste des recettes
    // const filteredIngredients = filterIngredients(recipes);
    const filteredIngredients = filterIngredients(recipesSearchBar);
    const filteredAppliances = filterAppliances(filteredIngredients);
    //Recettes finales à afficher
    const recipesToDisplay = filterUstensils(filteredAppliances);
    //2.2.Affiche les recettes
    displayRecipes(recipesToDisplay);
    //2.3.Affiche les dropdowns
    displayIngredientsFromRecipes(recipesToDisplay);
    displayAppliancesFromRecipes(recipesToDisplay);
    displayUstensilsFromRecipes(recipesToDisplay);
    //2.4.Affiche les tags
    displayTagIngredients();
    displayTagAppliances();
    displayTagUstensils();
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// Gestion des champs de recherche dans les inputs.
function filterInput(e) {
    //toLowerCase = met les valeurs de la chaîne en miniscule.
    const inputValue = e.target.value.toLowerCase();
    // console.log("input value", inputValue);
    const itemsList = document.querySelectorAll(".dropdown-item");
    // console.log("ingredientsList[2].innerHTML", ingredientsList[2].innerHTML);
    for (i = 0; i < itemsList.length; i++) {
        // console.log("itemsList[i]", itemsList[i].innerHTML)
        //Si l'input ne correspond pas à la liste des ingrédients, ne l'affiche pas.
        if (!itemsList[i].innerHTML.toLowerCase().includes(inputValue)) {
            itemsList[i].style.display = "none";
        } else {
            itemsList[i].style.display = "list-item";
        }
    }
}
//Pour les ingrédients
document.querySelector("#inputBlue").addEventListener("input", filterInput);

//Pour les appareils
document.querySelector("#inputGreen").addEventListener("input", filterInput);
//Pour les ustensils
document.querySelector("#inputRed").addEventListener("input", filterInput);