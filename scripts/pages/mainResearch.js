///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%  BARRE DE RECHERCHE  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

//1
//Gestion barre de recherche
const searchBar = document.querySelector("#recherche");
//++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++
console.time("Temps de l'algo");
//Listener sur la barre de recherche:::
searchBar.addEventListener("input", principalFilter);
//Requette principale
let SearchBarValue = "";
//Tableau des recettes sélectionnées dans la recherche principale.
let generalSearch = [];

//Boucles for: Fonction qui filtre les recettes en fonction des caractères (orchestrator).
//3
// function allRecipesFilter(filterSearchRecipes){
//     let selectedRecipesBySearch = [];
//     // console.log("Fonction avec les recettes");
//     for (let recipe of filterSearchRecipes) {
//         // console.log("Recipe dans le for",recipe);
//         if (
//             recipe.name
//             .toLowerCase()
//             .replace(/\s/g, "")
//             .includes(SearchBarValue)||
//             recipe.description
//             .toLowerCase()
//             .replace(/\s/g, "")
//             .includes(SearchBarValue))
//     {
//         selectedRecipesBySearch.push(recipe);
//         selectedRecipesBySearch = [...new Set(selectedRecipesBySearch)];
//         // console.log("Tableau selectedRecipesBySearch",selectedRecipesBySearch);
//     }
//     for (let i = 0; i < recipe.ingredients.length; i++) {
//         const ingredientName = recipe.ingredients[i].ingredient
//             .toLowerCase()
//             .replace(/\s/g, "");
//         //console.log(ingredientName);
//         if (ingredientName.includes(SearchBarValue)) {
//             selectedRecipesBySearch.push(recipe);
//             selectedRecipesBySearch = [...new Set(selectedRecipesBySearch)];
//         }
//     }  
// }
// return selectedRecipesBySearch;
// }

//Fonction (prototype array) qui filtre les recettes en fonction des caractères (orchestrator).
//3
function allRecipesFilter(filterSearchRecipes) {
    let selectedRecipesBySearch = [];
    console.log("Fonction avec les recettes");
    filterSearchRecipes.filter((recipe) => {
        if (
            recipe.name
            .toLowerCase()
            .replace(/\s/g, "")
            .includes(SearchBarValue) ||
            recipe.description
            .toLowerCase()
            .replace(/\s/g, "")
            .includes(SearchBarValue) ||
            recipe.ingredients.find((item) =>
                item.ingredient
                .toLowerCase()
                .replace(/\s/g, "")
                .includes(SearchBarValue)
            )

        ) {
            selectedRecipesBySearch.push(recipe);
            selectedRecipesBySearch = [...new Set(selectedRecipesBySearch)];
            // console.log("Tableau selectedRecipesBySearch",selectedRecipesBySearch);

        }
    });
    return selectedRecipesBySearch;
}
//2
//Fonction ds le listener de l'input
function principalFilter(e) {
    //Valeur de ce que rentre l'utilisateur:::
    SearchBarValue = e.target.value.toLowerCase().replace(/\s/g, "");
    //Si la longueur de l'input est supérieure à 2
    if (SearchBarValue.length > 2) {
        // console.log("OOOOOK");
        //Fonction qui va filtrer les recettes en fonction des caractères
        generalSearch = allRecipesFilter(recipes);
        if (generalSearch.length === 0) {
            document.getElementById("recipesCards").innerHTML =
                "<p id='error'> Aucune recette ne correspond à votre critère ...vous pouvez, par exemple, rechercher 'tarte aux pommes', 'poisson', etc. </p>";
        } else {
            orchestrator(generalSearch);
        }

    } else {
        // console.log("3 caractères minimum");
        orchestrator(recipes);
    }
}

console.timeEnd("Temps de l'algo");