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
        // console.log("recipes", recipes);
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
    const filteredIngredients = filterIngredients(recipesSearchBar);
    const filteredAppliances = filterAppliances(filteredIngredients);
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
    const inputValue = e.target.value.toLowerCase();
    const itemsList = document.querySelectorAll(".dropdown-item");
    for (i = 0; i < itemsList.length; i++) {
        if (!itemsList[i].innerHTML.toLowerCase().includes(inputValue)) {
            itemsList[i].style.display = "none";
        } else {
            itemsList[i].style.display = "list-item";
        }
    }
}

document.querySelector("#inputBlue").addEventListener("input", filterInput);
document.querySelector("#inputGreen").addEventListener("input", filterInput);
document.querySelector("#inputRed").addEventListener("input", filterInput);