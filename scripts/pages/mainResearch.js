//1
const searchBar = document.querySelector("#recherche");
console.time("Temps de l'algo");
searchBar.addEventListener("input", principalFilter);
let SearchBarValue = "";
let generalSearch = [];

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

//Boucles for: Fonction qui filtre les recettes en fonction des caractères (orchestrator).
//3
// function allRecipesFilter(filterSearchRecipes) {
//     let selectedRecipesBySearch = [];
//     // console.log("Fonction avec les recettes");
//     for (let recipe of filterSearchRecipes) {
//         // console.log("Recipe dans le for",recipe);
//         if (
//             recipe.name
//             .toLowerCase()
//             .replace(/\s/g, "")
//             .includes(SearchBarValue) ||
//             recipe.description
//             .toLowerCase()
//             .replace(/\s/g, "")
//             .includes(SearchBarValue)) {
//             selectedRecipesBySearch.push(recipe);
//             selectedRecipesBySearch = [...new Set(selectedRecipesBySearch)];
//             // console.log("Tableau selectedRecipesBySearch",selectedRecipesBySearch);
//         }
//         for (let i = 0; i < recipe.ingredients.length; i++) {
//             const ingredientName = recipe.ingredients[i].ingredient
//                 .toLowerCase()
//                 .replace(/\s/g, "");
//             //console.log(ingredientName);
//             if (ingredientName.includes(SearchBarValue)) {
//                 selectedRecipesBySearch.push(recipe);
//                 selectedRecipesBySearch = [...new Set(selectedRecipesBySearch)];
//             }
//         }
//     }
//     return selectedRecipesBySearch;
// }
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

//3
function allRecipesFilter(filterSearchRecipes) {
    let selectedRecipesBySearch = [];
    // console.log("Fonction avec les recettes");
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
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//2
function principalFilter(e) {
    SearchBarValue = e.target.value.toLowerCase().replace(/\s/g, "");
    // console.log("searchvalue", SearchBarValue.length);
    if (SearchBarValue.length >= 3) {
        generalSearch = allRecipesFilter(recipes);
        if (generalSearch.length === 0) {
            document.getElementById("recipesCards").innerHTML =
                "<p id='error'> Aucune recette ne correspond à votre critère ...vous pouvez, par exemple, rechercher 'tarte aux pommes', 'poisson', etc. </p>";
        } else {
            orchestrator(generalSearch);
        }

    } else {
        // orchestrator();
        console.log("search value est sous 3 caractères");
    }
}

console.timeEnd("Temps de l'algo");