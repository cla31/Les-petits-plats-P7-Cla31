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

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

//2.2 fonction qui permet d'afficher les recettes
function displayRecipes(recipesToDisplay) {
    // console.log("Les objets recette: ", objectRecipes);
    document.getElementById("recipesCards").innerHTML = ` ${recipesToDisplay.map( element =>  {return element.display()
    }).join('')}`;
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//2.3
function displayIngredientsFromRecipes(allRecipes) {
    let allIngredients = [];
    allRecipes.forEach(element => {
        // console.log("Array ingredient", element.ingredients);
        element.ingredients.forEach(index => {
            // console.log("Object ingredient", index.ingredient)
            allIngredients.push(index.ingredient);
        })
    });
    // console.log(allIngredients);
    // console.log("Les ingrédients dans un tableau", ingredients);
    allIngredients = [...new Set(allIngredients)].sort();
    // console.log(allIngredients);

    //Affichage des ingrédients via leur classe et leur fonction.
    ingredients = Objects(allIngredients, Ingredient);
    // console.log("Les objets ingrédients", ingredients);
    document.getElementById("ingredients").innerHTML = ` ${ingredients.map( element =>  {return element.display() }).join('')}`;

    //Préparation de l'affichage de chacun des ingrédients ds le DOM (récupération des classes dans un tableau pour générer l'affichage de tous les ingrédients)
    allIngredients = Array.from(document.querySelectorAll(".ingredient"));
    // console.log("ingredients à cliquer.....*****", allIngredients[14]);
    allIngredients.forEach((item) => {
        // console.log("ITEMMMM", item.dataset.element);
        //A chaque fois qu'on clique sur un item
        item.addEventListener("click", () => {
            // console.log("ITEMMMM", item.dataset.element);
            //On vérifie si l'élément est déjà là ou pas
            if (!chosenIngredients.includes(item.dataset.element.toLowerCase())) {
                chosenIngredients.push(
                    item.dataset.element.toLowerCase());
            }
            //On vide l'input
            document.querySelector("#inputBlue").value = '';
            orchestrator();
        });

    });
    // console.log("Tableau des tags selectionnés ds createIngredient....", chosenTags);

};
////////////////////////////////////////////////////////////////////////////
//2.3
//Les appareils
function displayAppliancesFromRecipes(allRecipes) {
    let allAppliances = [];
    allRecipes.forEach(element => {
        // console.log("Array ingredient", element.ingredients);
        // console.log("Object ingredient", index.ingredient)
        allAppliances.push(element.appliance);

    });
    // // console.log(allIngredients);
    // // console.log("Les ingrédients dans un tableau", ingredients);
    allAppliances = [...new Set(allAppliances)].sort();
    // console.log(allIngredients);

    // //Affichage des ingrédients via leur classe et leur fonction.
    appliances = Objects(allAppliances, Device);
    // console.log("Les objets appliances", allAppliances);
    document.getElementById("appliances").innerHTML = ` ${appliances.map( element =>  {return element.display() }).join('')}`;

    // //Préparation de l'affichage de chacun des ingrédients ds le DOM (récupération des classes dans un tableau pour générer l'affichage de tous les ingrédients)
    allAppliances = Array.from(document.querySelectorAll(".appliance"));
    // console.log("appareils à cliquer.....*****", allAppliances);

    allAppliances.forEach((item) => {
        //A chaque fois qu'on clique sur un item
        item.addEventListener("click", () => {
            // console.log("ITEMMMM", item.dataset.element);
            if (!chosenAppliances.includes(item.dataset.element.toLowerCase())) {
                chosenAppliances.push(
                    item.dataset.element.toLowerCase()
                );
            }
            //On vide l'input
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
        // console.log("Array ingredient", element.ingredients);
        element.ustensils.forEach(index => {
            // console.log("Object ingredient", index.ingredient)
            allUstensils.push(index);
        })
    });
    // console.log(allUstensils);
    allUstensils = [...new Set(allUstensils)].sort();

    // //Affichage des ingrédients via leur classe et leur fonction.
    ustensils = Objects(allUstensils, Ustensil);
    document.getElementById("ustensils").innerHTML = ` ${ustensils.map( element =>  {return element.display() }).join('')}`;

    // //Préparation de l'affichage de chacun des ingrédients ds le DOM (récupération des classes dans un tableau pour générer l'affichage de tous les ingrédients)
    allUstensils = Array.from(document.querySelectorAll(".ustensil"));
    // console.log("ingredients à cliquer.....*****", allIngredients);

    allUstensils.forEach((item) => {
        //A chaque fois qu'on clique sur un item
        item.addEventListener("click", () => {
            // console.log("ITEMMMM", item.dataset.element);
            if (!chosenUstensils.includes(item.dataset.element.toLowerCase())) {
                chosenUstensils.push(
                    item.dataset.element.toLowerCase()
                );
            }
            //         // console.log("Cliiiiiiqué!!!!!!!");
            //         // console.log("Tableau des tags selectionnés ds createIngredient....", chosenTags);
            //         // console.log("Les objets ingrédients dans createIngr+++++++++++++++", ingredients);
            //On vide l'input
            document.querySelector("#inputRed").value = '';
            orchestrator();
        });
    });

};

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

//2.4
function displayTagIngredients() {
    const tagsIngr = document.querySelector(".tagsIngredient");
    // console.log("chosen tags ds display", chosenTags);
    tagsIngr.innerHTML = ` ${chosenIngredients.map( item =>  
        {return ` 
        <div class="tagSelected" style="background-color:#007bff;">
            ${item}
            <img class="closeIngredients" src="assets/images/close.svg" class="ml-5 mb-1" alt="" />
        </div>
        `
    }).join('')}`;
        let cross = document.querySelectorAll(".closeIngredients");
        // console.log("crooooss",cross)
        cross.forEach((tags, index) => tags.addEventListener("click", e=>{
            // console.log("INDEEEEEEEX",index);
            let element = e.target;
            // suppression de l'element graphique
            element.parentNode.remove(element);
            // console.log("ChosenIngr avant 1",chosenIngredients);
            chosenIngredients = chosenIngredients.filter(e => e !== chosenIngredients[index]);
            // console.log("ChosenIngr après 2",chosenIngredients);
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
            // console.log("INDEEEEEEEX",index);
            let element = e.target;
            // suppression de l'element graphique
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
            // console.log("INDEEEEEEEX",index);
            let element = e.target;
            // suppression de l'element graphique
            element.parentNode.remove(element);
            chosenUstensils = chosenUstensils.filter(e => e !== chosenUstensils[index]);
            orchestrator();
        }));

}


///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

// Gestion des filtres.
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
let SearchBarValue="";
//Tableau des recettes sélectionnées dans la recherche principale.
let generalSearch=[];

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
function allRecipesFilter(filterSearchRecipes){
    let selectedRecipesBySearch = [];
    console.log("Fonction avec les recettes");
    filterSearchRecipes.filter((recipe)=>{
        if(
            recipe.name
            .toLowerCase()
            .replace(/\s/g, "")
            .includes(SearchBarValue)||
            recipe.description
            .toLowerCase()
            .replace(/\s/g, "")
            .includes(SearchBarValue)||
            recipe.ingredients.find((item) =>
                item.ingredient
                .toLowerCase()
                .replace(/\s/g, "")
                .includes(SearchBarValue)
            )

        ){
        selectedRecipesBySearch.push(recipe);
        selectedRecipesBySearch = [...new Set(selectedRecipesBySearch)];
        // console.log("Tableau selectedRecipesBySearch",selectedRecipesBySearch);

        }
    });    
return selectedRecipesBySearch;
}
//2
//Fonction ds le listener de l'input
function principalFilter(e){
//Valeur de ce que rentre l'utilisateur:::
SearchBarValue = e.target.value.toLowerCase().replace(/\s/g, "");
    //Si la longueur de l'input est supérieure à 2
    if (SearchBarValue.length > 2) {
        // console.log("OOOOOK");
        //Fonction qui va filtrer les recettes en fonction des caractères
        generalSearch=allRecipesFilter(recipes);      
        if (generalSearch.length === 0) {
            document.getElementById("recipesCards").innerHTML =
                "<p id='error'> Aucune recette ne correspond à votre critère ...vous pouvez, par exemple, rechercher 'tarte aux pommes', 'poisson', etc. </p>";
        } else {
            orchestrator(generalSearch);
        }
       
    }else{
        // console.log("3 caractères minimum");
        orchestrator(recipes);
    }
}

console.timeEnd("Temps de l'algo");